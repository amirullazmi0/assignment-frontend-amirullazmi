<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JsonController extends Controller
{
    //
    public function index(Request $request)
    {
        return response()->json($request);
    }
}
