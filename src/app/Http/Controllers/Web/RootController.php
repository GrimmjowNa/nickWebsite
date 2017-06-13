<?php
namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

class RootController extends BaseController
{
    public function doNothing() {
        return view('root.do-nothing');
    }

    public function eyeExercises()
    {
        return view('root.eye-exercises');
    }
}
