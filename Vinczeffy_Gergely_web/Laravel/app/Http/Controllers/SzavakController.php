<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    function OsszesSzavak() {
        return DB::select('SELECT * FROM `szavaks` as sza inner join temas as tn on sza.temaId = tn.id ');
    }

    function OsszesTema(){
        return DB::select('SELECT * from temas');
    }
}
