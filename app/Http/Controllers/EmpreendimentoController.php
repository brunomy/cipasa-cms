<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Statamic\Facades\Collection;

class EmpreendimentoController extends Controller
{
    public function index()
    {
        $collection = Collection::findByHandle('empreendimentos');
        $entries = $collection->queryEntries()->get();

        $empreendimentos = $entries->map(function ($entry) {
            $banner = $entry->get('banner');
            $ogImage = $entry->get('og_image');

            return [
                'id' => $entry->id(),
                'title' => $entry->get('title'),
                'slug' => $entry->slug(),
                'cidade' => $entry->get('cidade'),
                'subtitulo' => $entry->get('subtitulo'),
                'descricao' => $entry->get('descricao'),
                'banner' => is_object($banner)
                    ? $banner->url()
                    : (is_string($banner) ? '/storage/' . ltrim($banner, '/') : null),
                'og_image' => is_object($ogImage)
                    ? $ogImage->url()
                    : (is_string($ogImage) ? '/storage/' . ltrim($ogImage, '/') : null),
                'galerias' => collect($entry->get('galeria') ?? [])->map(function ($galeria) {
                    return [
                        'nome' => $galeria['nome_da_galeria'] ?? null,
                        'imagens' => collect($galeria['imagens'] ?? [])->map(function ($img) {
                            return is_object($img)
                                ? $img->url()
                                : (is_string($img) ? '/storage/' . ltrim($img, '/') : null);
                        }),
                    ];
                }),
                'url' => $entry->url(),
            ];
        });

        return Inertia::render('Home/Home', [
            'empreendimentos' => $empreendimentos,
        ]);
    }
}
