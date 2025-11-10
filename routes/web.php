<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EmpreendimentoController;
use App\Http\Controllers\SobreController;
use App\Http\Controllers\ContatoController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/empreendimentos', [EmpreendimentoController::class, 'index'])->name('empreendimentos.index');
Route::get('/empreendimentos/{slug}', [EmpreendimentoController::class, 'show'])->name('empreendimentos.show');
Route::post('empreendimentos/leads', [EmpreendimentoController::class, 'store'])->name('empreendimentos.leads.store');

Route::get('/sobre', [SobreController::class, 'index'])->name('sobre');

Route::get('/contato', [ContatoController::class, 'index'])->name('contato');

Route::get('/tenho-uma-area', fn() => Inertia::render('HaveLand/HaveLand'))->name('have-land');
Route::get('/ri', fn() => Inertia::render('RI/RI'))->name('ri');

