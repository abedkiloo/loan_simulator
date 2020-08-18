<?php

use Illuminate\Http\Request;

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
Route::group([], function () {

    Route::post('/login', 'Api\UserController@login')->name('login.api');
    Route::post('/register', 'Api\UserController@store')->name('register.api');
    Route::post('/logout', 'Api\UserController@logout')->name('logout.api');


});


Route::middleware('auth:api')->group(function () {

    Route::apiResources(
        [
            'customer' => 'Api\UserController',
            'loans' => 'Api\LoansController',
        ]
    );
});
