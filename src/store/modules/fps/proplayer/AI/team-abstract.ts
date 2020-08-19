import { VuexModule } from "vuex-class-modules";
import { TeamFPS } from "./team-i";

export abstract class TeamSettings extends VuexModule implements TeamFPS {}
