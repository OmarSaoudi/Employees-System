<?php
namespace App\Interfaces\Departements;


interface DepartementRepositoryInterface
{

    // get All Departement
    public function index();

    // store Departement
    public function store($request);

    // update Departement
    public function update($request);

    // destroy Departement
    public function destroy($request);

}
