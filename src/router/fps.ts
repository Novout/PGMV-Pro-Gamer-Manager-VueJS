const FPSProPlayerMain = () => ({
  component: import(
    /* webpackChunkName: "fps" */ "../views/fps/proplayer/FPSProPlayerMain.vue"
  )
});

export default [
  {
    path: "/fpsproplayer",
    name: "FPSProPlayerMain",
    component: FPSProPlayerMain
  }
];
