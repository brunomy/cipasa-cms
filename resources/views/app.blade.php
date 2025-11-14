<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if (config('services.ga4.measurement_id'))
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.ga4.measurement_id') }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{ config('services.ga4.measurement_id') }}');
    </script>
    @endif

    @routes
    @viteReactRefresh
    @vite('resources/js/main.jsx')
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
