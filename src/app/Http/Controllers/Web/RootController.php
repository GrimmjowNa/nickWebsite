<?php
namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

class RootController extends BaseController
{
    public function doNothingng() {
        return view('root.do-nothing');
    }
}
