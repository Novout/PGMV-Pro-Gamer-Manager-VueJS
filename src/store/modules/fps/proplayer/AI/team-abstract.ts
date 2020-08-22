import { VuexModule } from "vuex-class-modules";
import { TeamFPS } from "./team-i";
import { characterFPS } from "./character-i";

export abstract class TeamFPSSettings extends VuexModule implements TeamFPS {
  name = "";
  level = 1;
  members: Array<characterFPS> = [];
  coach = "";
  bestMap = "";
  worstMap = "";
  status: {
    rating: 0.0;
    totalGames: 0;
    totalWins: 0;
    totalLoses: 0;
    captainName: "";
  };
}
