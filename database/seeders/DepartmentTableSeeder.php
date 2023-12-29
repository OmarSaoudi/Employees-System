<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DepartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->delete();

        $departments = ['HR', 'Engineering','Marketing', 'Planning','Admin', 'Sales'];

        foreach ($departments as $department) {
            Department::create([
                'name' => $department,
                'description' => 'Good',
        ]);
        }
    }
}
