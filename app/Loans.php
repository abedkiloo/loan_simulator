<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loans extends Model
{
    protected $fillable=[
        'amount',"customer_id",'status'
    ];
    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }
}
