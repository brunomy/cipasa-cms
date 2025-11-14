<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Statamic\Facades\Form as StatamicForm;
use Statamic\Eloquent\Forms\FormModel;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Arr;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\StoreNewsletterRequest;
use App\Mail\ContactSubmitted;
use App\Mail\NewsletterSubmitted;

class ContatoController extends Controller
{
    public function index()
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri('/contato', $site);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('Contact/Contact');
    }

    public function send(StoreContactRequest $request)
    {
        $data = [
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'mobile'     => $request->mobile,
            'phone'      => $request->phone,
            'cep'        => $request->cep,
            'state'      => $request->state,
            'city'       => $request->city,
            'subject'    => $request->subject,
            'message'    => $request->message,
            'consent_ip' => $request->ip(),
            'user_agent' => (string)$request->header('User-Agent'),
            'consent_at' => now(),
        ];

        if ($form = StatamicForm::find('contato')) {
            $form->makeSubmission()->data($data)->save();

            $emails = collect();
            if ($record = FormModel::where('handle', $form->handle())->first()) {
                $settings = $record->getAttribute('settings');
                if (is_string($settings)) $settings = json_decode($settings, true) ?? [];
                $emails = collect(data_get($settings, 'email', []));
            }

            if ($emails->isEmpty() && method_exists($form, 'toArray')) {
                $emails = collect(data_get($form->toArray(), 'email', []));
            }

            $emails->each(function ($cfg) use ($data) {
                $split = fn ($v) => collect(Arr::wrap($v))
                    ->flatMap(fn($s)=> is_string($s) ? preg_split('/\s*[,;]\s*/',$s,-1,PREG_SPLIT_NO_EMPTY) : [$s])
                    ->filter()->values()->all();

                $to      = $split(data_get($cfg, 'to'));
                $cc      = $split(data_get($cfg, 'cc'));
                $bcc     = $split(data_get($cfg, 'bcc'));
                $from    = data_get($cfg, 'from');
                $reply   = data_get($cfg, 'reply_to');
                $subject = data_get($cfg, 'subject', 'Novo contato do site');
                $mailer  = data_get($cfg, 'mailer');

                if (empty($to)) return;

                $mailable = (new ContactSubmitted($data))->subject($subject);
                if ($from)  $mailable->from($from);
                if ($reply) $mailable->replyTo($reply);

                $sender = $mailer ? Mail::mailer($mailer) : Mail::mailer();
                $sender = $sender->to($to);
                if ($cc)  $sender->cc($cc);
                if ($bcc) $sender->bcc($bcc);
                $sender->send($mailable);
            });
        }

        return back(303)->with('success', 'Contato enviado com sucesso!');
    }

    public function newsletter(StoreNewsletterRequest $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
        ]);

        $data = [
            'email'      => $validated['email'],
            'consent_ip' => $request->ip(),
            'user_agent' => (string) $request->header('User-Agent'),
            'consent_at' => now(),
        ];

        if ($form = StatamicForm::find('newsletter')) {
            $form->makeSubmission()->data($data)->save();

            $emails = collect();

            if ($record = FormModel::where('handle', $form->handle())->first()) {
                $settings = $record->getAttribute('settings');
                if (is_string($settings)) {
                    $settings = json_decode($settings, true) ?? [];
                }
                $emails = collect(data_get($settings, 'email', []));
            }

            if ($emails->isEmpty() && method_exists($form, 'toArray')) {
                $emails = collect(data_get($form->toArray(), 'email', []));
            }

            $emails->each(function ($cfg) use ($data) {
                $split = fn ($v) => collect(Arr::wrap($v))
                    ->flatMap(fn ($s) => is_string($s)
                        ? preg_split('/\s*[,;]\s*/', $s, -1, PREG_SPLIT_NO_EMPTY)
                        : [$s])
                    ->filter()->values()->all();

                $to      = $split(data_get($cfg, 'to'));
                $cc      = $split(data_get($cfg, 'cc'));
                $bcc     = $split(data_get($cfg, 'bcc'));
                $from    = data_get($cfg, 'from');
                $reply   = data_get($cfg, 'reply_to');
                $subject = data_get($cfg, 'subject', 'Nova inscrição na newsletter');
                $mailer  = data_get($cfg, 'mailer');

                if (empty($to)) {
                    return;
                }

                $mailable = new NewsletterSubmitted($data);

                if ($from)  $mailable->from($from);
                if ($reply) $mailable->replyTo($reply);

                $sender = $mailer ? Mail::mailer($mailer) : Mail::mailer();
                $sender = $sender->to($to);
                if ($cc)  $sender->cc($cc);
                if ($bcc) $sender->bcc($bcc);
                $sender->send($mailable);
            });
        }

        return back(303)->with('success', 'Obrigado por se inscrever em nossa newsletter!');
    }
}