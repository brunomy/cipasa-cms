<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class InertiaNotFound
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (
            $response->getStatusCode() === 404 &&
            ! $request->expectsJson() &&
            ! $request->is('cp/*')
        ) {
            $site = Site::current()->handle();

            $contato = Entry::findByUri('/contato', $site);

            if (! $contato) {
                $contato = Entry::query()
                    ->whereCollection('pages')
                    ->where('site', $site)
                    ->where('blueprint', 'contato')
                    ->first();
            }

            return Inertia::render('NotFound/NotFound', [
                'contato' => $contato?->toAugmentedArray(),
            ])->toResponse($request)->setStatusCode(SymfonyResponse::HTTP_NOT_FOUND);
        }

        return $response;
    }
}
