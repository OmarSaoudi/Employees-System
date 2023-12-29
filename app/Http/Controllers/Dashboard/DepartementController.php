<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\Departements\DepartementRepositoryInterface;

class DepartementController extends Controller
{
    private $Departement;

    public function __construct(DepartementRepositoryInterface $Departement)
    {
        $this->Departement = $Departement;
    }

    public function index()
    {
      return  $this->Departement->index();
    }

    public function store(Request $request)
    {
        return $this->Departement->store($request);
    }

    public function update(Request $request)
    {
        return $this->Departement->update($request);
    }

    public function destroy(Request $request)
    {
        return $this->Departement->destroy($request);
    }

}
