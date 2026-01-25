<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/send-email-verification', [VerificationController::class, 'sendEmailVerification']);
Route::post('/verify-email', [VerificationController::class, 'verifyEmail']);
Route::post('/send-phone-verification', [VerificationController::class, 'sendPhoneVerification']);
Route::post('/verify-phone', [VerificationController::class, 'verifyPhone']);

Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

Route::post('/contact', [ContactController::class, 'store']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    Route::put('/user/profile', [UserController::class, 'updateProfile']);
    Route::get('/user/orders', [UserController::class, 'orders']);
});
