<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use Inertia\Inertia;

class ReservationController extends Controller
{

        public function index ()
    {
         $reservations = Reservation::all();
        return Inertia::render('Reservation', ['reservations' => $reservations ]);

    }


      public function create()
    {
        return Inertia::render('CreateReservations');
    }
}
