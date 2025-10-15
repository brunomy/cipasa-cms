<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    {
        // Registra seu JS do painel (Control Panel)
        Statamic::vite('statamic-cp', ['resources/js/cp.js']);
    }
}
