@component('mail::message')
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Helvetica Neue', Arial, sans-serif; color:#1d1d1f;">
  <tr>
    <td style="padding: 0 0 16px 0;">
      <div style="font-size: 18px; font-weight: 600;">Novo cadastro na Newsletter</div>
      <div style="font-size: 14px; color: #6b6b70;">Chegou um novo e-mail para receber novidades.</div>
    </td>
  </tr>
  <tr>
    <td style="background: #f8f8fb; border-radius: 10px; padding: 16px; border: 1px solid #ececf5;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size: 14px; line-height: 1.6;">
        <tr>
          <td width="120px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">E-mail</td>
          <td style="padding: 0 0 5px;">{{ $contact['email'] ?? '—' }}</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 14px; font-size: 12px; color: #7a7a84;">
      <div>IP: {{ $contact['consent_ip'] ?? request()->ip() }}</div>
      <div>User-Agent: {{ $contact['user_agent'] ?? '—' }}</div>
      <div style="margin-top: 8px;">Enviado em: {{ now()->format('d/m/Y H:i') }}</div>
    </td>
  </tr>
</table>
@endcomponent
