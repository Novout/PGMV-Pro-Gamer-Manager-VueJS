export interface playstyle {
  aim?: number;
  quickness?: number;
  offensive?: number;
  defensive?: number;
}

export interface focus {
  communication?: number;
  creativity?: number;
  decisions?: number;
  teamwork?: number;
}

export interface knowledge {
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

export interface perkSlot {
  name: string;
  active: boolean;
}

export interface ownerCharacterFPS extends ownerCharacter {
  limitTrainingPoints: number;
  perks: perks;
  perksSlot: [perkSlot, perkSlot, perkSlot, perkSlot];
}

export interface ownerCharacterFPSInitial {
  name: string | undefined;
  age: number | undefined;
  typeGameplay: string | undefined;
}

export default interface ownerCharacter {
  name: string;
  age: number;
  level: number;
  classGameplay: string;
  typeGameplay: string;
  availableSkillPoints: number;
  trainingPoints: number;
  skillsPoints: skillsPoints;
}
