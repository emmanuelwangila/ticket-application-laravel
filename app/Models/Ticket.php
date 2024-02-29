<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'type',
        'num_tickets',
        'ticket_price',
    ];


    public function events ():HasMany
    {
        return $this->hasMany(Event::class);
    }




}
