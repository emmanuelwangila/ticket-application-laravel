<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

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

      public function store(Request $request)
    {
        $reservation = new reservation();
      $data = array(
    
    'type' => $request->input('type', ), // Default to 'Regular' if no value is provided

    // Assuming the select input name is 'type'
    'user_id' => $request->input('user_id'),
    // 'event_id' =>$request->input('event_id'),
    'num_tickets' => $request->input('num_tickets'),
);

        
        $reservation ->create($data);
        Session::flash('Sucess', 'Reservation Created Succesfully');

        return Redirect::to('/reservations');
    }
}
