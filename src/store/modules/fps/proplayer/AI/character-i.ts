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

interface skillsPoints {
  playstyle: playstyle;
  focus: focus;
  knowledge: knowledge;
}

export interface perks {}

export default interface character {
  name: string;
  age: number;
  level: number;
  typeGameplay: string;
  skillsPoints: skillsPoints;
}

export interface characterFPS extends character {}

export class characterFPSInst implements characterFPS {
  name: string;
  age: number;
  level: number;
  typeGameplay: string;
  skillsPoints: skillsPoints;
}
