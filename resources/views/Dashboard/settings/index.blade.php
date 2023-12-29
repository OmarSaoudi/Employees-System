@extends('Dashboard.layouts.master')

@section('title')
    Settings
@stop

@section('css')
@endsection

@section('content')

<div class="content-wrapper">
   <!-- Content Header (Page header) -->
   <section class="content-header">
     <h1>
        Settings
     </h1>
     <ol class="breadcrumb">
       <li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> Dashboard</a></li>
       <li class="active">Settings</li>
     </ol>
   </section>

   <section class="content">
      <div class="box box-primary">
          <div class="box-header">
              <h3 class="box-title">Settings</h3>
          </div>
            <div class="box-body">
                    <form action="{{ route('settings.update','test') }}" method="post" enctype="multipart/form-data">
                      @csrf
                        {{-- 1 --}}
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                 <label>Company Name</label>
                                 <input type="text" name="name" class="form-control" value="{{ $settings[0]->name }}" placeholder="Company Name" required autofocus>
                                 <span class="help-block with-errors"></span>
                              </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                   <label>Company Email</label>
                                   <input type="email" name="email" class="form-control" value="{{ $settings[0]->email }}" placeholder="Company Email" required autofocus>
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                        </div>
                        {{-- End 1 --}}

                        {{-- 4 --}}
                        <div class="row">
                            <div class="col-md-6">
                               <div class="form-group">
                                  <label>Company Phone</label>
                                  <input type="text" name="phone" class="form-control" value="{{ $settings[0]->phone }}" placeholder="Company Phone" required>
                                  <span class="help-block with-errors"></span>
                               </div>
                             </div>
                             <div class="col-md-6">
                                <div class="form-group">
                                   <label>Company Address</label>
                                   <input type="text" name="address" class="form-control" value="{{ $settings[0]->address }}" required placeholder="Address of Company">
                                   <span class="help-block with-errors"></span>
                                </div>
                            </div>
                         </div>
                        {{-- End 4 --}}

                        <br><br>
                        <div class="form-group" style="text-align:center">
                            <button type="submit" class="btn btn-success"><i class="fa fa-floppy-o"></i> Saving Data</button>
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
