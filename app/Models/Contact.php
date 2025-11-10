<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'mobile',
        'phone',
        'cep',
        'state',
        'city',
        'subject',
        'message',
    ];

    // opcional, ajuda bastante:
    protected $casts = [
        'consent_at' => 'datetime',
    ];
}
