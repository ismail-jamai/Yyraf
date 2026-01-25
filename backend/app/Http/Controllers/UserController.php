<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function orders(Request $request)
    {
        // Placeholder for orders
        return response()->json([]); 
    }
    
    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'phone' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:20',
            'cin' => 'nullable|string|max:50',
            'rib' => 'nullable|string|max:50',
            'bank_type' => 'nullable|string|max:50',
        ]);

        $user->update($validated);

        return response()->json(['message' => 'Profile updated successfully', 'user' => $user]);
    }
}
