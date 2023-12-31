<!-- jQuery 3 -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/jquery/dist/jquery.min.js') }}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<!-- FastClick -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/fastclick/lib/fastclick.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ URL::asset('Dashboard/assets/dist/js/adminlte.min.js') }}"></script>
<!-- Sparkline -->
{{-- <script src="{{ URL::asset('Dashboard/assets/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js') }}"></script> --}}
<!-- jvectormap  -->
<script src="{{ URL::asset('Dashboard/assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
{{-- <script src="{{ URL::asset('assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script> --}}
<!-- SlimScroll -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/jquery-slimscroll/jquery.slimscroll.min.js') }}"></script>
<!-- ChartJS -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/chart.js/Chart.js') }}"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
{{-- <script src="{{ URL::asset('Dashboard/assets/dist/js/pages/dashboard2.js') }}"></script> --}}
<!-- AdminLTE for demo purposes -->
{{-- <script src="{{ URL::asset('Dashboard/assets/dist/js/demo.js') }}"></script> --}}
<!-- Validator -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="{{ URL::asset('Dashboard/assets/bower_components/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ URL::asset('Dashboard/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js') }}"></script>
<script>
    $(function () {
      $('#example1').DataTable()
    })
</script>
<!-- Select2 -->
<script src="{{ URL::asset('Dashboard/assets/bower_components/select2/dist/js/select2.full.min.js') }}"></script>
<script>
  $(function () {
    $('.select2').select2()
  })
</script>




@yield('scripts')
