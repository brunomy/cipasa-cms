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
        if ($request->is('cp/*')) {
            abort(404);
        }

        return Inertia::render('NotFound/NotFound')->toResponse($request)->setStatusCode(Response::HTTP_NOT_FOUND);
    }
}
