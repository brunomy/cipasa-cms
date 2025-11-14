<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHaveLandRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'nome'           => ['required','string','max:190'],
            'celular'        => ['required','string','max:30'],
            'email'          => ['required','email','max:190'],
            'cep'            => ['nullable','string','max:12'],
            'coordenadas'    => ['required','string'],
            'tamanho_area'   => ['nullable','numeric'],
            'informacoes'    => ['nullable','string','max:5000'],
            'documentos'   => ['nullable', 'array'],
            'documentos.*' => ['file', 'max:10240'],
        ];
    }
}
