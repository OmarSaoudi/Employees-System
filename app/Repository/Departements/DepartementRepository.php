<?php
namespace App\Repository\Departements;

use App\Interfaces\Departements\CategoryRepositoryInterface;
use App\Models\Employee;
use App\Models\Departement;
use Illuminate\Support\Facades\DB;

class DepartementRepository implements DepartementRepositoryInterface
{

    public function index()
    {
      $departements = Departement::all();
      return view('Dashboard.departements.index', compact('departements'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $departement = new Departement();
            $departement->name = $request->name;
            $departement->description = $request->description;
            $departement->status = 1;
            $departement->save();

            DB::commit();
            return redirect()->route('departements.index');
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

            $departement = Departement::findorfail($request->id);
            $departement->name = $request->name;
            $departement->description = $request->description;
            $departement->save();

            DB::commit();
            return redirect()->route('departements.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {

        try {

            $employees = Employee::where('departement_id',$request->id)->pluck('departement_id');

            if($employees->count() == 0){
                $departements = Departement::findOrFail($request->id)->delete();
                return redirect()->route('departements.index');
            }
            else{
                return redirect()->route('departements.index');
            }

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

    }

}
