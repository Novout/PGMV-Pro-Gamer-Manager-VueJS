import { Module, Mutation } from "vuex-class-modules";
import { TeamFPSSettings } from "./AI/team-abstract";

@Module
class TeamFPSModule extends TeamFPSSettings {
  @Mutation
  setTeam() {
    console.log("test");
  }

  @Mutation
  setLevel() {
    console.log("test");
  }

  @Mutation
  removeMember() {
    console.log("test");
  }

  @Mutation
  addMember() {
    console.log("test");
  }
}

import store from "../../../index";
export const teamFPSModule = new TeamFPSModule({
  store,
  name: "FPSTeam"
});
