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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
             $table->string('title');
             $table->string('slug')->unique();
             $table->date('start_date');
            $table->date('end_date');
             $table->string('address');
             $table->time('start_time');
             $table->time('end_time');
            $table->decimal('ticket_price_VIP', 8, 2);
            $table->decimal('ticket_price_Regular', 8, 2);

              $table->integer('num_tickets');
              $table->foreignId('location_id')->constrained();
              $table->string('image');
              $table->foreignId('ticekt_id')->constrained();
              $table->foreignId('user_id')->constrained()->cascadeOnDelete();
              $table->longText('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
