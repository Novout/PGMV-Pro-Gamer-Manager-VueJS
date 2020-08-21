import { characterFPS } from "./character-i";
import { skillsPoints } from "../owner-character-i";
import { Mutation } from "vuex";

export interface TeamFPS {
  name: string;
  level: number;
  members: Array<characterFPS>;
  skillsPoints: skillsPoints;
  setTeam: Mutation<any>;
}
