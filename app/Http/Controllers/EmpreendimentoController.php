<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Collection;
use Statamic\Facades\Site;

class EmpreendimentoController extends Controller
{
    public function index(Request $request)
    {
        $order  = $request->query('order', 'recentes');
        $state  = $request->query('state');
        $status = $request->query('status');
        $type   = $request->query('type');

        $query = Entry::query()->whereCollection('empreendimentos');

        if ($state !== null && $state !== '') {
            $query->where('estado', $state);
        }
        if ($status !== null && $status !== '') {
            $query->where('estagio_da_obra', (int) $status);
        }
        if ($type !== null && $type !== '') {
            $query->where('tipo', (int) $type);
        }

        switch ($order) {
            case 'nome-az':     $query->orderBy('title', 'desc'); break;
            case 'nome-za':     $query->orderBy('title', 'asc'); break;
            case 'menor-area':  $query->orderBy('area_de_lotes', 'desc'); break;
            case 'maior-area':  $query->orderBy('area_de_lotes', 'asc'); break;
            case 'recentes':
            default:
                $query->orderBy('id', 'desc');
        }

        $ventures = $query->get()->map(fn($e) => $e->toAugmentedArray())->all();

        $construtoras = Entry::query()
            ->whereCollection('construtoras')
            ->orderBy('id', 'asc')
            ->get()
            ->map(fn($e) => $e->toAugmentedArray())
            ->all();

        $states = collect($ventures)
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

        return Inertia::render('Ventures/Ventures', [
            'ventures'       => $ventures,
            'construtoras'   => $construtoras,
            'states'         => $states,
            'currentFilters' => [
                'order'  => $order,
                'state'  => ($state  !== null && $state  !== '') ? $state        : null,
                'status' => ($status !== null && $status !== '') ? (int) $status : null,
                'type'   => ($type   !== null && $type   !== '') ? (int) $type   : null,
            ],
        ]);
    }

    public function show(string $slug, Request $request)
    {
        $site = Site::current()->handle();

        $entry = Entry::findByUri("/empreendimentos/{$slug}", $site);

        if (! $entry) {
            $entry = Entry::query()
                ->whereCollection('empreendimentos')
                ->where('slug', $slug)
                ->first();
        }

        if (! $entry) {
            abort(404);
        }

        $venture = $entry->toAugmentedArray();

        $related = Entry::query()
            ->whereCollection('empreendimentos')
            ->where('id', '!=', $entry->id())
            ->when(!empty($venture['estado']['value'] ?? $venture['estado'] ?? null), function ($q) use ($venture) {
                $estado = is_array($venture['estado'])
                    ? ($venture['estado']['value'] ?? $venture['estado']['key'] ?? null)
                    : $venture['estado'];
                if ($estado !== null && $estado !== '') {
                    $q->where('estado', $estado);
                }
            })
            ->orderBy('id', 'desc')
            ->limit(6)
            ->get()
            ->map(fn ($e) => $e->toAugmentedArray())
            ->all();

        $categoriesDif = Entry::query()
            ->whereCollection('categoria_diferencial')
            ->get()
            ->mapWithKeys(function ($e) {
                $id = $e->id();
                $title = $e->get('title');
                return [$id => $title];
            })
            ->all();

        return Inertia::render('Venture/Venture', [
            'venture' => $venture,
            'related' => $related,
            'categoriesDif'    => $categoriesDif,
        ]);
    }
}