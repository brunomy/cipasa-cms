{{-- resources/views/mail/lead-submitted.blade.php --}}
@component('mail::message')
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family: 'Helvetica Neue', Arial, sans-serif; color:#1d1d1f;">
  <tr>
    <td style="padding: 0 0 16px 0;">
      <div style="font-size: 18px; font-weight: 600;">Novo lead</div>
      <div style="font-size: 14px; color: #6b6b70;">Chegou um lead de empreendimento.</div>
    </td>
  </tr>
  <tr>
    <td style="background: #f8f8fb; border-radius: 10px; padding: 16px; border: 1px solid #ececf5;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size: 14px; line-height: 1.6;">
        <tr>
          <td width="140px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Empreendimento</td>
          <td style="padding: 0 0 5px;">{{ $lead->venture_name ?? '—' }}</td>
        </tr>
        <tr>
          <td width="140px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Nome</td>
          <td style="padding: 0 0 5px;">{{ $lead->name ?? '—' }}</td>
        </tr>
        <tr>
          <td width="140px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">Telefone</td>
          <td style="padding: 0 0 5px;">{{ $lead->phone ?? '—' }}</td>
        </tr>
        <tr>
          <td width="140px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">E-mail</td>
          <td style="padding: 0 0 5px;">{{ $lead->email ?? '—' }}</td>
        </tr>
        <tr>
          <td width="140px" style="font-weight: 600; padding: 0 0 5px; color:#3a3a40;">CEP</td>
          <td style="padding: 0 0 5px;">{{ $lead->cep ?? '—' }}</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 14px; font-size: 12px; color: #7a7a84;">
      <div>IP: {{ $lead->consent_ip ?? request()->ip() }}</div>
      <div>Data: {{ optional($lead->created_at)->format('d/m/Y H:i') }}</div>
    </td>
  </tr>
</table>
@endcomponent
