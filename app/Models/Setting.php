<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Setting extends Model
{
    use HasFactory;

    public $fillable= ['name','email','phone','address'];
}
