@extends('Dashboard.layouts.master')

@section('title')
      Employees | Print Employees
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
        <small>Employees Print Preview</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="{{ route('employees.index') }}">Employees</a></li>
      <li class="active">Employees Print Preview</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="invoice" id="print">
    <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <br>
            <div class="pull-left">
            <h5 class="box-title">Company Name : {{ $settings[0]->name }}</h5>
            <h6 class="box-title">Company Email : {{ $settings[0]->email }}</h6>
            <h6 class="box-title">Company Phone : {{ $settings[0]->phone }}</h6>
            <h6 class="box-title">Company Address : {{ $settings[0]->address }}</h6>
            </div>
            <div class="pull-right">
            <img src="{{ URL::asset('Dashboard/assets/dist/img/gallery.jpg') }}" style="border-radius:50%" width="100px" height="100px" alt="User Image">
            </div><br><br><br><br><br>
            <!-- /.box-header -->
            <div class="box-body">
                <div style="text-align: center">
                    <h4 class="box-title"><b>Employees List</b></h4>
                </div>
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Created at</th>
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
                  <td>{{ $employee->department->name }}</td>
                  <td>{{ $employee->phone }}</td>
                  <td>{{ $employee->address }}</td>
                  <td>{{ $employee->created_at }}</td>
                </tr>
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
    <div class="row no-print">
      <div class="col-xs-12">
        <a href="{{ route('employees.index') }}" id="print_Button" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
        <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px;" id="print_Button" onclick="printDiv()">
              <i class="fa fa-print"></i> &nbsp;Print
        </button>
      </div>
    </div>
  </section>
  <!-- /.content -->
</div>

@endsection


@section('scripts')
<script type="text/javascript">
    function printDiv() {
        var printContents = document.getElementById('print').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        location.reload();
    }
</script>
@endsection
