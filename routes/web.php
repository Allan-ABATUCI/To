<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('home');

Route::redirect('/','/dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn()=>Inertia::render(component: 'dashboard'))->name('dashboard');
    Route::resource('project',ProjectController::class);
    Route::resource('task', TaskController::class);
    Route::resource('user', UserController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
