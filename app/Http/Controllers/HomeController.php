<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;

class HomeController extends Controller
{
    public function index()
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri('/', $site);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('pages')
                ->where('slug', 'home')
                ->first();
        }

        $home = $entry ? $entry->toAugmentedArray() : null;
        $banners = $home['banner'] ?? [];
        $info = [
            'info_1' => $home['info_1'] ?? [],
            'info_2' => $home['info_2'] ?? [],
            'info_3' => $home['info_3'] ?? [],
            'text' => $home['info_text'] ?? [],
        ];
        $list_1 = $home['lista_1'] ?? [];
        $list_2 = $home['lista_2'] ?? [];

        $construtoras = Entry::query()
            ->whereCollection('construtoras')
            ->orderBy('id', 'asc')
            ->get()
            ->map(function ($entry) {
                return $entry->toAugmentedArray();
            })
            ->all();

        $contato = Entry::findByUri('/contato', $site);
        if (!$contato) {
            $contato = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('Home/Home', [
            'banners' => $banners,
            'info' => $info,
            'list_1' => $list_1,
            'list_2' => $list_2,
            'construtoras' => $construtoras,
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }
}