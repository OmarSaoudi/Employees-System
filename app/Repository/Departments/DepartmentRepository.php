<?php
namespace App\Repository\Departments;

use App\Interfaces\Departments\DepartmentRepositoryInterface;
use App\Models\Employee;
use App\Models\Department;
use Illuminate\Support\Facades\DB;

class DepartmentRepository implements DepartmentRepositoryInterface
{

    public function index()
    {
      $departments = Department::all();
      return view('Dashboard.departments.index', compact('departments'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $department = new Department();
            $department->name = $request->name;
            $department->description = $request->description;
            $department->status = 1;
            $department->save();

            DB::commit();
            return redirect()->route('departments.index');
        }

        catch (\Exception $e){
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update($request)
    {
        DB::beginTransaction();

        try {

            $department = Department::findorfail($request->id);
            $department->name = $request->name;
            $department->description = $request->description;
            $department->save();

            DB::commit();
            return redirect()->route('departments.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {

        try {

            $employees = Employee::where('department_id',$request->id)->pluck('department_id');

            if($employees->count() == 0){
                $departments = Department::findOrFail($request->id)->delete();
                return redirect()->route('departments.index');
            }
            else{
                return redirect()->route('departments.index');
            }

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

    }

}
