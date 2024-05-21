<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    function OsszesSzavak() {
        return DB::select('SELECT * FROM `szavaks` as sza inner join temas as tn on sza.temaId = tn.id ');
    }
    function SzavakTema($tema){
        return DB::table('szavaks')->where('temaId','=',$tema)->select('*')->get();
    }

    function OsszesTema(){
        return DB::select('SELECT * from temas');
    }
}
