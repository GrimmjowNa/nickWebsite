<?php
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Web\BaseController;

class OrderController extends BaseController
{
    public function __construct() {

    }
    public function getIndex() {
        return 'order list';
    }
}