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
        $this->call(DepartmentTableSeeder::class);
        $this->call(EmployeeTableSeeder::class);
        $this->call(SettingTableSeeder::class);
        $this->call(ImageTableSeeder::class);
    }
}
