<?php

namespace App\Providers;

use App\Interfaces\Departements\DepartementRepositoryInterface;
use App\Interfaces\Employees\EmployeeRepositoryInterface;
use App\Repository\Departements\DepartementRepository;
use App\Repository\Employees\EmployeeRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DepartementRepositoryInterface::class, DepartementRepository::class);
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
