<?php

namespace App\Fieldtypes;

use Statamic\Fields\Fieldtype;

class Mapa extends Fieldtype
{
    protected static $handle = 'mapa';
    protected $selectable = true;

    public function augment($value)
    {
        return $value;
    }

    public function preload()
    {
        return [
            'default_lat' => $this->config('default_lat') ?? -15.7801, // Brasília
            'default_lng' => $this->config('default_lng') ?? -47.9292,
            'default_zoom' => $this->config('default_zoom') ?? 4,
        ];
    }
}
