<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

// Request Helpers
use Illuminate\Http\Request;


//Model
use App\Models\User;

// Auth
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    //

    public function signup(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return 'Success';





    }

    public function login(Request $request){
        $creds = $request->only('email', 'password');

        if(Auth::attempt($creds)){
            return Auth::user();
        };

        return "Failed Logged In";
        // return $creds;
    }

    public function logout(Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

    public function try(){
        return response()->json(['mensaje' => 'POST access successful']);
    }
}
