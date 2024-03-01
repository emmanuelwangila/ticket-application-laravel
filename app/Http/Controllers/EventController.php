<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
      public function index ()
    {
         $events = Event::all();
        return Inertia::render('Events', ['events' => $events ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateEvent');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $event = new event();
      $data = array(
    'title' => $request->input('title'),
    'description' => $request->input('description'),
    'address' => $request->input('address'),
    'image' => $request->input('image'),
    'type' => $request->input('type', ), // Default to 'Regular' if no value is provided

    // Assuming the select input name is 'type'
    'user_id' => $request->input('user_id'),
    'start_date' => $request->input('start_date'),
    'end_date' => $request->input('end_date'),
    'num_tickets' => $request->input('num_tickets'),
    'ticket_price_VIP' => $request->input('ticket_price_VIP'),
    'ticket_price_Regular' => $request->input('ticket_price_Regular'),
);

        
        $event ->create($data);
        Session::flash('Sucess', 'Event Created Succesfully');

        return Redirect::to('/events');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event  = Event::find($id);
        return Inertia::render('Edit', ['event' => $event]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)


    {
        $event = Event::findOrFail($id);
    
    // Update event properties
    $event->title = $request->input('title');
    $event->type = $request->input('type');
    $event->address = $request->input('address');
    $event->description = $request->input('description');

    // Save the changes
    $event->save();

    // You may return a response indicating success
    return response()->json(['message' => 'Event updated successfully']);


        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        Session::flash('Success', 'Event has been deleted Succesfully');
    }
}
