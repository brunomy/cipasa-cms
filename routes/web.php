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

Route::get('/tenho-uma-area', [TenhoUmaAreaController::class, 'index'])->name('tenho-uma-area');
Route::post('/tenho-uma-area/send', [TenhoUmaAreaController::class, 'send'])->name('tenho-uma-area.send');
Route::get('/mapa/area/{uuid}', [TenhoUmaAreaController::class, 'show'])->name('map.area.show');

Route::fallback(function (Request $request) {
    dd('0');
    if ($request->is('cp/*')) {
        abort(404);
    }

    $site = Site::current()->handle();
    $contato = Entry::findByUri('/contato', $site);

    if (! $contato) {
        $contato = Entry::query()
            ->whereCollection('pages')
            ->where('site', $site)
            ->where('blueprint', 'contato')
            ->first();
    }

    return Inertia::render('NotFound/NotFound', [
        'contato' => $contato?->toAugmentedArray(),
    ])->toResponse($request)->setStatusCode(404);
});

// Route::get('/ri', fn() => Inertia::render('RI/RI'))->name('ri');