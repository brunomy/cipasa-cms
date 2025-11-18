<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Carbon\Carbon;

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
        
        $today = Carbon::today();

        $banners = Entry::query()
            ->whereCollection('banners')
            ->orderBy('order', 'asc')
            ->get()
            ->filter(function ($entry) use ($today) {
                $entrada = $entry->value('entrada');
                $saida = $entry->value('saida');

                $entradaDate = $entrada ? Carbon::parse($entrada)->startOfDay() : null;
                $saidaDate = $saida ? Carbon::parse($saida)->endOfDay() : null;

                if ($entradaDate && $entradaDate->gt($today)) {
                    return false;
                }

                if ($saidaDate && $saidaDate->lt($today)) {
                    return false;
                }

                return true;
            })
            ->values()
            ->map(function ($entry) {
                return $entry->toAugmentedArray();
            })
            ->all();
  
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
            'dados' => $home,
            'banners' => $banners,
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
