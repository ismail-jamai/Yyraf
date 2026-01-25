<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Http\Request;
use Carbon\Carbon;

use Illuminate\Support\Facades\Mail;
use App\Mail\VerificationCodeMail;
use Twilio\Rest\Client;

class VerificationController extends Controller
{
    public function sendEmailVerification(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        
        $code = rand(100000, 999999);
        
        VerificationCode::create([
            'type' => 'email',
            'identifier' => $request->email,
            'code' => $code,
            'expires_at' => Carbon::now()->addMinutes(10),
        ]);

        try {
            Mail::to($request->email)->send(new VerificationCodeMail($code));
        } catch (\Exception $e) {
            // Log error but continue for now
            \Log::error('Mail send failed: ' . $e->getMessage());
        }

        if (config('app.debug')) {
            return response()->json(['message' => 'Code sent', 'code' => $code]);
        }

        return response()->json(['message' => 'Code sent']);
    }

    public function verifyEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required|string'
        ]);

        \Log::info('Verification attempt', ['email' => $request->email, 'code' => $request->code, 'now' => Carbon::now()]);

        $verification = VerificationCode::where('identifier', $request->email)
            ->where('type', 'email')
            ->where('code', $request->code)
            ->where('expires_at', '>', Carbon::now())
            ->first();
            
        if (!$verification) {
            \Log::info('Verification failed - code not found or expired', [
                'found_any_code' => VerificationCode::where('identifier', $request->email)->where('code', $request->code)->exists(),
                'server_time' => Carbon::now(),
            ]);
            return response()->json(['message' => 'Invalid or expired code'], 400);
        }

        if (!$verification) {
            return response()->json(['message' => 'Invalid or expired code'], 400);
        }

        // Verify user if exists
        $user = User::where('email', $request->email)->first();
        if ($user) {
            $user->email_verified_at = Carbon::now();
            $user->save();
        }

        $verification->delete();

        return response()->json(['message' => 'Email verified successfully']);
    }

    public function sendPhoneVerification(Request $request)
    {
        $request->validate(['phone' => 'required|string']);
        
        $code = rand(100000, 999999);
        
        VerificationCode::create([
            'type' => 'phone',
            'identifier' => $request->phone,
            'code' => $code,
            'expires_at' => Carbon::now()->addMinutes(10),
        ]);

        try {
            $sid = env('TWILIO_SID');
            $token = env('TWILIO_TOKEN');
            $from = env('TWILIO_FROM');

            if ($sid && $token && $from) {
                $client = new Client($sid, $token);
                $client->messages->create(
                    $request->phone,
                    [
                        'from' => $from,
                        'body' => "Your verification code is: $code"
                    ]
                );
            } else {
                \Log::warning('Twilio credentials not set');
            }
        } catch (\Exception $e) {
            \Log::error('SMS send failed: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send SMS'], 500);
        }

        if (config('app.debug')) {
            return response()->json(['message' => 'Code sent (debug)', 'code' => $code]);
        }

        return response()->json(['message' => 'Code sent']);
    }

    public function verifyPhone(Request $request)
    {
        $request->validate([
            'phone' => 'required|string',
            'code' => 'required|string'
        ]);

        $verification = VerificationCode::where('identifier', $request->phone)
            ->where('type', 'phone')
            ->where('code', $request->code)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$verification) {
            return response()->json(['message' => 'Invalid or expired code'], 400);
        }

        // Verify user if exists
        $user = User::where('phone', $request->phone)->first();
        if ($user) {
            $user->phone_verified_at = Carbon::now();
            $user->save();
        }

        $verification->delete();

        return response()->json(['message' => 'Phone verified successfully']);
    }
}
