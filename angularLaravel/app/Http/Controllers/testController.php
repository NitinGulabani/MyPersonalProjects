<?php

namespace App\Http\Controllers;

use App\Models\test;
use Illuminate\Http\Request;

class testController extends Controller
{
    //
    function getData()
    {
        return test::all();
    }
    function addData(Request $req)
    {
        $test = new test();
        $test->name = $req->name;
        $test->email = $req->email;
        $result = $test->save();

        if($result)
        {
            return ['result'=>'Data Added Succesfully'];
        }else{
            return ['result'=>'Operation Failed'];
        }
    }

    function editData($id)
    {
       $data = test::find($id);
       return $data;
    }
    function updateData(Request $req)
    {
        $data = test::find($req->id);
        $data->name = $req->name;
        $data->email = $req->email;
        $result = $data->save();

        if($result)
        {
            return ['result'=>'Data Updated Succesfully'];
        }else{
            return ['result'=>'Operation Failed'];
        }
    }
    function deleteData($id)
    {
        $data = test::find($id);
        $result = $data->delete();
        
        if($result)
        {
            return ['result' => 'Data Deleted'];
        }
        else{
            return ['result' => 'Operation Failed'];
        }
    }
}
