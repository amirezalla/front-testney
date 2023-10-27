<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::post('/login',[\App\Http\Controllers\Api\ApiUserController::class,'login']);
Route::post('/login',[\App\Http\Controllers\Api\ApiUserController::class,'login']);
Route::get('/api-categories-show', [\App\Http\Controllers\Api\APiCategoryController::class, 'show']);
Route::get('/api-category-type-show', [\App\Http\Controllers\Api\ApiCategoryTypeController::class, 'show']);
Route::middleware('auth:sanctum')->post('/api-nfts-store', [\App\Http\Controllers\Api\ApiNftController::class, 'store']);

