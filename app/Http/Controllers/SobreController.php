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

        $appUrl = rtrim(config('app.url'), '/sobre');
        $canonical = $entry
            ? $entry->absoluteUrl()
            : $appUrl;

        return Inertia::render('AboutUs/AboutUs', [
            'dados' => $entry?->toAugmentedArray(),
            'seo' => [
                'slug'            => $entry->get('slug'),
                'meta_title'      => $entry->get('meta_title'),
                'breve_descricao' => $entry->get('breve_descricao'),
                'keywords'        => $entry->get('keywords'),
                'og_image'        => $entry->augmentedValue('og_image')->value(),
                'meta_robots'     => $entry->get('meta_robots'),
                'scripts'         => $entry->get('scripts'),
                'canonical'       => $canonical,
                'url'             => $canonical,
            ],
        ]);
    }
}