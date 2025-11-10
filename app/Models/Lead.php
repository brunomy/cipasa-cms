<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'venture_id',
        'venture_slug',
        'venture_name',
        'name',
        'phone',
        'email',
        'cep',
        'consent_at',
        'consent_ip',
        'user_agent',
    ];

    // opcional, ajuda bastante:
    protected $casts = [
        'consent_at' => 'datetime',
    ];
}
