@extends('Dashboard.layouts.master')

@section('title')
    Employees
@stop

@section('css')
<style>
    @media print {
        #print_Button {
            display: none;
        }
    }
</style>
@endsection

@section('content')

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Employees
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active">Employees</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content" id="print">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Employees List <small>{{ $employees->count() }}</small></h3>
            <br><br>
            <a href="{{ route('employees.create') }}" class="btn btn-success"><i class="fa fa-plus"></i> Add</a>
            <a href="{{ route('employees.print') }}" class="btn btn-primary"><i class="fa fa-print"></i> Print</a>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Of Birth</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Day</th>
                <th>Gender</th>
                <th>Blood</th>
                <th>Status</th>
                <th>Description</th>
                <th>Created at</th>
                <th>Operation</th>
              </tr>
              </thead>
              <tbody>
              @foreach($employees as $employee)
              <tr>
                <td>{{ $loop->index + 1 }}</td>
                <td>
                    @if($employee->image)
                        <img src="{{ URL::asset('Dashboard/img/employees/'.$employee->image->filename) }}" height="50px" width="50px" alt="">

                    @else
                        <img src="{{ URL::asset('Dashboard/img/employee_default.png') }}" height="50px" width="50px" alt="">
                    @endif
                </td>
                <td>{{ $employee->name }}</td>
                <td>{{ $employee->email }}</td>
                <td>{{ $employee->date_birth }}</td>
                <td>{{ $employee->department->name }}</td>
                <td>{{ $employee->phone }}</td>
                <td>{{ $employee->address }}</td>
                <td>{{ $employee->day->pluck('name')->join(', ') }}</td>
                <td>{{ $employee->gender->name }}</td>
                <td>{{ $employee->blood->name }}</td>
                <td>{{ $employee->status == 1 ? 'Active' : 'Inactive' }}</td>
                <td>{{ $employee->description }}</td>
                <td>{{ $employee->created_at->diffForHumans() }}</td>
                <td>
                    <a href="{{ route('employees.edit', $employee->id) }}" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-warning btn-sm" data-toggle="modal" data-target="#update_status_e{{ $employee->id }}"><i class="fa fa-wrench"></i></a>
                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $employee->id }}"><i class="fa fa-trash"></i></a>
                </td>
              </tr>
              @include('Dashboard.employees.delete')
              @include('Dashboard.employees.update_status_e')
              @endforeach
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</div>


@endsection


@section('scripts')

@endsection
