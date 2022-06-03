import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimesView from "../views/ArtesVisuaisView.vue";
import JogadoresView from "../views/ArtesCenicasView.vue";
import ArtesVisuaisViewVue from "../views/ArtesVisuaisView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/artesvisuais",
      name: "artesvisuais",
      component: ArtesVisuaisViewVue,
    },

    {
      path: "/artescênicas",
      name: "artescenicas",
      component: ArtesVisuaisViewVue,
    },
  ],
});

export default router;
