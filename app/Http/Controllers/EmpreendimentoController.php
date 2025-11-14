<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Collection;
use Statamic\Facades\Site;

use Illuminate\Support\Arr;
use App\Http\Requests\StoreLeadRequest;
use App\Models\Lead;
use Statamic\Facades\Form as StatamicForm;
use Illuminate\Support\Facades\Mail;
use App\Mail\LeadSubmitted;
use Statamic\Eloquent\Forms\FormModel;

class EmpreendimentoController extends Controller
{
    public function index(Request $request)
    {
        $order  = $request->query('order', 'recentes');
        $state  = $request->query('state');
        $status = $request->query('status');
        $type   = $request->query('type');

        $query = Entry::query()->whereCollection('empreendimentos');

        if ($state !== null && $state !== '') {
            $query->where('estado', $state);
        }
        if ($status !== null && $status !== '') {
            $query->where('estagio_da_obra', (int) $status);
        }
        if ($type !== null && $type !== '') {
            $query->where('tipo', (int) $type);
        }

        switch ($order) {
            case 'nome-az':     $query->orderBy('title', 'desc'); break;
            case 'nome-za':     $query->orderBy('title', 'asc'); break;
            case 'menor-area':  $query->orderBy('area_de_lotes', 'desc'); break;
            case 'maior-area':  $query->orderBy('area_de_lotes', 'asc'); break;
            case 'recentes':
            default:
                $query->orderBy('id', 'desc');
        }

        $ventures = $query->get()->map(fn($e) => $e->toAugmentedArray())->all();

        $construtoras = Entry::query()
            ->whereCollection('construtoras')
            ->orderBy('id', 'asc')
            ->get()
            ->map(fn($e) => $e->toAugmentedArray())
            ->all();

        $states = collect($ventures)
            ->pluck('estado')
            ->filter()
            ->map(function ($s) {
                if (is_array($s)) {
                    $value = $s['value'] ?? ($s['key'] ?? null);
                    $label = $s['label'] ?? $value;
                } else {
                    $value = (string) $s;
                    $label = (string) $s;
                }
                if ($value === null || $value === '') return null;
                return ['label' => $label, 'value' => $value];
            })
            ->filter()
            ->unique('value')
            ->sortBy('label', SORT_NATURAL | SORT_FLAG_CASE)
            ->values()
            ->all();


        $blog = Entry::query()
            ->whereCollection('blog')
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get()
            ->map(function ($e) {
                $aug = $e->toAugmentedArray();
                if (method_exists($e, 'model') && $e->model()) {
                    $aug['created_at'] = optional($e->model()->created_at)->toIso8601String();
                } else {
                    $aug['created_at'] = optional($e->lastModified() ?? $e->date())->toIso8601String();
                }

                return $aug;
            })
            ->values()
            ->all();

        $site = Site::current()->handle();
        $contato = Entry::findByUri('/contato', $site);

        if (!$contato) {
            $contato = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('Ventures/Ventures', [
            'dados'       => $ventures,
            'construtoras'   => $construtoras,
            'states'         => $states,
            'blog'         => $blog,
            'contato' => $contato?->toAugmentedArray(),
            'currentFilters' => [
                'order'  => $order,
                'state'  => ($state  !== null && $state  !== '') ? $state        : null,
                'status' => ($status !== null && $status !== '') ? (int) $status : null,
                'type'   => ($type   !== null && $type   !== '') ? (int) $type   : null,
            ],
        ]);
    }

    public function show(string $slug, Request $request)
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri("/empreendimentos/{$slug}", $site);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('empreendimentos')
                ->where('slug', $slug)
                ->first();
        }

        if (! $entry) {
            abort(404);
        }

        $venture = $entry->toAugmentedArray();

        $related = Entry::query()
            ->whereCollection('empreendimentos')
            ->where('id', '!=', $entry->id())
            ->when(!empty($venture['estado']['value'] ?? $venture['estado'] ?? null), function ($q) use ($venture) {
                $estado = is_array($venture['estado'])
                    ? ($venture['estado']['value'] ?? $venture['estado']['key'] ?? null)
                    : $venture['estado'];
                if ($estado !== null && $estado !== '') {
                    $q->where('estado', $estado);
                }
            })
            ->orderBy('id', 'desc')
            ->limit(6)
            ->get()
            ->map(fn ($e) => $e->toAugmentedArray())
            ->all();

        $categoriesDif = Entry::query()
            ->whereCollection('categoria_diferencial')
            ->get()
            ->mapWithKeys(function ($e) {
                $id = $e->id();
                $title = $e->get('title');
                return [$id => $title];
            })
            ->all();

        $contato = Entry::findByUri('/contato', $site);
        if (!$contato) {
            $contato = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('Venture/Venture', [
            'dados' => $venture,
            'related' => $related,
            'categoriesDif'    => $categoriesDif,
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }

    public function store(StoreLeadRequest $request)
    {
        $lead = Lead::create([
            'venture_id'   => $request->venture_id,
            'venture_slug' => $request->venture_slug,
            'venture_name' => $request->venture_name,
            'name'         => $request->name,
            'phone'        => $request->phone,
            'email'        => $request->email,
            'cep'          => $request->cep,
            'consent_at'   => now(),
            'consent_ip'   => $request->ip(),
            'user_agent'   => (string) $request->header('User-Agent'),
        ]);

        if ($form = StatamicForm::find('empreendimento')) {
            $form->makeSubmission()->data([
                'venture_id'   => $lead->venture_id,
                'venture_slug' => $lead->venture_slug,
                'venture_name' => $lead->venture_name,
                'name'         => $lead->name,
                'phone'        => $lead->phone,
                'email'        => $lead->email,
                'cep'          => $lead->cep,
                'consent_at'   => $lead->consent_at,
                'consent_ip'   => $lead->consent_ip,
                'user_agent'   => $lead->user_agent,
            ])->save();

            $emails = collect();

            $record = FormModel::where('handle', $form->handle())->first();
            if ($record) {
                $settings = $record->getAttribute('settings');

                if (is_string($settings)) {
                    $settings = json_decode($settings, true) ?? [];
                }

                $emails = collect(data_get($settings, 'email', []));
            }

            if ($emails->isEmpty()) {
                $arr = method_exists($form, 'toArray') ? $form->toArray() : [];
                $emails = collect(data_get($arr, 'email', []));
            }

            if ($emails->isEmpty()) {
                $record = FormModel::where('handle', $form->handle())->first();
                if ($record) {
                    $attrs = $record->getAttributes();

                    foreach (['email', 'emails', 'config.email', 'config.emails', 'data.email'] as $path) {
                        $emails = collect(data_get($attrs, $path, []));
                        if ($emails->isNotEmpty()) break;
                    }
                }
            }

            $emails->each(function ($cfg) use ($lead) {
                $wrap = fn ($v) => collect(Arr::wrap($v))
                    ->flatMap(fn ($s) => is_string($s) ? preg_split('/\s*[,;]\s*/', $s, -1, PREG_SPLIT_NO_EMPTY) : [$s])
                    ->filter()->values()->all();

                $to      = $wrap(data_get($cfg, 'to'));
                $cc      = $wrap(data_get($cfg, 'cc'));
                $bcc     = $wrap(data_get($cfg, 'bcc'));
                $from    = data_get($cfg, 'from');
                $reply   = data_get($cfg, 'reply_to');
                $subject = data_get($cfg, 'subject', 'Novo lead');
                $mailer  = data_get($cfg, 'mailer');

                if (empty($to)) {
                    return;
                }

                $mailable = (new LeadSubmitted($lead))->subject($subject);
                if ($from)  $mailable->from($from);
                if ($reply) $mailable->replyTo($reply);

                $sender = $mailer ? Mail::mailer($mailer) : Mail::mailer();

                $sender = $sender->to($to);
                if (!empty($cc))  $sender->cc($cc);
                if (!empty($bcc)) $sender->bcc($bcc);

                $sender->send($mailable);
            });
        }


        return back(303)->with('success', 'Lead cadastrado e e-mail enviado.');
    }
}