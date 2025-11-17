<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class User extends Authenticatable
{
    use Notifiable, HasUuids;

    protected $fillable = [
        'name',
        'email',
        'password',
        'super',
    ];

    protected function casts(): array
    {
        return [
            'preferences' => 'json',
            'last_login'  => 'datetime',
        ];
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new \Statamic\Notifications\PasswordReset($token));
    }
}
