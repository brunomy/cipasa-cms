<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('entries', function (Blueprint $table) {
            $table->id();
            $table->string('origin_id')->nullable();
            $table->string('collection');
            $table->string('slug');
            $table->string('uri')->nullable();
            $table->string('locale')->default('default');
            $table->string('site')->default('default');
            $table->json('data')->nullable();
            $table->timestamp('date')->nullable();
            $table->boolean('published')->default(true);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('entries');
    }
};
