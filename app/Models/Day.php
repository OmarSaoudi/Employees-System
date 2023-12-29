<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    use HasFactory;

    public $fillable= ['name'];

    public function employee()
    {
        return $this->belongsToMany(Employee::class,'employee_day');
    }
}
