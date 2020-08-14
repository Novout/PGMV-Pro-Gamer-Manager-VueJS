import ownerCharacter, { skillsPoints } from "../owner-character-i";
import { Mutation, VuexModule } from "vuex-class-modules";

export abstract class ProPlayerSettings extends VuexModule
  implements ownerCharacter {
  name: string;
  age: number;
  level = 1;
  classGameplay: string;
  availableSkillPoints = 0;
  trainingPoints = 0;
  skillsPoints: skillsPoints;
  upPlayer: Function;

  @Mutation
  setPlayer({
    name,
    age,
    level,
    classGameplay,
    availableSkillPoints,
    skillsPoints,
    trainingPoints
  }: ownerCharacter) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.classGameplay = classGameplay;
    this.availableSkillPoints = availableSkillPoints;
    this.skillsPoints = skillsPoints;
    this.trainingPoints = trainingPoints;
  }

  @Mutation
  upLevel() {
    this.level++;
    this.availableSkillPoints++;
    this.trainingPoints += 2;
  }
}
