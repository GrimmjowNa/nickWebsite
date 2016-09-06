<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Web\BaseController;

class SortController extends BaseController
{
    public function getIndex() {
        return view('sort.list');
    }

    public function getStraightInsertionSort() {
        return view('sort.straight-insertion-sort');
    }

    public function getShellSort() {
        return view('sort.shell-sort');
    }
}
