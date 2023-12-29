<?php
namespace App\Repository\Employees;

use App\Interfaces\Employees\EmployeeRepositoryInterface;
use App\Models\Day;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Gender;
use App\Models\Blood;
use App\Models\Setting;
use App\Traits\UploadTrait;
use Illuminate\Support\Facades\DB;

class EmployeeRepository implements EmployeeRepositoryInterface
{

    use UploadTrait;

    public function index()
    {
      $employees = Employee::all();
      return view('Dashboard.employees.index', compact('employees'));
    }

    public function create()
    {
        $bloods = Blood::all();
        $genders = Gender::all();
        $departments = Department::all();
        $days = Day::all();
        return view('Dashboard.employees.add',compact('bloods','genders','departments','days'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $employee = new Employee();
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->date_birth = $request->date_birth;
            $employee->phone = $request->phone;
            $employee->address = $request->address;
            $employee->gender_id = $request->gender_id;
            $employee->blood_id = $request->blood_id;
            $employee->department_id = $request->department_id;
            $employee->description = $request->description;
            $employee->status = 1;
            $employee->save();

            // insert pivot tABLE
            $employee->day()->attach($request->day);

            //Upload img
            $this->verifyAndStoreImage($request,'photo','employees','upload_image',$employee->id,'App\Models\Employee');

            DB::commit();
            return redirect()->route('employees.index');
        }

        catch (\Exception $e){
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function edit($id)
    {
        $bloods = Blood::all();
        $genders = Gender::all();
        $departments = Department::all();
        $days = Day::all();
        $employees = Employee::findorfail($id);
        return view('Dashboard.employees.edit',compact('bloods','genders','departments','days','employees'));
    }

    public function update($request)
    {
        DB::beginTransaction();

        try {

            $employee = Employee::findorfail($request->id);
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->date_birth = $request->date_birth;
            $employee->phone = $request->phone;
            $employee->address = $request->address;
            $employee->gender_id = $request->gender_id;
            $employee->blood_id = $request->blood_id;
            $employee->department_id = $request->department_id;
            $employee->description = $request->description;
            $employee->day()->sync($request->day);
            $employee->save();

            // update photo
            if ($request->has('photo')){
                // Delete old photo
                if ($employee->image){
                    $old_img = $employee->image->filename;
                    $this->Delete_attachment('upload_image','employees/'.$old_img,$request->id);
                }
                //Upload img
                $this->verifyAndStoreImage($request,'photo','employees','upload_image',$request->id,'App\Models\Employee');
            }

            DB::commit();
            return redirect()->route('employees.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
        if($request->page_id==1){

            if($request->filename){

              $this->Delete_attachment('upload_image','employees/'.$request->filename,$request->id,$request->filename);
            }
               Employee::destroy($request->id);
               return redirect()->route('employees.index');
           }

           else{

                $employee = Employee::findorfail($request->id);
                if($employee->image){
                    $this->Delete_attachment('upload_image','employees/'.$employee->image->filename,$employee->image->filename);
                }

               Employee::destroy($request->id);
               return redirect()->route('Employees.index');
           }

    }

    public function print()
    {
      $settings = Setting::where('id',1)->get();
      $employees = Employee::all();
      return view('Dashboard.employees.print_employees', compact('employees','settings'));
    }

    public function update_status_e($request)
    {
        try {
            $employee = Employee::findorfail($request->id);
            $employee->update([
                'status' => $request->status
            ]);

            return redirect()->route('employees.index');
        }

        catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

}
