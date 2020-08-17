<?php

namespace App\Http\Controllers\Api;

use App\Customers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public function index()
    {
        return Customers::latest()->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'type' => 'required',
        ]);

        return Customers::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'type' => $request['type'],
        ]);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'type' => 'required',
        ]);

        $Customers = Customers::findOrFail($id);

        $Customers->update($request->all());
    }

    public function destroy($id)
    {
        $Customers = Customers::findOrFail($id);
        $Customers->delete();
        return response()->json([
            'message' => 'Customers deleted successfully'
        ]);
    }
}
