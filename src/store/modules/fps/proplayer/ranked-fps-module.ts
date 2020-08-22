import { VuexModule, Module, Mutation } from "vuex-class-modules";
import { TeamFPS } from "./AI/team-i";
import { rankedService } from "../../../../services/fps/proplayer/ranked";
import { TeamFPSSettingsInst } from "./AI/team-abstract";
import { ownerCharacterFPSModule } from "./owner-character-fps-module";
import { characterFPSInst } from "./AI/character-i";

@Module
class RankedFPSModule extends VuexModule {
  myTeam: TeamFPS;
  enemyTeam: TeamFPS;
  isActive = false;
  round: 1;
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
  @Mutation
  createMyTeam() {
    const myTeamInst: TeamFPS = new TeamFPSSettingsInst();
    myTeamInst.name = rankedService.getRandomTeamName();
    myTeamInst.bestMap = "RANDOM";
    myTeamInst.worstMap = "RANDOM";
    myTeamInst.coach = rankedService.getRandomPlayerName();

    const ownerLevel = ownerCharacterFPSModule.level;
    const randomLevel = Math.floor(
      Math.random() * (ownerLevel + 1) + (ownerLevel - 1)
    );
    myTeamInst.level = randomLevel;

    myTeamInst.status = {
      rating: 1.0,
      totalGames: 10,
      totalWins: 6,
      totalLoses: 4,
      captainName:
        myTeamInst.members[
          Math.floor(Math.random() * myTeamInst.members.length)
        ].name
    };
    myTeamInst.members = [
      this.createNPCPlayer(),
      this.createNPCPlayer(),
      this.createNPCPlayer(),
      this.createNPCPlayer()
    ];

    this.myTeam = myTeamInst;
  }
  @Mutation
  createEnemyTeam() {
    const enemyTeam: TeamFPS = new TeamFPSSettingsInst();
    enemyTeam.name = rankedService.getRandomTeamName();
    enemyTeam.bestMap = "RANDOM";
    enemyTeam.worstMap = "RANDOM";
    enemyTeam.coach = rankedService.getRandomPlayerName();

    const ownerLevel = ownerCharacterFPSModule.level;
    const randomLevel = Math.floor(
      Math.random() * (ownerLevel + 1) + (ownerLevel - 1)
    );
    enemyTeam.level = randomLevel;

    enemyTeam.status = {
      rating: 1.0,
      totalGames: 10,
      totalWins: 6,
      totalLoses: 4,
      captainName:
        enemyTeam.members[Math.floor(Math.random() * enemyTeam.members.length)]
          .name
    };
    enemyTeam.members = [
      this.createNPCPlayer(),
      this.createNPCPlayer(),
      this.createNPCPlayer(),
      this.createNPCPlayer(),
      this.createNPCPlayer()
    ];

    this.enemyTeam = enemyTeam;
  }
  @Mutation
  createTeams() {
    this.createEnemyTeam();
    this.createMyTeam();
  }
  @Mutation
  startGame() {
    this.createTeams();
  }
}

import store from "../../../index";
export const rankedFPSModule = new RankedFPSModule({
  store,
  name: "FPSRanked"
});
