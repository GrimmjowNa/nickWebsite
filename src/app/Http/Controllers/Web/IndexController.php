<?php
namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

class IndexController extends BaseController
{
    public function getIndex() {
        return view('home')->with('p', 'ssssssss');
    }
}
