<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void {
    Schema::create('leads', function (Blueprint $table) {
      $table->id();
      $table->string('venture_id')->nullable();
      $table->string('venture_slug')->nullable();
      $table->string('venture_name')->nullable();
      $table->string('name');
      $table->string('phone', 20);
      $table->string('email');
      $table->string('cep', 10)->nullable();
      $table->timestamp('consent_at')->nullable();
      $table->string('consent_ip', 45)->nullable();
      $table->string('user_agent')->nullable();
      $table->timestamps();
    });
  }
  public function down(): void { Schema::dropIfExists('leads'); }
};
