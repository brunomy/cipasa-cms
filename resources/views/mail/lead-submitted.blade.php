{{-- resources/views/mail/lead-submitted.blade.php --}}
@component('mail::message')
# Novo lead

**Empreendimento:** {{ $lead->venture_name ?? '-' }}  

**Nome:** {{ $lead->name }}  
**Telefone:** {{ $lead->phone }}  
**E-mail:** {{ $lead->email }}  
**CEP:** {{ $lead->cep ?? '-' }}

_IP:_ {{ $lead->consent_ip }}  
_Data:_ {{ optional($lead->created_at)->format('d/m/Y H:i') }}

@endcomponent