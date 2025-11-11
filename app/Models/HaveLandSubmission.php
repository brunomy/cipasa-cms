<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class HaveLandSubmission extends Model
{
    protected $fillable = [
        'uuid',
        'name',
        'mobile',
        'email',
        'cep',
        'coordinates',
        'area_hectares',
        'meta',
    ];

    protected $casts = [
        'coordinates' => 'array',
        'meta'        => 'array',
    ];

    protected static function booted() {
        static::creating(function ($m) {
            if (empty($m->uuid)) {
                $m->uuid = (string) Str::uuid();
            }
        });
    }
}
