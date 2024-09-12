<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

// Request Helpers
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;

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
            'password' => $request->password,
        ]);

        return 'Success';





    }

    public function login(LoginRequest $request){
        $cred = $request->validated();

        if(!Auth::attempt($cred)){
            return response(['message' => 'Provided email address or password is incorrect']);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(json(['user'=>$user, 'token'=>$token]));
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
