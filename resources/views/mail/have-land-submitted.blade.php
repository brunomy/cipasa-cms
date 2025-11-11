@component('mail::message')
# Nova proposta de terreno

**Nome:** {{ $record->name ?? '' }}  
**E-mail:** {{ $record->email ?? '' }}  
**Celular:** {{ $record->mobile ?? '' }}  
**CEP:** {{ $record->cep ?? '' }}  
**Área (ha):** {{ $record->area_hectares ?? '-' }}

**Observações:**
> {{ data_get($record->meta, 'observacoes') ?? '-' }}

---

@component('mail::button', ['url' => $mapLink])
Ver área no mapa
@endcomponent

*IP:* {{ data_get($record->meta, 'consent_ip') }}  
*User-Agent:* {{ data_get($record->meta, 'user_agent') }}
@endcomponent
