<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoanFundingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_fundings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->decimal('amount');
            $table->bigInteger('loan_id')->unsigned()->index();
            $table->foreign('loan_id')->references('id')->on('loans');
            $table->bigInteger('lender_id')->unsigned()->index();
            $table->foreign('lender_id')->references('id')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loan_fundings');
    }
}
