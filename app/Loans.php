<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loans extends Model
{
    const REPAID = "repaid";
    const PARTIAL_REPAID = 'partial_paid';
    const OVERPAYMENT = 'over_payment';


    protected $fillable = [
        'amount', "customer_id", 'status'
    ];


    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
}
