import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/Home",
    name: "Home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/course/:id",
    alias: "/",
    name: "CourseDetails",
    component: () => import("./components/CourseDetails.vue"),
  },
  {
    path: "/course/:courseId/module/:moduleId",
    alias: "/",
    name: "LecturePage",
    component: () => import("./components/LecturePage.vue"),
    props: true
  },
 ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
