<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Desabilita FKs para permitir limpar as tabelas
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        // Limpa tabelas sem apagar estrutura
        DB::table('role_user')->truncate();
        DB::table('group_user')->truncate();
        DB::table('users')->truncate();

        // Reativa FKs
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // O rollback apenas limpa novamente
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        DB::table('role_user')->truncate();
        DB::table('group_user')->truncate();
        DB::table('users')->truncate();

        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
};
