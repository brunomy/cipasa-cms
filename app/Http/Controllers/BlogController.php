<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Collection;
use Statamic\Facades\Site;

use Illuminate\Support\Arr;
use App\Http\Requests\StoreLeadRequest;
use App\Models\Lead;
use Statamic\Facades\Form as StatamicForm;
use Illuminate\Support\Facades\Mail;
use App\Mail\LeadSubmitted;
use Statamic\Eloquent\Forms\FormModel;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $blog = Entry::query()
            ->whereCollection('blog')
            ->orderBy('created_at', 'desc')
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

        $site = Site::current()->handle();
        $contato = Entry::findByUri('/contato', $site);

        if (!$contato) {
            $contato = Entry::query()
                ->whereCollection('pages')
                ->where('site', $site)
                ->where('blueprint', 'contato')
                ->first();
        }

        return Inertia::render('Blog/Blog', [
            'dados'       => $blog,
            'contato' => $contato?->toAugmentedArray(),
        ]);
    }
}