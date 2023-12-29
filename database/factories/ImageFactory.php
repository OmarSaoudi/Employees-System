<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Image::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'filename' =>  $this->faker->randomElement(['1.png', '2.png', '3.png', '4.png']),
            'imageable_id' => Employee::all()->random()->id,
            'imageable_type' => 'App\Models\Employee',
        ];
    }
}
