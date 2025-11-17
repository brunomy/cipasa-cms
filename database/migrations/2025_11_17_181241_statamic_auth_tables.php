<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class StatamicAuthTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->uuid('id')->change();

            if (!Schema::hasColumn('users', 'super')) {
                $table->boolean('super')->default(false);
            }

            if (!Schema::hasColumn('users', 'avatar')) {
                $table->string('avatar')->nullable();
            }

            if (!Schema::hasColumn('users', 'preferences')) {
                $table->json('preferences')->nullable();
            }

            if (!Schema::hasColumn('users', 'last_login')) {
                $table->timestamp('last_login')->nullable();
            }
        });

        if (!Schema::hasTable('role_user')) {
            Schema::create('role_user', function (Blueprint $table) {
                $table->uuid('role_id');
                $table->uuid('user_id');

                $table->primary(['role_id', 'user_id']);

                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
            });
        }
        if (!Schema::hasTable('group_user')) {
            Schema::create('group_user', function (Blueprint $table) {
                $table->uuid('group_id');
                $table->uuid('user_id');

                $table->primary(['group_id', 'user_id']);

                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
            });
        }

        if (!Schema::hasTable('password_activation_tokens')) {
            Schema::create('password_activation_tokens', function (Blueprint $table) {
                $table->string('email')->index();
                $table->string('token');
                $table->timestamp('created_at')->nullable();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
     public function down()
     {
         Schema::table('users', function (Blueprint $table) {
             $table->dropColumn(['super', 'avatar', 'preferences', 'last_login']);
             $table->string('password')->nullable(false)->change();
         });

         Schema::dropIfExists('role_user');
         Schema::dropIfExists('group_user');

         Schema::dropIfExists('password_activation_tokens');
     }
}
