<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;

class SobreController extends Controller
{
    public function index()
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri('/sobre', $site);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'sobre')
                ->first();
        }

        $contato = Entry::findByUri('/contato', $site);
        if (!$contato) {
            $contato = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('AboutUs/AboutUs', [
            'dados' => $entry?->toAugmentedArray(),
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }
}