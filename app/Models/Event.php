<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'address',
        'image',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'num_tickets',
        'ticket_price_VIP',
        'ticket_price_Regular',
        'location_id',
        'user_id',

    ];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }

     public function location() :BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function event():BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
