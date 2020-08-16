export default [
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
