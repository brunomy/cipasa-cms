<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public array $contact;

    public function __construct(array $contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('Contato site Cipasa')
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->markdown('mail.contact-submitted', [
                'contact' => $this->contact,
            ]);
    }
}