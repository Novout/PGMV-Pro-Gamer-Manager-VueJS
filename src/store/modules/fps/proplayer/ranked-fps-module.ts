import { VuexModule, Module, Mutation } from "vuex-class-modules";
import { TeamFPS } from "./AI/team-i";
import { rankedService } from "../../../../services/fps/proplayer/ranked";
import { ownerCharacterFPSModule } from "./owner-character-fps-module";
import { characterFPSInst } from "./AI/character-i";

@Module
class RankedFPSModule extends VuexModule {
  myTeam: TeamFPS = this.createMyTeam();
  enemyTeam: TeamFPS = this.createEnemyTeam();
  isActive = false;
  round = 1;
  roundTime = "00:00";
  roundTimeCount = 0;
  roundList = [];
  createNPCPlayer() {
    const playerInst = new characterFPSInst();
    playerInst.name = rankedService.getRandomPlayerName();
    playerInst.age = rankedService.getRandomPlayerAge();

    const ownerLevel = ownerCharacterFPSModule.level;
    const randomLevel = Math.floor(
      Math.random() * (ownerLevel + 1) + (ownerLevel - 1)
    );
    playerInst.level = randomLevel;

    playerInst.typeGameplay = rankedService.getRandomPlayerTypeGame();
    playerInst.skillsPoints = rankedService.getRandomSkillsPoints(ownerLevel);

    return playerInst;
  }
  createMyTeam() {
    const ownerLevel = ownerCharacterFPSModule.level;
    const randomLevel = Math.floor(
      Math.random() * (ownerLevel + 2) + ownerLevel
    );
    const myTeam = {
      name: rankedService.getRandomTeamName(),
      bestMap: "RANDOM",
      worstMap: "RANDOM",
      coach: rankedService.getRandomPlayerName(),
      level: randomLevel,
      members: [
        this.createNPCPlayer(),
        this.createNPCPlayer(),
        this.createNPCPlayer(),
        this.createNPCPlayer()
      ],
      status: {
        rating: 1.0,
        totalGames: 10,
        totalWins: 6,
        totalLoses: 4,
        captainName: "TEST"
      }
    };

    return myTeam;
  }
  createEnemyTeam() {
    const ownerLevel = ownerCharacterFPSModule.level;
    const randomLevel = Math.floor(
      Math.random() * (ownerLevel + 2) + ownerLevel
    );
    const enemyTeam = {
      name: rankedService.getRandomTeamName(),
      bestMap: "RANDOM",
      worstMap: "RANDOM",
      coach: rankedService.getRandomPlayerName(),
      level: randomLevel,
      members: [
        this.createNPCPlayer(),
        this.createNPCPlayer(),
        this.createNPCPlayer(),
        this.createNPCPlayer(),
        this.createNPCPlayer()
      ],
      status: {
        rating: 1.0,
        totalGames: 10,
        totalWins: 6,
        totalLoses: 4,
        captainName: "TEST"
      }
    };

    return enemyTeam;
  }
  @Mutation
  startGame() {
    console.log("A");
  }
  @Mutation
  resetRankedTeams() {
    this.myTeam = this.createMyTeam();
    this.enemyTeam = this.createEnemyTeam();
  }
  @Mutation
  newRound() {
    this.round++;
  }
  @Mutation
  setRoundTime() {
    const position = this.roundTimeCount;
    this.roundTime = this.roundList[position];
  }
}

import store from "../../../index";
export const rankedFPSModule = new RankedFPSModule({
  store,
  name: "FPSRanked"
});
