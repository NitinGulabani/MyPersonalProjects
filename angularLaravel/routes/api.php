<?php

use App\Http\Controllers\testController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/data',[testController::class,'getData']);
Route::get('/editData/{id}',[testController::class,'editData']);
Route::post('/addData',[testController::class,'addData']);

Route::put('update',[testController::class,'updateData']);
Route::delete('delete/{id}',[testController::class,'deleteData']);
