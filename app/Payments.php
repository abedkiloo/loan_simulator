<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    protected $fillable = [
        "transaction_id", "loan_id",
    ];

    public function transaction()
    {
        return $this->belongsTo(Transactions::class, 'transaction_id', 'id');
    }

    public function loan()
    {
        return $this->belongsTo(Loans::class, 'loan_id', 'id');
    }
}
