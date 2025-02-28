<template>
  <div class="container">
    <div class="row">
      <div v-for="course in courses" :key="course.id" class="col-lg-4 col-md-6 mb-4">
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
                <h5>${{ course.price }}</h5>
                <router-link :to="`/course/${course.id}`" class="btn btn-primary">View Course</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  created() {
    // Fetch the list of courses from the backend
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

.card {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.card-description {
  font-size: 1rem;
  color: #777;
}

.card-footer {
  margin-top: 20px;
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

.card-footer i {
  margin-right: 5px;
}

.card-footer h5 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
