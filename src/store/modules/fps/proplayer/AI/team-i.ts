import { characterFPS } from "./character-i";

export interface TeamFPS {
  name: string;
  level: number;
  members: Array<characterFPS>;
}
