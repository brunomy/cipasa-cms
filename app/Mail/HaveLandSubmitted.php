<?php

namespace App\Mail;

use App\Models\HaveLandSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class HaveLandSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public HaveLandSubmission $record,
        public array $payload,
        public string $mapLink
    ) {}

    public function build()
    {
        return $this->markdown('mail.have-land-submitted')
            ->subject($this->subject ?? 'Nova proposta de área')
            ->from(config('mail.from.address'), config('mail.from.name'));
    }
}
