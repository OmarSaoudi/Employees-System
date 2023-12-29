       <!-- Delete -->
       <div class="modal fade" id="delete{{ $employee->id }}">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" style="text-align: center">Delete Employee</h4>
            </div>
           <div class="modal-body">
            <form action="{{ route('employees.destroy', 'test') }}" method="POST">
                @method('delete')
                @csrf
                <div class="modal-body">
                    <p>Are sure of the deleting process ?</p><br>
                    <input class="form-control" name="name" value="{{ $employee->name }}" type="text" readonly>
                    <input type="hidden" value="1" name="page_id">
                    @if($employee->image)
                       <input type="hidden" name="filename" value="{{$employee->image->filename}}">
                    @endif
                    <input id="id" type="hidden" name="id" class="form-control" value="{{ $employee->id }}">
                </div>
               <div class="modal-footer">
                 <button type="submit" class="btn btn-danger">Save changes</button>
                 <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
               </div>
            </form>
           </div>
          </div>
        </div>
    </div>
  <!-- Delete End -->
