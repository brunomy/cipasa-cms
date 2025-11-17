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
        // role_user: user_id vira UUID (char(36)) e role_id vira string
        DB::statement("
            ALTER TABLE role_user
                MODIFY user_id CHAR(36) NOT NULL,
                MODIFY role_id VARCHAR(255) NOT NULL
        ");

        // group_user: user_id vira UUID (char(36)) e group_id vira string
        DB::statement("
            ALTER TABLE group_user
                MODIFY user_id CHAR(36) NOT NULL,
                MODIFY group_id VARCHAR(255) NOT NULL
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Aqui eu estou presumindo o tipo antigo: user_id como BIGINT UNSIGNED
        // e role_id/group_id como CHAR(36) (ajusta se no seu banco for diferente).

        DB::statement("
            ALTER TABLE role_user
                MODIFY user_id BIGINT UNSIGNED NOT NULL,
                MODIFY role_id CHAR(36) NOT NULL
        ");

        DB::statement("
            ALTER TABLE group_user
                MODIFY user_id BIGINT UNSIGNED NOT NULL,
                MODIFY group_id CHAR(36) NOT NULL
        ");
    }
};
