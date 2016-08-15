<?php
namespace App\Http\Controllers\Web\Service;

use App\Http\Controllers\Web\BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Cookie;

class SettingController extends BaseController
{
    public function postLang(Request $request) {
        $languages = array_keys(config('lang'));
        $lang = $request->get('lang');

        $response = new Response();
        if ($lang && in_array($lang, $languages)) {
            $response->headers->setCookie(cookie()->forever('lang', $lang));
        }
        return $response;
    }
}
