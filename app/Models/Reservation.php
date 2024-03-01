<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

      protected $fillable = [
        'user_id',
        // 'event_id',
        'num_tickets',
        'type', // Fixed typo here
    ];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function event():BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
