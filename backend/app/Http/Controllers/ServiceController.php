<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return response()->json(Service::where('is_active', true)->get());
    }

    public function show($id)
    {
        $service = Service::where('is_active', true)->findOrFail($id);
        return response()->json($service);
    }
}
