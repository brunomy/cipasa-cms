<?php

use Illuminate\Support\Facades\Route;

Route::post('/cp/license', function () {
  dd('ai pai');
    return response()->json([
        'site' => [
            'valid' => true,
            'reason' => 'unknown_site'
        ],
        'statamic' => [
            'valid' => true,
            'reason' => 'unlicensed'
        ],
        'packages' => []
    ]);
});
