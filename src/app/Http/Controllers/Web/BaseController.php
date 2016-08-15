<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function __construct(Request $request) {
        $this->initLocale($request);
    }

    public function initLocale($request) {
        $cookies = $request->cookie();
        if (array_key_exists('lang', $cookies)) {
            app()->setLocale($cookies['lang']);
        }
    }
}
