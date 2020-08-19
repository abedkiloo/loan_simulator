<?php

namespace App\Http\Controllers\Api;

use App\Loans;
use App\Payments;
use App\Transactions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Payments::with(['loan', 'transaction'])->latest()->get();
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
            'loan_id' => 'required',
            'transaction_id' => 'required',
        ]);
        $payment = Payments::create([
            'loan_id' => $request['loan_id'],
            'transaction_id' => $request['transaction_id'],
        ]);
        if ($payment) {
            $loan = Loans::find($request->loan_id);
            if ($loan->status == Loans::REPAID)
                $loan->update(['status', Loans::OVERPAYMENT]);
            if ($loan->status != Loans::REPAID && $loan->status != Loans::PARTIAL_REPAID) {
                if ($loan->amount == Transactions::find($request->transaction_id)->amount)
                    $loan->update(['status', Loans::REPAID]);
                if ($loan->amount > Transactions::find($request->transaction_id)->amount)
                    $loan->update(['status', Loans::PARTIAL_REPAID]);
                if ($loan->amount < Transactions::find($request->transaction_id)->amount)
                    $loan->update(['status', Loans::PARTIAL_REPAID]);
            }
        }
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
            'loan_id' => 'required|loans,id',
            'transaction_id' => 'required|transactions,id',
        ]);

        $payment = Payments::findOrFail($id);

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
        //
    }
}
