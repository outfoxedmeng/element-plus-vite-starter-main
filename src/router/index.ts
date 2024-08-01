import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import TailwindView from "@/views/TailwindView.vue";
import ViteTest from "~/views/ViteTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/css",
      name: "css",
      component: TailwindView,
    },
    {
      path: "/vite",
      name: "vite",
      component: ViteTest,
    },
  ],
});

export default router;
