<?php
namespace App\Repository\Categories;

use App\Interfaces\Categories\CategoryRepositoryInterface;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CategoryRepository implements CategoryRepositoryInterface
{

    public function index()
    {
      $categories = Category::all();
      return view('Dashboard.categories.index', compact('categories'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $category = new Category();
            $category->name = $request->name;
            $category->description = $request->description;
            $category->save();

            DB::commit();
            return redirect()->route('categories.index');
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

            $category = Category::findorfail($request->id);
            $category->name = $request->name;
            $category->description = $request->description;
            $category->save();

            DB::commit();
            return redirect()->route('categories.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {

        try {

            $products = Product::where('category_id',$request->id)->pluck('category_id');

            if($products->count() == 0){
                $categories = Category::findOrFail($request->id)->delete();
                return redirect()->route('categories.index');
            }
            else{
                return redirect()->route('categories.index');
            }

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }

    }

}
