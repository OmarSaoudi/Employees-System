<?php

namespace App\Providers;

use App\Interfaces\Departments\DepartmentRepositoryInterface;
use App\Interfaces\Employees\EmployeeRepositoryInterface;
use App\Repository\Departments\DepartmentRepository;
use App\Repository\Employees\EmployeeRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DepartmentRepositoryInterface::class, DepartmentRepository::class);
        $this->app->bind(EmployeeRepositoryInterface::class, EmployeeRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
