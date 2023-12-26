<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;

Route::controller(ChatController::class)->group(function(){
    Route::get('chat','index');
});
