<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Employee extends Model
{
    use HasFactory;

    public $fillable= ['name','email','date_birth','phone','address','description','status'];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function blood()
    {
        return $this->belongsTo(Blood::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function day()
    {
        return $this->belongsToMany(Day::class,'employee_day');
    }
}
