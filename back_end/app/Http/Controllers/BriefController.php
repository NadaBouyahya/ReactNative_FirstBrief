<?php

namespace App\Http\Controllers;

use App\Models\brief;
use Illuminate\Http\Request;

class BriefController extends Controller
{
    public function getAllBriefs()
    {
        $briefs = brief::all();
        return response()->json($briefs);
    }
}
