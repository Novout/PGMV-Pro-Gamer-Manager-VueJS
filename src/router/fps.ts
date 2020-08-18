export default [
  {
    path: "/fpsproplayer",
    name: "FPSProPlayerMain",
    component: () =>
      import(
        /* webpackChunkName: "fps" */ "../views/fps/proplayer/FPSProPlayerMain.vue"
      )
  }
];
