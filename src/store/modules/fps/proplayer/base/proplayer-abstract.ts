import ownerCharacter, {
  ownerCharacterFPS,
  skillsPoints
} from "../owner-character-i";
import { Mutation, VuexModule } from "vuex-class-modules";

export abstract class ProPlayerFPSSettings extends VuexModule
  implements ownerCharacterFPS {
  // @ts-ignore
  name: string | undefined;
  // @ts-ignore
  age: number | undefined;
  level = 1;
  classGameplay: string;
  // @ts-ignore
  typeGameplay: string | undefined;
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
    trainingPoints,
    typeGameplay
  }: ownerCharacter) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.classGameplay = classGameplay;
    this.availableSkillPoints = availableSkillPoints;
    this.skillsPoints = skillsPoints;
    this.trainingPoints = trainingPoints;
    this.typeGameplay = typeGameplay;
  }

  @Mutation
  upLevel() {
    this.level++;
    this.availableSkillPoints++;
    this.trainingPoints += 2;
  }
}

export abstract class ProPlayerSettings extends VuexModule
  implements ownerCharacter {
  // @ts-ignore
  name: string | undefined;
  // @ts-ignore
  age: number | undefined;
  level = 1;
  classGameplay: string;
  // @ts-ignore
  typeGameplay: string | undefined;
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
    trainingPoints,
    typeGameplay
  }: ownerCharacter) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.classGameplay = classGameplay;
    this.availableSkillPoints = availableSkillPoints;
    this.skillsPoints = skillsPoints;
    this.trainingPoints = trainingPoints;
    this.typeGameplay = typeGameplay;
  }

  @Mutation
  upLevel() {
    this.level++;
    this.availableSkillPoints++;
    this.trainingPoints += 2;
  }
}
