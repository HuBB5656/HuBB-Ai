<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function index(){

    //    dd($response);
     return Inertia::render('HuBB/App/Index');

    }

    public function chat(Request $request){
        $response = Http::withOptions(['verify' => false])->withToken(config('services.openai.secret'))->post('https://api.openai.com/v1/chat/completions',
       [
        "model" => "gpt-3.5-turbo",
        "messages" => [
            [
                "role" => "system",
                "content" => $request->chat
            ],
            [
                "role" => "user",
                "content" => $request->chat
            ]
        ]
       ])->json('choices.0.message');

        // return $response;
        return Inertia::render('HuBB/App/Index',['response' => $response]);
    }
}
