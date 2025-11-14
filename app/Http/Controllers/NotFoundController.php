<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Symfony\Component\HttpFoundation\Response;

class NotFoundController extends Controller
{
    public function __invoke(Request $request)
    {
      dd('oi');
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
      ])->toResponse($request)->setStatusCode(Response::HTTP_NOT_FOUND);
    }
}
