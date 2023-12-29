<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\DepartementController;
use App\Http\Controllers\Dashboard\EmployeeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', fn () => redirect()->route('login'));


Route::middleware('auth')->group(function () {
    Route::get('/AdminDashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('departements', DepartementController::class);
    Route::resource('employees', EmployeeController::class);
    Route::get('/print_employees', [EmployeeController::class, 'print'])->name('employees.print');
    Route::post('update_status_e', [EmployeeController::class, 'update_status_e'])->name('update_status_e');
});

require __DIR__.'/auth.php';
