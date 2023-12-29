<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\Departments\DepartmentRepositoryInterface;

class DepartmentController extends Controller
{
    private $Department;

    public function __construct(DepartmentRepositoryInterface $Department)
    {
        $this->Department = $Department;
    }

    public function index()
    {
      return  $this->Department->index();
    }

    public function store(Request $request)
    {
        return $this->Department->store($request);
    }

    public function update(Request $request)
    {
        return $this->Department->update($request);
    }

    public function destroy(Request $request)
    {
        return $this->Department->destroy($request);
    }

}
