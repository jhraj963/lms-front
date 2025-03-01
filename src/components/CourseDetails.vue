<template>
    <div class="course-container">
        <h2 class="course-title">{{ course.title }}</h2>
        <img class="course-thumbnail img-fluid" :src="'http://127.0.0.1:8000' + course.thumbnail" alt="Course Thumbnail"
            width="200" />
        <p class="course-description">{{ course.description }}</p>
        <p class="course-price">💰 Price: {{ course.price }} Taka</p>

        <h3 class="module-list-title">📖 Module List</h3>
        <div v-for="module in modules" :key="module.id" class="module-item">
            <router-link :to="`/course/${course.id}/module/${module.id}`">
                📘 {{ module.title }} (Module {{ module.module_number }})
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return { course: {}, modules: [] };
    },
    created() {
        const courseId = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/courses/${courseId}`).then(response => {
            this.course = response.data;
        });

        axios.get(`http://127.0.0.1:8000/api/courses/${courseId}/modules`).then(response => {
            this.modules = response.data;
        });
    }
};
</script>

<style scoped>
.course-container {
    text-align: center;
    padding: 2em;
    background-color: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
}

.course-title {
    font-size: 2em;
    font-weight: bold;
    color: #333;
}

.course-thumbnail {
    border-radius: 10px;
    margin: 1em 0;
}

.course-description {
    font-size: 1.1em;
    color: #555;
    margin: 1em 0;
}

.course-price {
    font-size: 1.2em;
    color: #ff6347;
    font-weight: bold;
}

.module-list-title {
    font-size: 1.5em;
    color: #333;
    margin-top: 2em;
}

.module-item {
    font-size: 1.1em;
    margin: 0.5em 0;
}

.module-item a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s ease;
}

.module-item a:hover {
    color: #ff6347;
}
</style>
