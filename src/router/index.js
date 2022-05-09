import { createRouter, createWebHistory } from "vue-router";

import WelcomeView from "../views/WelcomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import DashboardView from "../views/DashboardUserView.vue";
import DashboardCoachView from "../views/DashboardCoachView.vue";
import CoachingView from "../views/CoachingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: WelcomeView
    },
    {
      path: '/category',
      name: 'category-view',
      component: CategoryView
    },
    {
      path: '/:token/:name',
      name: 'welcome-view-token',
      component: WelcomeView
    },
    {
      path: "/dashboard/user",
      name: "dashboard-view",
      component: DashboardView,
    },
    {
      path: "/dashboard/coach",
      name: "dashboard-coach-view",
      component: DashboardCoachView
    },
    {
      path: "/coaching/",
      name: 'coaching-view',
      component: CoachingView
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token") == null) {
    if (to.name !== "welcome-view") {
      next({
        name: "welcome-view",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
