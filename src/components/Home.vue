<template>
  <!-- Courses Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Courses</h5>
        <h1>Our Popular Courses</h1>
      </div>
      <div class="row">
        <div v-for="course in courses" :key="course.id" class="col-lg-4 col-md-6 mb-4">
          <div class="rounded overflow-hidden mb-2">
            <img class="img-fluid" :src="course.thumbnail" alt="Course Image">
            <div class="bg-secondary p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>{{ course.students }} Students</small>
                <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>{{ course.duration }}</small>
              </div>
              <router-link :to="`/course/${course.id}`" class="h5 text-decoration-none text-white">
                {{ course.title }}
              </router-link>
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>{{ course.rating }} <small>({{
                      course.reviews }})</small></h6>
                  <h5 class="m-0">${{ course.price }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses End -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: []
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/courses").then(response => {
      this.courses = response.data;
    });
  }
};
</script>

<style scoped>
.text-white {
  color: #fff !important;
}
</style>
