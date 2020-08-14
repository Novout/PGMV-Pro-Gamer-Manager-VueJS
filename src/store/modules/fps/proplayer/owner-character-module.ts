import { Module, Mutation } from "vuex-class-modules";
import { ProPlayerSettings } from "./base/proplayer-abstract";
import { ownerCharacterFPS, perks } from "./owner-character-i";

@Module
class ownerCharacterModule extends ProPlayerSettings {
  limitTrainingPoints = 2;
  perks: perks;

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
export const settingsModule = new ownerCharacterModule({
  store,
  name: "ownerFPSPlayer"
});
