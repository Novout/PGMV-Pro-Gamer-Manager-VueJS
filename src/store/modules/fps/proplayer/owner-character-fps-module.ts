import { Module, Mutation } from "vuex-class-modules";
import { ProPlayerFPSSettings } from "./base/proplayer-abstract";
import {
  ownerCharacterFPS,
  ownerCharacterFPSInitial,
  perks,
  perkSlot
} from "./owner-character-i";

@Module
class OwnerCharacterFPSModule extends ProPlayerFPSSettings {
  limitTrainingPoints = 2;
  perks: perks;
  // @ts-ignore
  classGameplay: string | undefined = "FPS";
  typeGameplay: string | undefined = "Awper";
  inTeam = false;
  teamName: string | undefined = undefined;
  perksSlot: Array<perkSlot> = [
    {
      name: "",
      active: false
    },
    {
      name: "",
      active: false
    },
    {
      name: "",
      active: false
    },
    {
      name: "",
      active: false
    }
  ];

  @Mutation
  setPlayer({
    name,
    age,
    level,
    classGameplay,
    availableSkillPoints,
    skillsPoints,
    trainingPoints,
    limitTrainingPoints,
    perks
  }: ownerCharacterFPS) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.classGameplay = classGameplay;
    this.availableSkillPoints = availableSkillPoints;
    this.skillsPoints = skillsPoints;
    this.trainingPoints = trainingPoints;
    this.limitTrainingPoints = limitTrainingPoints;
    this.perks = perks;
  }

  @Mutation
  setInitialFormulary({ name, age, typeGameplay }: ownerCharacterFPSInitial) {
    this.name = name;
    this.age = age;
    this.typeGameplay = typeGameplay;
  }

  @Mutation
  setSecondaryFormulary({ name, age, typeGameplay }: ownerCharacterFPSInitial) {
    this.name = name;
    this.age = age;
    this.typeGameplay = typeGameplay;
    this.resetSkiilsPoints();
  }

  @Mutation
  resetSkiilsPoints() {
    this.skillsPoints = {
      playstyle: {
        aim: 1.0,
        quickness: 1.0,
        offensive: 1.0,
        defensive: 1.0
      },
      focus: {
        communication: 1.0,
        creativity: 1.0,
        decisions: 1.0,
        teamwork: 1.0
      },
      knowledge: {
        gamesense: 1.0,
        maps: 1.0,
        utility: 1.0,
        ecoManagement: 1.0
      }
    };
  }

  @Mutation
  setTeam(teamName: string) {
    this.inTeam = true;
    this.teamName = teamName;
  }

  @Mutation
  leaveTeam() {
    this.inTeam = false;
    this.teamName = undefined;
  }

  @Mutation
  upLevel() {
    this.level++;
    /*
    if(this.perks.perkOffPoints.available) { 
      this.availableSkillPoints += this.perks.perkOffPoints.value 
    } else { 
      this.availableSkillPoints++;
    };
    */
    this.availableSkillPoints++;

    /*
    if(this.perks.perkTraining.available) {
      this.trainingPoints = ++this.limitTrainingPoints;
    }
    */

    this.trainingPoints = this.limitTrainingPoints;
  }
}

import store from "../../../index";
export const ownerCharacterFPSModule = new OwnerCharacterFPSModule({
  store,
  name: "ownerFPSPlayer"
});
