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

        $states = Entry::query()->whereCollection('empreendimentos')
            ->pluck('estado')
            ->filter()
            ->map(function ($s) {
                if (is_array($s)) {
                    $value = $s['value'] ?? ($s['key'] ?? null);
                    $label = $s['label'] ?? $value;
                } else {
                    $value = (string) $s;
                    $label = (string) $s;
                }
                if ($value === null || $value === '') return null;
                return ['label' => $label, 'value' => $value];
            })
            ->filter()
            ->unique('value')
            ->sortBy('label', SORT_NATURAL | SORT_FLAG_CASE)
            ->values()
            ->all();

        $blog = Entry::query()
            ->whereCollection('blog')
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get()
            ->map(function ($e) {
                $aug = $e->toAugmentedArray();
                if (method_exists($e, 'model') && $e->model()) {
                    $aug['created_at'] = optional($e->model()->created_at)->toIso8601String();
                } else {
                    $aug['created_at'] = optional($e->lastModified() ?? $e->date())->toIso8601String();
                }

                return $aug;
            })
            ->values()
            ->all();
            
        $appUrl = rtrim(config('app.url'), '/');
        $canonical = $entry
            ? $entry->absoluteUrl()
            : $appUrl;

        return Inertia::render('Home/Home', [
            'banners' => $banners,
            'info' => $info,
            'list_1' => $list_1,
            'list_2' => $list_2,
            'states' => $states,
            'construtoras' => $construtoras,
            'blog' => $blog,
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