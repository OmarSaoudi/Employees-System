<?php

namespace App\Providers;

use App\Interfaces\Categories\DepartementRepositoryInterface;
use App\Interfaces\Products\EmployeeRepositoryInterface;
use App\Repository\Categories\DepartementRepository;
use App\Repository\Products\EmployeeRepository;
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
