<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EmpreendimentoController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SobreController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\TenhoUmaAreaController;
use App\Http\Controllers\NotFoundController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/empreendimentos', [EmpreendimentoController::class, 'index'])->name('empreendimentos.index');
Route::get('/empreendimentos/{slug}', [EmpreendimentoController::class, 'show'])->name('empreendimentos.show');
Route::post('empreendimentos/leads', [EmpreendimentoController::class, 'store'])->name('empreendimentos.leads.store');

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');

Route::get('/sobre', [SobreController::class, 'index'])->name('sobre');

Route::get('/contato', [ContatoController::class, 'index'])->name('contato');
Route::post('/contato/enviar', [ContatoController::class, 'send'])->name('contato.leads.enviar');
Route::post('/contato/newsletter', [ContatoController::class, 'newsletter'])->name('contato.newsletter');

Route::get('/tenho-uma-area', [TenhoUmaAreaController::class, 'index'])->name('tenho-uma-area');
Route::post('/tenho-uma-area/send', [TenhoUmaAreaController::class, 'send'])->name('tenho-uma-area.send');
Route::get('/mapa/area/{uuid}', [TenhoUmaAreaController::class, 'show'])->name('map.area.show');

Route::fallback(function (Request $request) {
    if ($request->is('cp/*')) {
        abort(404);
    }

    return app(NotFoundController::class)($request);
});