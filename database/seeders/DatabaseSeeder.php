<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserTableSeeder::class);
        $this->call(BloodTableSeeder::class);
        $this->call(DayTableSeeder::class);
        $this->call(GenderTableSeeder::class);
        $this->call(DepartementTableSeeder::class);
        $this->call(EmployeeTableSeeder::class);
    }
}
