<?php

namespace Database\Factories;

use App\Models\Blood;
use App\Models\Department;
use App\Models\Gender;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'date_birth' => now(),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->state(),
            'gender_id' => Gender::all()->unique()->random()->id,
            'blood_id' => Blood::all()->unique()->random()->id,
            'department_id' => Department::all()->unique()->random()->id,
            'description' => fake()->word(),
        ];
    }
}
