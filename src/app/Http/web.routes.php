<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'IndexController@getIndex');

Route::group(['prefix' => 'js'], function () {
    Route::Controllers([
        'sort' => 'SortController',
    ]);
});

Route::group(['prefix' => 'service', 'namespace' => 'Service'], function () {
    Route::Controllers([
        'setting' => 'SettingController',
    ]);
});

Route::get('/doNothing', 'RootController@doNothing');
Route::get('/eyeExercises', 'RootController@eyeExercises');
