<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'appName' => config('app.name', 'Cipasa'),

            'contato' => function () {
                return cache()->remember(
                    'contato_site_'.Site::current()->handle(),
                    300, // 5 minutos
                    function () {
                        $site = Site::current()->handle();

                        $entry = Entry::findByUri('/contato', $site);

                        if (! $entry) {
                            $entry = Entry::query()
                                ->whereCollection('pages')
                                ->where('site', $site)
                                ->where('blueprint', 'contato')
                                ->first();
                        }

                        return $entry?->toAugmentedArray();
                    }
                );
            },
        ]);
    }
}
