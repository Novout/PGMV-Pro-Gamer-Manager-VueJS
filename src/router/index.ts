import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "InitialDisplay",
    component: () =>
      import(/* webpackChunkName: "initial" */ "../views/InitialDisplay.vue")
  },
  {
    path: "/newgame",
    name: "NewGameDisplay",
    component: () =>
      import(/* webpackChunkName: "newgame" */ "../views/NewGameDisplay.vue")
  },
  {
    path: "/characterbuild",
    name: "NewGameCharacterDisplay",
    component: () =>
      import(
        /* webpackChunkName: "newgame" */ "../views/NewGameCharacterDisplay.vue"
      )
  },
  {
    path: "/options",
    name: "MenuOptions",
    component: () =>
      import(/* webpackChunkName: "options" */ "../views/MenuOptions.vue")
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Page404.vue")
  },
  { path: "*", redirect: "/404" }
];

const router: VueRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
