<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->date('date_birth');
            $table->string('phone');
            $table->string('address');
            $table->foreignId('gender_id')->references('id')->on('genders')->onDelete('cascade');
            $table->foreignId('blood_id')->references('id')->on('bloods')->onDelete('cascade');
            $table->foreignId('department_id')->references('id')->on('departments')->onDelete('cascade');
            $table->text('description')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
