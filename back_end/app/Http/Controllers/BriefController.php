<?php

namespace App\Http\Controllers;

use App\Models\brief;
use Illuminate\Http\Request;

class BriefController extends Controller
{
    public function getAllBriefs()
    {
        $briefs = brief::all();
        foreach($briefs as $brief){
           $brief->tutor; 
        }
        return response()->json($briefs);
    }

    public function getBriefByID($id)
    {
        $brief = brief::where('id', $id)->first();
        $brief->tutor;
        return response()->json($brief);
    }
}
