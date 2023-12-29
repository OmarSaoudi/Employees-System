@extends('Dashboard.layouts.master')

@section('title')
    Create Employee
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
       <li class="active">Create Employee</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Create Employee</h3>
          </div>
            <div class="box-body">
                    <form method="POST" action="{{ route('employees.store') }}" autocomplete="off" enctype="multipart/form-data">
                      @csrf
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-4">
                              <div class="form-group">
                                 <label>Name</label>
                                 <input type="text" name="name" value="{{ old('name') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                   <label>Email</label>
                                   <input type="email" name="email" value="{{ old('email') }}" class="form-control">
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                 <label>Phone</label>
                                 <input type="text" name="phone" value="{{ old('phone') }}" class="form-control">
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 2 --}}
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                               <label>Address</label>
                               <input type="text" name="address" value="{{ old('address') }}" class="form-control" required>
                               <span class="help-block with-errors"></span>
                            </div>
                          </div>
                           <div class="col-md-6">
                              <div class="form-group">
                                <label>Date Of Birth</label>
                                <input type="date" name="date_birth" value="{{ old('date_birth') }}" class="form-control" required>
                                <span class="help-block with-errors"></span>
                              </div>
                            </div>
                        </div>
                        {{-- End 2 --}}

                        {{-- 3 --}}
                        <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                 <label>Bloods</label>
                                 <select name="blood_id" class="form-control"  required>
                                    <option value="" selected disabled>Select Blood</option>
                                    @foreach ($bloods as $blood)
                                        <option value="{{ $blood->id }}"> {{ $blood->name }}</option>
                                    @endforeach
                                 </select>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Genders</label>
                                   <select name="gender_id" class="form-control"  required>
                                      <option value="" selected disabled>Select Gender</option>
                                      @foreach ($genders as $gender)
                                          <option value="{{ $gender->id }}"> {{ $gender->name }}</option>
                                      @endforeach
                                   </select>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 3 --}}

                        {{-- 3 --}}
                        <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                 <label>Departements</label>
                                 <select name="departement_id" class="form-control"  required>
                                    <option value="" selected disabled>Select Departement</option>
                                    @foreach ($departements as $departement)
                                        <option value="{{ $departement->id }}"> {{ $departement->name }}</option>
                                    @endforeach
                                 </select>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Days</label>
                                    <select name="day[]" class="form-control select2" multiple="multiple" data-placeholder="Select a Day" style="width: 100%;">
                                       @forelse($days as $day)
                                         <option value="{{ $day->id }}"> {{ $day->name }}</option>
                                       @empty
                                       @endforelse
                                    </select>
                                </div>
                            </div>
                        </div>
                        {{-- End 3 --}}

                        <div class="row">
                            <div class="col-md-12">
                              <label>Description <span class="text-danger">*</span></label>
                              <textarea name="description" id="description" class="form-control"></textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                              <label>Images <span class="text-danger">*</span></label>
                              <input type="file" accept="image/*" name="photo" onchange="loadFile(event)"><br>
                              <img style="border-radius:50%" width="150px" height="150px" id="output"/>
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
    var loadFile = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }
    };
</script>
@endsection
