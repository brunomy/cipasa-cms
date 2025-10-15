<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;

class GerarEstadosCidades extends Command
{
    protected $signature = 'gerar:estados-cidades';
    protected $description = 'Gera JSON com todos os estados e cidades do Brasil (IBGE)';

    public function handle()
    {
        $ufs = Http::get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')->json();
        $resultado = [];

        foreach ($ufs as $uf) {
            $sigla = $uf['sigla'];
            $cidades = Http::get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/{$uf['id']}/municipios")->json();
            $resultado[$sigla] = array_map(fn ($c) => $c['nome'], $cidades);
            $this->info("✔ {$sigla} — " . count($cidades) . " cidades");
        }

        File::ensureDirectoryExists(resource_path('data'));
        File::put(
            resource_path('data/estados_cidades.json'),
            json_encode($resultado, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
        );

        $this->info("\n✅ Salvo em resources/data/estados_cidades.json");
        return self::SUCCESS;
    }
}
