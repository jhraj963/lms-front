<template>
    <div class="container">
        <div class="row">
            <div v-for="course in courses" :key="course.id" class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img class="card-img-top" :src="'https://weeblecode.com/lms/public' + course.thumbnail"
                        alt="Course Thumbnail" />
                    <div class="card-content">
                        <h4 class="card-title">{{ course.title }}</h4>
                        <p class="card-description">{{ course.description }}</p>
                        <div class="card-footer">
                            <div class="info">
                                <p><i class="fa fa-users"></i> {{ course.students }} Students</p>
                                <p><i class="far fa-clock"></i> {{ course.duration }}</p>
                            </div>
                            <div class="pricing">
                                <h5>৳{{ course.price }}</h5>
                                <router-link :to="`/course/${course.id}`" class="btn">View Course</router-link>
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
        axios
            .get("https://weeblecode.com/lms/public/api/courses")
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
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}

.card-img-top {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
}

.card-description {
    font-size: 0.95rem;
    color: #7f8c8d;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.card-footer {
    margin-top: 15px;
}

.info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #2980b9;
}

.pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

h5 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #e74c3c;
}

.btn {
    background: #27ae60;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
}

.btn:hover {
    background: #2ecc71;
}
</style>
