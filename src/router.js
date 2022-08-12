import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/Intro")
  },
  {
    path: "/first",
    component: () => import("./views/First")
  },
  {
    path: "/login",
    component: () => import("./views/login/Login")
  },
  {
    path: "/id-find",
    component: () => import("./views/login/IdFind")
  },
  {
    path: "/id-find-result",
    component: () => import("./views/login/IdFindResult")
  },
  {
    path: "/password-reset-1",
    component: () => import("./views/login/PasswordReset1")
  },
  {
    path: "/password-reset-2",
    component: () => import("./views/login/PasswordReset2")
  },
  {
    path: "/password-reset-result",
    component: () => import("./views/login/PasswordResetResult")
  },
  {
    path: "/service-agree",
    component: () => import("./views/login/ServiceAgree")
  },
  {
    path: "/join-step-1",
    component: () => import("./views/join/JoinStep1")
  },
  {
    path: "/join-step-2",
    component: () => import("./views/join/JoinStep2")
  },
  {
    path: "/join-step-3",
    component: () => import("./views/join/JoinStep3")
  },
  {
    path: "/join-complete",
    component: () => import("./views/join/JoinComplete")
  },
  {
    path: "/profile-setting",
    component: () => import("./views/join/ProfileSetting")
  },
  {
    path: "/code-authentication",
    component: () => import("./views/join/CodeAuthentication")
  },
  {
    path: "/audio-setting",
    component: () => import("./views/meditation/AudioSetting")
  },
  {
    path: "/first-feeling",
    component: () => import("./views/meditation/FirstFeeling")
  },
  {
    path: "/uncomfortable-reason",
    component: () => import("./views/meditation/UncomfortableReason")
  },
  {
    path: "/grow-up",
    component: () => import("./views/meditation/GrowUp")
  },
  {
    path: "/topick-list",
    component: () => import("./views/meditation/TopickList")
  },
  {
    path: "/day5-list",
    component: () => import("./views/meditation/Day5List")
  },
  {
    path: "/review-write",
    component: () => import("./views/meditation/ReviewWrite")
  },
  {
    path: "/realize-write",
    component: () => import("./views/meditation/RealizeWrite")
  },
  {
    path: "/home",
    component: () => import("./views/Home")
  },
  {
    path: "/program",
    component: () => import("./views/program/Program")
  },
  {
    path: "/grow-seed",
    component: () => import("./views/program/GrowSeed")
  },
  {
    path: "/my-history-list",
    component: () => import("./views/my/MyHistoryList")
  },
  {
    path: "/my-history-detail",
    component: () => import("./views/my/MyHistoryDetail")
  },
  {
    path: "/my-history-empty",
    component: () => import("./views/my/MyHistoryEmpty")
  },
  {
    path: "/leave",
    component: () => import("./views/my/Leave")
  },
  {
    path: "/my-home",
    component: () => import("./views/my/MyHome")
  },
  {
    path: "/my-info",
    component: () => import("./views/my/MyInfo")
  },
  {
    path: "/my-info-edit",
    component: () => import("./views/my/MyInfoEdit")
  },
  {
    path: "/my-code-edit",
    component: () => import("./views/my/MyCodeEdit")
  },
  {
    path: "/my-code-destroy",
    component: () => import("./views/my/MyCodeDestroy")
  },
  {
    path: "/my-password-reset",
    component: () => import("./views/my/MyPasswordReset")
  },
  {
    path: "/terms",
    component: () => import("./views/util/Terms")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
