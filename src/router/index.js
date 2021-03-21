import { createWebHistory, createRouter } from "vue-router";
import Front from "@/views/Front";

const routes = [
  {
    path: "/",
    name: "Front",
    component: Front,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;