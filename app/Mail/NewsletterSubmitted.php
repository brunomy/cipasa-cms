<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsletterSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public array $contact;

    public function __construct(array $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('Novo E-mail cadastrado na Newsletter do site Cipasa')
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->markdown('mail.newsletter-submitted', [
                'contact' => $this->contact,
            ]);
    }
}