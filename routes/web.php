<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EmpreendimentoController;

Route::get('/', [EmpreendimentoController::class, 'index'])->name('home');
Route::get('/sobre', fn() => Inertia::render('AboutUs/AboutUs'))->name('about');
Route::get('/empreendimentos', fn() => Inertia::render('Ventures/Ventures'))->name('ventures');
Route::get('/empreendimento/{slug}', [EmpreendimentoController::class, 'show'])->name('venture');
Route::get('/tenho-uma-area', fn() => Inertia::render('HaveLand/HaveLand'))->name('have-land');
Route::get('/ri', fn() => Inertia::render('RI/RI'))->name('ri');
Route::get('/contato', fn() => Inertia::render('Contact/Contact'))->name('contact');

