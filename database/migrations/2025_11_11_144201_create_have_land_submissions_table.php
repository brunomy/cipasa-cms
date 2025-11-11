<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('have_land_submissions', function (Blueprint $t) {
            $t->id();
            $t->uuid('uuid')->unique();
            $t->string('name')->nullable();
            $t->string('mobile')->nullable();
            $t->string('email')->nullable();
            $t->string('cep')->nullable();
            $t->json('coordinates');
            $t->decimal('area_hectares', 10, 2)->nullable();
            $t->json('meta')->nullable();
            $t->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('have_land_submissions');
    }
};