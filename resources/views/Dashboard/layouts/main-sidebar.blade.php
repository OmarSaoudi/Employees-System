<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="{{ asset('Dashboard/assets/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ auth()->user()->name }}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li><a href="{{ route('dashboard') }}"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
        <li class="header">MASTER</li>
        <li><a href="{{ route('departements.index') }}"><i class="fa fa-building-o"></i> <span>Departement</span></a></li>
        <li><a href="{{ route('employees.index') }}"><i class="fa fa-users"></i> <span>Employees</span></a></li>
        <li><a href=""><i class="fa fa-cog"></i> <span>Settings</span></a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
</aside>



