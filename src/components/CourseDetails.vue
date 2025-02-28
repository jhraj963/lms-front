<template>
    <div>
        <h2>{{ course.title }}</h2>
        <img class="img-fluid" :src="'http://127.0.0.1:8000' + course.thumbnail" alt="Course Thumbnail" width="200" />
        <p>{{ course.description }}</p>
        <p>💰 দাম: {{ course.price }} টাকা</p>

        <h3>📖 মডিউল তালিকা</h3>
        <div v-for="module in modules" :key="module.id">
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
