<?php

namespace App\Http\Controllers\Api;

use App\Loans;
use App\Loan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoansController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (isset(Auth::user()->id) && Auth::user()->type!="admin")
            return Loans::with(['customer'])->where('customer_id', Auth::user()->id)->latest()->get();
        else
            return Loans::with(['customer'])->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'amount' => 'required',
        ]);
        return Loans::create([
            'amount' => $request['amount'],
            'customer_id' => Auth::user()->id,
            'status' => "disbursed",

        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'amount' => 'required',
        ]);

        $payment = Loans::findOrFail($id);

        $payment->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $loan = Loans::findOrFail($id);
        $loan->delete();
        return response()->json([
            'message' => 'UserLoan deleted successfully'
        ]);
    }
}
