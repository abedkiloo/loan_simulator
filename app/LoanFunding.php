<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoanFunding extends Model
{
    protected $fillable = [
        "amount",
        "loan_id",
        "lender_id",
    ];

        public function lender()
    {
        return $this->belongsTo(User::class, 'lender_id', 'id');
    }

    public function loan()
    {
        return $this->belongsTo(Loans::class, 'loan_id', 'id');
    }
}
