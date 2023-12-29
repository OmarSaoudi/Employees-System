<?php
namespace App\Repository\Products;

use App\Interfaces\Products\ProductRepositoryInterface;
use App\Models\Category;
use App\Models\Product;
use App\Traits\UploadTrait;
use Illuminate\Support\Facades\DB;

class ProductRepository implements ProductRepositoryInterface
{

    use UploadTrait;

    public function index()
    {
      $products = Product::all();
      $categories = Category::all();
      return view('Dashboard.products.index', compact('products','categories'));
    }

    public function store($request) {

        DB::beginTransaction();

        try {
            $product = new Product();
            $product->name = $request->name;
            $product->category_id = $request->category_id;
            $product->description = $request->description;
            $product->save();


            //Upload img
            $this->verifyAndStoreImage($request,'photo','products','upload_image',$product->id,'App\Models\Product');

            DB::commit();
            return redirect()->route('products.index');
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

            $product = Product::findorfail($request->id);
            $product->name = $request->name;
            $product->category_id = $request->category_id;
            $product->description = $request->description;
            $product->save();

            // update photo
            if ($request->has('photo')){
                // Delete old photo
                if ($product->image){
                    $old_img = $product->image->filename;
                    $this->Delete_attachment('upload_image','products/'.$old_img,$request->id);
                }
                //Upload img
                $this->verifyAndStoreImage($request,'photo','products','upload_image',$request->id,'App\Models\Product');
            }

            DB::commit();
            return redirect()->route('products.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($request)
    {
        try {

            if($request->page_id==1)
            {
                if($request->filename){$this->Delete_attachment('upload_image','products/'.$request->filename,$request->id,$request->filename);}
                    Product::destroy($request->id);
                    return redirect()->route('products.index');
            }
            else
            {
               $product = Product::findorfail($request->id);
               if($product->image){$this->Delete_attachment('upload_image','products/'.$product->image->filename,$product->image->filename);}
               Category::destroy($request->id);
               return redirect()->route('products.index');
            }

        }
        catch (\Exception $e){
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }


}
