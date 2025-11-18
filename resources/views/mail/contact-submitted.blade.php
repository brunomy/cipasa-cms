@component('mail::message')
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Helvetica Neue', Arial, sans-serif; color:#1d1d1f;">
  <tr>
    <td style="padding: 0 0 16px 0;">
      <div style="font-size: 18px; font-weight: 600;">Novo contato do site</div>
      <div style="font-size: 14px; color: #6b6b70;">Chegou um novo lead do formulário de contato.</div>
    </td>
  </tr>
  <tr>
    <td style="background: #f8f8fb; border-radius: 10px; padding: 16px; border: 1px solid #ececf5;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size: 14px; line-height: 1.6;">
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Nome</td>
          <td style="padding: 0 0 5px;">{{ trim(($contact['first_name'] ?? '').' '.($contact['last_name'] ?? '')) ?: '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">E-mail</td>
          <td style="padding: 0 0 5px;">{{ $contact['email'] ?? '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Celular</td>
          <td style="padding: 0 0 5px;">{{ $contact['mobile'] ?? '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Telefone</td>
          <td style="padding: 0 0 5px;">{{ $contact['phone'] ?? '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">CEP</td>
          <td style="padding: 0 0 5px;">{{ $contact['cep'] ?? '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 20px; color:#3a3a40;">Cidade / UF</td>
          <td style="padding: 0 0 20px;">{{ ($contact['city'] ?? '—') }}{{ isset($contact['state']) ? ' / '.$contact['state'] : '' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Assunto</td>
          <td style="padding: 0 0 5px;">{{ $contact['subject'] ?? '—' }}</td>
        </tr>
        <tr>
          <td width="100px" style="font-weight: 600; color:#3a3a40; vertical-align: top;">Mensagem</td>
          <td style="white-space: pre-line;">{{ $contact['message'] ?? '—' }}</td>
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
