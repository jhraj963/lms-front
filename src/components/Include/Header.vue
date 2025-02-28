<template>
  <!-- Topbar Start -->
  <div class="container-fluid d-none d-lg-block">
    <div class="row align-items-center py-4 px-xl-5">
      <div class="col-lg-3">
        <a href="/" class="text-decoration-none">
          <h3 class="m-0"><span class="text-primary"> Learning Management</span></h3>
          <h4 class="m-0"><span class="text-primary">System</span>(LMS)</h4>
        </a>
      </div>
      <div class="col-lg-3 text-right">
        <div class="d-inline-flex align-items-center">
          <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
          <div class="text-left">
            <h6 class="font-weight-semi-bold mb-1">Our Office</h6>
            <small>Bordighir Phar, Chattogram</small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-right">
        <div class="d-inline-flex align-items-center">
          <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
          <div class="text-left">
            <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
            <small>julfiqurhaidar@gmail.com</small>
          </div>
        </div>
      </div>
      <div class="col-lg-3 text-right">
        <div class="d-inline-flex align-items-center">
          <i class="fa fa-2x fa-phone text-primary mr-3"></i>
          <div class="text-left">
            <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
            <small>+880 1572 378254</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->


  <!-- Navbar Start -->
  <div class="container-fluid">
    <div class="row border-top px-xl-5">
      <div class="col-lg-3 d-none d-lg-block">

      </div>
      <div class="col-lg-9 text-center">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
          </a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav py-0">
              <a href="/" class="nav-item nav-link active">Home</a>
              <a href="about.html" class="nav-item nav-link">About</a>
              <a href="course.html" class="nav-item nav-link">Courses</a>
              <a href="teacher.html" class="nav-item nav-link">Teachers</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                <div class="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" class="dropdown-item">Blog List</a>
                  <a href="single.html" class="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- Navbar End -->
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
