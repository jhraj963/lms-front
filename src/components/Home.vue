<template>
  <!-- Carousel Start -->
  <div class="container-fluid p-0 pb-5 mb-5">
    <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#header-carousel" data-slide-to="1"></li>
        <li data-target="#header-carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" style="min-height: 300px;">
          <img class="position-relative w-100" src="assets/img/carousel-1.jpg"
            style="min-height: 300px; object-fit: cover;">
          <div class="carousel-caption d-flex align-items-center justify-content-center">
            <div class="p-5" style="width: 100%; max-width: 900px;">
              <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
              <h1 class="display-3 text-white mb-md-4">Best Education From Your Home</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Carousel End -->
  <div class="container">
    <h2 class="section-title">Popular Courses</h2>
    <div class="row">
      <div v-for="course in limitedCourses" :key="course.id" class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img class="card-img-top" :src="'http://127.0.0.1:8000' + course.thumbnail" alt="Course Thumbnail" />
          <div class="card-content">
            <h4 class="card-title">{{ course.title }}</h4>
            <p class="card-description">{{ course.description }}</p>
            <div class="card-footer">
              <div class="d-flex justify-content-between">
                <p><i class="fa fa-users text-primary mr-2"></i>{{ course.students }} Students</p>
                <p><i class="far fa-clock text-primary mr-2"></i>{{ course.duration }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <h5>৳{{ course.price }}</h5>
                <router-link :to="`/course/${course.id}`" class="btn btn-primary">View Course</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button to View All Courses -->
    <div class="text-center mt-4">
      <router-link to="/all-courses" class="btn btn-secondary">View All Courses</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: [],
    };
  },
  computed: {
    limitedCourses() {
      return this.courses.slice(0, 3); // Show only first 3 courses
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/courses")
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  },
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.card {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.card-img-top {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card:hover {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.card-content {
  padding: 15px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.card-description {
  font-size: 0.95rem;
  color: #666;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-footer {
  margin-top: 10px;
}

.card-footer .d-flex {
  justify-content: space-between;
  align-items: center;
}

.card-footer .btn {
  background-color: #3700ff;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
}

.card-footer .btn:hover {
  background-color: #00ff75;
}

.text-center {
  text-align: center;
}

.btn-secondary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
}

.btn-secondary:hover {
  background-color: #0056b3;
}
</style>
