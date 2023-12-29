<?php
namespace App\Interfaces\Departments;


interface DepartmentRepositoryInterface
{

    // get All Department
    public function index();

    // store Department
    public function store($request);

    // update Department
    public function update($request);

    // destroy Department
    public function destroy($request);

}
