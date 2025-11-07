<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;

class SobreController extends Controller
{
    public function index()
    {
        $siteHandle = Site::current()->handle();

        $entry = Entry::findByUri('/', $siteHandle);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('pages')
                ->where('slug', 'sobre')
                ->first();
        }

        $sobre = $entry ? $entry->toAugmentedArray() : null;

        return Inertia::render('AboutUs/AboutUs', [
            'sobre' => $sobre,
        ]);
    }
}