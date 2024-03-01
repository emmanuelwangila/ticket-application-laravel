<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Users;
use App\Http\Controllers\EventController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/users', [Users::class, 'index'])->name('users');

Route::get('/events', [EventController::class, 'index'])->name('events');

Route::post('/save', [EventController::class, 'store'])->name('save');

Route::get('/edit/{id}', [EventController::class, 'edit'])->name('edit');
Route::post('/update/{id}',[EventController::class, 'update'])->name('update');

Route::get('/delete/{id}', [EventController::class, 'destroy'])->name('destroy');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/events', function(){
//     return Inertia::render('Events');
// })->middleware(['auth', 'verified'])->name('events');

Route::get('/createevents', function(){
    return Inertia::render('CreateEvents');
})->middleware(['auth', 'verified'])->name('createevents');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //  Route::resource('/events', EventController::class)->except('index');
    //  Route::resource('/galleries', GalleryController::class)->except('index');
     
    // Route::get('/events', [EventController::class, 'index'])->name('events.index');
    //  Route::get('/galleries', [GalleryController::class, 'index'])->name('gallery.index');
});

require __DIR__.'/auth.php';
