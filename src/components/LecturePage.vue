<template>
    <div class="lecture-container">
        <!-- Left: Video Player -->
        <div class="video-player">
            <h3>{{ selectedLecture.title || 'Select a Lecture' }}</h3>
            <iframe v-if="selectedLecture.video_url" :src="getEmbedUrl(selectedLecture.video_url)" frameborder="0"
                allowfullscreen></iframe>
            <p v-else>Please select a lecture to play the video.</p>
        </div>

        <!-- Right: Lecture List -->
        <div class="lecture-list">
            <h2>Lecture List</h2>
            <ul>
                <li v-for="lecture in lectures" :key="lecture.id" @click="selectLecture(lecture)"
                    :class="{ active: selectedLecture.id === lecture.id }">
                    🎥 {{ lecture.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ["courseId", "moduleId"],
    data() {
        return {
            lectures: [],
            selectedLecture: {}
        };
    },
    created() {
        this.fetchLectures();
    },
    methods: {
        async fetchLectures() {
            try {
                const response = await axios.get(`http://localhost:8000/api/modules/${this.moduleId}/lectures`);
                this.lectures = response.data;

                // Auto-select first lecture if available
                if (this.lectures.length > 0) {
                    this.selectedLecture = this.lectures[0];
                }
            } catch (error) {
                console.error("Error fetching lectures:", error.response?.data);
            }
        },
        selectLecture(lecture) {
            this.selectedLecture = lecture;
        },
        getEmbedUrl(url) {
            try {
                if (!url) return "";

                const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/;
                const match = url.match(youtubeRegex);

                if (match && match[1]) {
                    return `https://www.youtube.com/embed/${match[1]}`;
                }

                return url; // Keep original URL if not a valid YouTube link
            } catch (error) {
                console.error("Error processing video URL:", error);
                return "";
            }
        }
    }
};
</script>

<style scoped>
.lecture-container {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
}

.video-player {
    flex: 2;
    text-align: center;
}

.video-player iframe {
    width: 100%;
    height: 400px;
    border-radius: 10px;
}

.lecture-list {
    flex: 1;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
}

.lecture-list ul {
    list-style: none;
    padding: 0;
}

.lecture-list li {
    cursor: pointer;
    padding: 10px;
    margin: 5px 0;
    background: white;
    border-radius: 5px;
    transition: 0.3s;
}

.lecture-list li:hover,
.lecture-list li.active {
    background: #007bff;
    color: white;
}
</style>
