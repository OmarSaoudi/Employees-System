<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\Employees\EmployeeRepositoryInterface;

class EmployeeController extends Controller
{
    private $Employee;

    public function __construct(EmployeeRepositoryInterface $Employee)
    {
        $this->Employee = $Employee;
    }

    public function index()
    {
      return  $this->Employee->index();

    }

    public function create()
    {
        return $this->Employee->create();
    }

    public function store(Request $request)
    {
        return $this->Employee->store($request);
    }

    public function edit($id)
    {
        return $this->Employee->edit($id);
    }


    public function update(Request $request)
    {
        return $this->Employee->update($request);
    }

    public function destroy(Request $request)
    {
        return $this->Employee->destroy($request);
    }

    public function update_status_e(Request $request)
    {
        $this->validate($request, [
            'status' => 'required|in:0,1',
        ]);
        return $this->Employee->update_status_e($request);
    }
}
