interface playstyle {
  aim?: number;
  quickness?: number;
  offensive?: number;
  defensive?: number;
}

interface focus {
  communication?: number;
  creativity?: number;
  decisions?: number;
  teamwork?: number;
}

interface knowledge {
  gamesense?: number;
  maps?: number;
  utility?: number;
  ecoManagement?: number;
}

export interface skillsPoints {
  playstyle: playstyle;
  focus: focus;
  knowledge: knowledge;
}

export interface perks {}

export default interface ownerCharacter {
  name: string;
  age: number;
  level: number;
  classGameplay: string;
  availableSkillPoints: number;
  trainingPoints: number;
  skillsPoints: skillsPoints;
}

export interface ownerCharacterFPS extends ownerCharacter {
  limitTrainingPoints: number;
  perks: perks;
}
