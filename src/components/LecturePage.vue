<template>
    <div class="lecture-container">
        <!-- Left: Video Player -->
        <div class="video-player">
            <h3>{{ selectedLecture.title || 'Select a Lecture' }}</h3>
            <iframe v-if="selectedLecture.video_url" :src="getEmbedUrl(selectedLecture.video_url)" frameborder="0"
                allowfullscreen></iframe>
            <p v-else>Please select a lecture to play the video.</p>

            <!-- PDF Download Option -->
            <div v-if="selectedLecture.pdf_notes" class="pdf-download">
                <a :href="getPdfUrl(selectedLecture.pdf_notes)" target="_blank" download>
                    📄 Download PDF Notes
                </a>
            </div>
        </div>

        <!-- Right: Lecture List with Search -->
        <div class="lecture-list">
            <h2>Lecture List</h2>
            <!-- Search Bar -->
            <input type="text" v-model="searchQuery" placeholder="Search lectures..." class="search-bar" />

            <ul>
                <li v-for="lecture in filteredLectures" :key="lecture.id" @click="selectLecture(lecture)"
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
            selectedLecture: {},
            searchQuery: "" // New search filter
        };
    },
    computed: {
        filteredLectures() {
            return this.lectures.filter(lecture =>
                lecture.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    created() {
        this.fetchLectures();
    },
    methods: {
        async fetchLectures() {
            try {
                const response = await axios.get(`https://weeblecode.com/lms/public/api/modules/${this.moduleId}/lectures`);
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
        },
        getPdfUrl(pdfPath) {
            return `https://weeblecode.com/lms/storage/app/public/${pdfPath}`;
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
    flex-wrap: wrap;
    /* Ensures responsive stacking */
}

.video-player {
    flex: 3;
    min-width: 60%;
    text-align: center;
}

.video-player iframe {
    width: 100%;
    height: 450px;
    border-radius: 10px;
}

.pdf-download {
    margin-top: 15px;
}

.pdf-download a {
    display: inline-block;
    padding: 10px;
    background: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.pdf-download a:hover {
    background: #218838;
}

.lecture-list {
    flex: 1;
    min-width: 250px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
}

/* Search Bar */
.search-bar {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

/* Responsive Adjustments */
@media (max-width: 768px) {
    .lecture-container {
        flex-direction: column;
        /* Stack items on smaller screens */
    }

    .video-player,
    .lecture-list {
        min-width: 100%;
    }
}
</style>
