<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Statamic\Facades\Form as StatamicForm;
use Statamic\Eloquent\Forms\FormModel;
use App\Http\Requests\StoreHaveLandRequest;
use App\Mail\HaveLandSubmitted;
use App\Models\HaveLandSubmission;
use Statamic\Facades\AssetContainer;

class TenhoUmaAreaController extends Controller
{
    public function index()
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri('/tenho-uma-area', $site);
        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'tenho_uma_area')
                ->first();
        }

        $contato = Entry::findByUri('/contato', $site) ?: Entry::query()
            ->whereCollection('pages')
            ->where('site', $site)
            ->where('blueprint', 'contato')
            ->first();

        return Inertia::render('HaveLand/HaveLand', [
            'dados'   => $entry?->toAugmentedArray(),
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }

    public function send(StoreHaveLandRequest $request)
    {
        $coords = json_decode((string) ($request->string('coordenadas') ?? '[]'), true) ?: [];
        $coords = array_values(array_filter($coords, fn ($p) =>
            is_array($p) && isset($p['lat'], $p['lng']) && is_numeric($p['lat']) && is_numeric($p['lng'])
        ));

        $rec = HaveLandSubmission::create([
            'name'          => (string) $request->string('nome'),
            'mobile'        => (string) $request->string('celular'),
            'email'         => (string) $request->string('email'),
            'cep'           => (string) $request->string('cep'),
            'coordinates'   => $coords,
            'area_hectares' => $request->input('tamanho_area') ?: null,
            'meta'          => [
                'observacoes' => (string) $request->string('informacoes'),
                'files'       => [],
                'consent_ip'  => $request->ip(),
                'user_agent'  => (string) $request->header('User-Agent'),
                'consent_at'  => now()->toIso8601String(),
            ],
        ]);

        $assetRefs   = [];
        $attachments = [];

        if ($request->hasFile('documentos')) {
            $container = \Statamic\Facades\AssetContainer::find('documentos'); // pode ser null
            $folder    = "tenho_uma_area/{$rec->uuid}";

            foreach ($request->file('documentos', []) as $file) {
                if (!$file || !$file->isValid()) continue;

                if ($container) {
                    $path  = trim($folder . '/' . $file->hashName(), '/');
                    $asset = $container->makeAsset($path)->upload($file);
                    $asset->save();

                    $assetRefs[] = $container->handle() . '::' . $asset->path();

                    $absPath = method_exists($asset, 'resolvedPath') && $asset->resolvedPath()
                        ? $asset->resolvedPath()
                        : \Illuminate\Support\Facades\Storage::disk($container->diskHandle())->path($asset->path());

                    $attachments[] = $absPath;
                } else {
                    $stored = $file->store($folder, 'public');
                    $assetRefs[]   = $stored;                                   // não é ref de container
                    $attachments[] = \Illuminate\Support\Facades\Storage::disk('public')->path($stored);
                }
            }
        }

        $rec->update(['meta' => array_replace($rec->meta ?? [], ['files' => $assetRefs])]);

        $payload = [
            'nome'          => $rec->name,
            'celular'       => $rec->mobile,
            'email'         => $rec->email,
            'cep'           => $rec->cep,
            'coordenadas'   => json_encode($rec->coordinates),
            'tamanho_area'  => $rec->area_hectares,
            'informacoes'   => data_get($rec->meta, 'observacoes'),
            'documentos'    => $assetRefs,
            'uuid'          => $rec->uuid,
            'consent_ip'    => data_get($rec->meta, 'consent_ip'),
            'user_agent'    => data_get($rec->meta, 'user_agent'),
            'consent_at'    => data_get($rec->meta, 'consent_at'),
        ];

        if ($form = \Statamic\Facades\Form::find('tenho_uma_area')) {
            $form->makeSubmission()->data($payload)->save();

            $emails = collect();
            if ($record = \Statamic\Eloquent\Forms\FormModel::where('handle', $form->handle())->first()) {
                $settings = $record->getAttribute('settings');
                if (is_string($settings)) $settings = json_decode($settings, true) ?? [];
                $emails = collect(data_get($settings, 'email', []));
            }
            if ($emails->isEmpty() && method_exists($form, 'toArray')) {
                $emails = collect(data_get($form->toArray(), 'email', []));
            }

            $mapLink = route('map.area.show', $rec->uuid);

            $emails->each(function ($cfg) use ($rec, $payload, $attachments, $mapLink) {
                $split = fn ($v) => collect(Arr::wrap($v))
                    ->flatMap(fn ($s) => is_string($s)
                        ? preg_split('/\s*[,;]\s*/', $s, -1, PREG_SPLIT_NO_EMPTY)
                        : [$s])
                    ->filter()->values()->all();

                $to      = $split(data_get($cfg, 'to'));
                if (empty($to)) return;

                $cc      = $split(data_get($cfg, 'cc'));
                $bcc     = $split(data_get($cfg, 'bcc'));
                $from    = data_get($cfg, 'from');
                $reply   = data_get($cfg, 'reply_to');
                $subject = data_get($cfg, 'subject', 'Nova proposta de área');
                $mailer  = data_get($cfg, 'mailer');

                $mailable = (new \App\Mail\HaveLandSubmitted(
                    $rec,
                    array_merge($payload, ['map_link' => $mapLink]),
                    $mapLink
                ))->subject($subject);

                if ($from)  $mailable->from($from);
                if ($reply) $mailable->replyTo($reply);

                foreach ($attachments as $absPath) {
                    if (is_string($absPath) && is_file($absPath)) {
                        $mailable->attach($absPath);
                    }
                }

                $pending = ($mailer ? \Illuminate\Support\Facades\Mail::mailer($mailer) : \Illuminate\Support\Facades\Mail::mailer())->to($to);
                if (!empty($cc))  $pending->cc($cc);
                if (!empty($bcc)) $pending->bcc($bcc);
                $pending->send($mailable);
            });
        }

        return back(303)
            ->with('success', 'Proposta enviada com sucesso!')
            ->with('area_uuid', $rec->uuid);
    }

    public function show(string $uuid)
    {
        $site = Site::current()->handle();
        $rec = HaveLandSubmission::where('uuid', $uuid)->firstOrFail();

        $coords = $rec->coordinates ?? [];
        $center = [-15.78, -47.93];
        if (!empty($coords)) {
            $lat = array_column($coords, 'lat');
            $lng = array_column($coords, 'lng');
            $center = [(min($lat)+max($lat))/2, (min($lng)+max($lng))/2];
        }

        $contato = Entry::findByUri('/contato', $site) ?: Entry::query()
            ->whereCollection('pages')
            ->where('site', $site)
            ->where('blueprint', 'contato')
            ->first();

        return Inertia::render('HaveLand/ShowMap', [
            'name'    => $rec->name,
            'phone'   => $rec->mobile,
            'email'   => $rec->email,
            'cep'   => $rec->cep,
            'coords'  => $coords,
            'area'    => $rec->area_hectares,
            'center'  => $center,
            'created' => $rec->created_at?->toIso8601String(),
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }
}
