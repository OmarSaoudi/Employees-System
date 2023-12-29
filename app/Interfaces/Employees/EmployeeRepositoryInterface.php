<?php
namespace App\Interfaces\Employees;


interface EmployeeRepositoryInterface
{

     // get All Employee
     public function index();

     // create Employee
     public function create();

     // store Employee
     public function store($request);

     // destroy Employee
     public function edit($id);

     // update Employee
     public function update($request);

     // destroy Employee
     public function destroy($request);

     // print
     public function print();

     // update_status_e
     public function update_status_e($request);

}
