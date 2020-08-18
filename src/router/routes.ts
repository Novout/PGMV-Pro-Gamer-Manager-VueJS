import { RouteConfig } from "vue-router";
import BaseRoutes from "./base";
import FPSRoutes from "./fps";

const routes: Array<RouteConfig> = [...BaseRoutes, ...FPSRoutes];

export default routes;
