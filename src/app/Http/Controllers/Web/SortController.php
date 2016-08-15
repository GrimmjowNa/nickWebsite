<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Web\BaseController;

class SortController extends BaseController
{
    public function getIndex() {
        return view('sort.list');
    }
}