<?php

namespace App\Http\Middleware;

use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function share($request)
    {
        return [
            'appName' => config('app.name', 'Cipasa'),
        ];
    }
}
