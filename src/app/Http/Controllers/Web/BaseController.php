<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    private $path;

    public function __construct(Request $request) {
        $this->init($request);
    }

    public function init($request) {
        // initLocale
        $cookies = $request->cookie();
        if (array_key_exists('lang', $cookies)) {
            app()->setLocale($cookies['lang']);
        }

        // init path
        $this->path = $request->getPathInfo();
    }
}
