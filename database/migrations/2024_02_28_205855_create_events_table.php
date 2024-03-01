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
             $table->date('start_date');
            $table->date('end_date');
             $table->string('address');
             $table->string('type',['VIP ', 'Regular']);
            $table->integer('ticket_price_VIP');
            $table->integer('ticket_price_Regular');

              $table->integer('num_tickets');
              $table->string('image');
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
