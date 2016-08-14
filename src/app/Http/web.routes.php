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

Route::group(['prefix' => '/', 'as' => 'default'], function () {
    Route::get('/', 'IndexController@getIndex');

    Route::Controllers([
        'order' => 'OrderController',
    ]);

    Route::group(['prefix' => 'service', 'namespace' => 'Service'], function () {
        Route::Controllers([
            'setting' => 'SettingController',
        ]);
    });
});


Route::group(['prefix' => '/zh'], function () {
    App::setLocale('zh');

    Route::get('/', 'IndexController@getIndex');

    Route::Controllers([
        'order' => 'OrderController',
    ]);

    Route::group(['prefix' => 'service', 'namespace' => 'Service'], function () {
        Route::Controllers([
            'setting' => 'SettingController',
        ]);
    });
});

Route::group(['prefix' => '/en'], function () {
    App::setLocale('en');
    Route::get('/', 'IndexController@getIndex');

    Route::Controllers([
        'order' => 'OrderController',
    ]);

    Route::group(['prefix' => 'service', 'namespace' => 'Service'], function () {
        Route::Controllers([
            'setting' => 'SettingController',
        ]);
    });
});

