<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{

    public function index()
    {
      $settings = Setting::where('id', 1)->get();
      return view('Dashboard.settings.index', compact('settings'));
    }

    public function show()
    {
        return Setting::first();
    }

    public function update(Request $request)
    {

        DB::beginTransaction();

        try {

            $setting = Setting::first();
            $setting->name = $request->name;
            $setting->address = $request->address;
            $setting->phone = $request->phone;
            $setting->email = $request->email;
            $setting->update();

            DB::commit();
            return redirect()->route('settings.index');

        }
        catch (\Exception $e) {
            DB::rollback();
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        }
    }

}
