import { characterFPS } from "./character-i";
import { Mutation } from "vuex";

interface status {
  rating: number;
  totalGames: number;
  totalWins: number;
  totalLoses: number;
  captainName: string;
}

export interface TeamFPS {
  name: string;
  level: number;
  members: Array<characterFPS>;
  coach: string;
  bestMap: string;
  worstMap: string;
  status: status;
  setTeam?: Mutation<any>;
  setLevel?: Mutation<any>;
  removeMember?: Mutation<any>;
  addMember?: Mutation<any>;
}
