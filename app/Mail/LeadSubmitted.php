<?php

namespace App\Mail;

use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LeadSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Lead $lead) {}

    public function build()
    {
        return $this->subject('Interesse em Empreendimento')
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->markdown('mail.lead-submitted');
    }
}