import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/Intro")
  },
  {
    path: "/login",
    component: () => import("./views/Login")
  }
  /* {
    path: "/join",
    component: () => import("./views/Join")
  },
  {
    path: "/join-complete",
    component: () => import("./views/JoinComplete")
  } */
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
