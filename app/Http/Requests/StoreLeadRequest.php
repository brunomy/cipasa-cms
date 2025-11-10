<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'venture_id'   => ['nullable'],
            'venture_slug' => ['nullable','string'],
            'venture_name' => ['nullable','string'],
            'name'         => ['required','string','min:2'],
            'phone'        => ['required','regex:/^\d{10,11}$/'],
            'email'        => ['required','email'],
            'cep'          => ['nullable','regex:/^\d{8}$/'],
            'accepted'     => ['required','boolean','in:1,true'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'phone' => preg_replace('/\D/', '', (string) $this->phone),
            'cep'   => preg_replace('/\D/', '', (string) $this->cep),
        ]);
    }

    public function messages(): array
    {
        return ['accepted.in' => 'É necessário aceitar a Política e os Termos.'];
    }
}
