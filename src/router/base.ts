const InitialDisplay = () => ({
  component: import(
    /* webpackChunkName: "display" */ "../views/InitialDisplay.vue"
  ),
  loading: import(
    /* webpackChunkName: "loading" */ "../components/loading/InitialDisplayLoading.vue"
  ),
  error: import(
    /* webpackChunkName: "error" */ "../components/error/InitialDisplayError.vue"
  ),
  delay: 50,
  timeout: 5000
});

const NewGameDisplay = () => ({
  component: import(
    /* webpackChunkName: "display" */ "../views/NewGameDisplay.vue"
  )
});

const NewGameCharacterDisplay = () => ({
  component: import(
    /* webpackChunkName: "display" */ "../views/NewGameCharacterDisplay.vue"
  )
});

const MenuOptions = () => ({
  component: import(
    /* webpackChunkName: "display" */ "../views/MenuOptions.vue"
  )
});

const Page404 = () => ({
  component: import(/* webpackChunkName: "display" */ "../views/Page404.vue")
});

export default [
  {
    path: "/",
    name: "InitialDisplay",
    component: InitialDisplay
  },
  {
    path: "/newgame",
    name: "NewGameDisplay",
    component: NewGameDisplay
  },
  {
    path: "/characterbuild",
    name: "NewGameCharacterDisplay",
    component: NewGameCharacterDisplay
  },
  {
    path: "/options",
    name: "MenuOptions",
    component: MenuOptions
  },
  {
    path: "/404",
    component: Page404
  },
  { path: "*", redirect: "/404" }
];
