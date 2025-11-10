@component('mail::message')
# Novo contato do site

**Nome:** {{ ($contact['first_name'] ?? '') . ' ' . ($contact['last_name'] ?? '') }}  

**E-mail:** {{ $contact['email'] ?? '' }}  
**Celular:** {{ $contact['mobile'] ?? '' }}  
**Telefone:** {{ $contact['phone'] ?? '' }}  

**CEP:** {{ $contact['cep'] ?? '' }}  
**Cidade/UF:** {{ ($contact['city'] ?? '') }} / {{ ($contact['state'] ?? '') }}  

**Assunto:** {{ $contact['subject'] ?? '' }}  
**Mensagem:**
> {{ $contact['message'] ?? '' }}

---

IP: {{ $contact['consent_ip'] ?? request()->ip() }}  
User-Agent: {{ $contact['user_agent'] ?? '' }}

@endcomponent