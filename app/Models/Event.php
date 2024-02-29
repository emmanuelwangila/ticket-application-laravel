<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'address',
        'image',
        'start_date',
        'end_date',
        // 'ticket_id',
        'num_tickets',
        'type',
        'ticket_price_VIP',
        'ticket_price_Regular',
        // 'location_id',
        'user_id',

    ];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }

     public function locations() :BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function tickets():HasMany
    {
        return $this->hasMany(Ticket::class);
    }

       public function tags():HasMany
    {
        return $this->hasMany(Tag::class);
    }
}
