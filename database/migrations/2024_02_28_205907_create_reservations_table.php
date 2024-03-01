<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
     public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            // $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->enum('type', ['VIP', 'Regular']);
            $table->integer('num_tickets');
            $table->timestamps();

            // Add constraint for num_tickets: min 1, max 5
            // $table->check('num_tickets >= 1 and num_tickets <= 5');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
