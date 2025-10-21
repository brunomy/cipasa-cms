<?php

return [

    'enabled' => env('STATAMIC_API_ENABLED', true), // ✅ muda para true

    'resources' => [
        'collections' => true, // ✅ habilita coleções
        'navs' => false,
        'taxonomies' => false,
        'assets' => false,
        'globals' => false,
        'forms' => false,
        'users' => false,
    ],

    'route' => env('STATAMIC_API_ROUTE', 'api'), // ✅ mantém "api"

    'middleware' => env('STATAMIC_API_MIDDLEWARE', 'api'),

    'pagination_size' => 50,

    'cache' => [
        'expiry' => 60,
    ],

    'excluded_keys' => [
        //
    ],

];
