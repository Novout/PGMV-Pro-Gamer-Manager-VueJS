const FPSProPlayerMain = () => ({
  component: import(
    /* webpackChunkName: "fps" */ "../views/fps/proplayer/FPSProPlayerMain.vue"
  )
});

const FPSProPlayerRanked = () => ({
  component: import(
    /* webpackChunkName: "fps" */ "../views/fps/proplayer/FPSProPlayerRanked.vue"
  )
});

export default [
  {
    path: "/fpsproplayerranked",
    name: "FPSProPlayerMain",
    component: FPSProPlayerRanked
  },
  {
    path: "/fpsproplayer",
    name: "FPSProPlayerRanked",
    component: FPSProPlayerMain
  }
];
