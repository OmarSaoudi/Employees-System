@extends('Dashboard.layouts.master')

@section('title')
    Edit Employee
@stop

@section('css')

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
       <li><a href="{{ route('employees.index') }}">Employees</a></li>
       <li class="active">Edit Employee</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Edit Employee</h3>
          </div>
            <div class="box-body">
                   <form action="{{ route('employees.update','test') }}" method="post" autocomplete="off" enctype="multipart/form-data">
                      @csrf
                      {{ method_field('PATCH') }}
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-4">
                              <div class="form-group">
                                 <label>Name</label>
                                 <input type="hidden" value="{{ $employees->id }}" name="id">
                                 <input type="text" name="name" value="{{ $employees->name }}" class="form-control" required>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" value="{{ $employees->phone }}" class="form-control" required>
                                    <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                   <label>Email</label>
                                   <input type="email" name="email" value="{{ $employees->email }}" class="form-control" required>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 1 --}}
                            <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                      <label>Address</label>
                                      <input type="text" name="address" value="{{ $employees->address }}" class="form-control" required>
                                      <span class="help-block with-errors"></span>
                                   </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                         <label>Date Of Birth</label>
                                         <input type="date" name="date_birth" value="{{ $employees->date_birth }}" class="form-control" required>
                                         <span class="help-block with-errors"></span>
                                     </div>
                                 </div>
                            </div>
                        {{-- End 1 --}}

                        {{-- 4 --}}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Bloods</label>
                                   <select name="blood_id" class="form-control">
                                      <option value="" selected disabled>Select Blood</option>
                                      @foreach ($bloods as $blood)
                                        <option value="{{ $blood->id }}" {{ $employees->blood_id == $blood->id ? 'selected' : '' }}>{{ $blood->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Genders</label>
                                   <select name="gender_id" class="form-control">
                                      <option value="" selected disabled>Select Gender</option>
                                      @foreach ($genders as $gender)
                                        <option value="{{ $gender->id }}" {{ $employees->gender_id == $gender->id ? 'selected' : '' }}>{{ $gender->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 4 --}}

                        {{-- 4 --}}
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Departments</label>
                                   <select name="department_id" class="form-control">
                                      <option value="" selected disabled>Select Department</option>
                                      @foreach ($departments as $department)
                                        <option value="{{ $department->id }}" {{ $employees->department_id == $department->id ? 'selected' : '' }}>{{ $department->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Days</label>
                                   <select name="day[]" class="form-control select2" multiple="multiple" style="width: 100%;">
                                      @forelse($days as $day)
                                        <option value="{{ $day->id }}" {{ in_array($day->id,$employees->day->pluck('id')->toArray()) ? 'selected' : null }}>{{ $day->name }}</option>
                                      @empty
                                      @endforelse
                                   </select>
                                </div>
                            </div>
                        </div>
                        {{-- End 4 --}}

                        <div class="row">
                            <div class="col-md-12">
                              <label>Description <span class="text-danger">*</span></label>
                              <textarea name="description" id="description" class="form-control">{{ $employees->description }}</textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                              <label>Images <span class="text-danger">*</span></label>
                              <input type="file" accept="image/*" name="photo" onchange="loadFile(event)"><br>
                              <img src="{{ URL::asset('Dashboard/img/employees/'.$employees->image->filename) }}" style="border-radius:50%" width="150px" height="150px" id="output"/>
                            </div>
                        </div>

                        <br><br>
                        <div class="form-group" style="text-align:center">
                            <button type="submit" class="btn btn-success"><i class="fa fa-floppy-o"></i> Saving Data</button>
                            <a href="{{ route('employees.index') }}" class="btn btn-warning"><i class="fa fa-undo"></i> Back</a>
                        </div>
                    </form>
                </div>
        </div>
   </section>
</div>

@endsection

@section('scripts')
<script>
    var loadFile = function (event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    };
</script>
@endsection
