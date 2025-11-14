@component('mail::message')
# Novo E-mail cadastrado na Newsletter do site Cipasa

**E-mail:** {{ $contact['email'] ?? '' }}  

---

IP: {{ $contact['consent_ip'] ?? request()->ip() }}  
User-Agent: {{ $contact['user_agent'] ?? '' }}

@endcomponent