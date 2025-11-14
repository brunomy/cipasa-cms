<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
  public function authorize(): bool { return true; }

  public function rules(): array
  {
    return [
      'first_name' => ['required','string','max:120'],
      'last_name'  => ['nullable','string','max:120'],
      'email'      => ['required','email','max:190'],
      'mobile'     => ['required','string','max:30'],
      'phone'      => ['nullable','string','max:30'],
      'cep'        => ['nullable','string','max:12'],
      'state'      => ['nullable','string','size:2'],
      'city'       => ['nullable','string','max:120'],
      'subject'    => ['required','string','max:190'],
      'message'    => ['required','string','max:5000'],
    ];
  }
}