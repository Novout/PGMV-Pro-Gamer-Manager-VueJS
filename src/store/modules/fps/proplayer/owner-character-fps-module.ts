import { Module, Mutation } from "vuex-class-modules";
import { ProPlayerSettings } from "./base/proplayer-abstract";
import {
  ownerCharacterFPS,
  ownerCharacterFPSInitial,
  perks
} from "./owner-character-i";

@Module
class OwnerCharacterFPSModule extends ProPlayerSettings {
  limitTrainingPoints = 2;
  perks: perks;
  // @ts-ignore
  classGameplay: string | undefined = "FPS";
  typeGameplay: string | undefined = "Awper";

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
