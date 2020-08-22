import { readFileSync } from "fs";
import { parse } from "@iarna/toml";

class RankedService {
  getRandomPlayerName() {
    const { GENERICS }: any = parse(
      readFileSync("./src/data/defines/members/names.toml", {
        encoding: "utf-8"
      })
    );

    const position = Math.floor(Math.random() * GENERICS.length);

    const name = GENERICS[position];

    return name;
  }

  getRandomPlayerAge() {
    return Math.floor(Math.random() * 50 + 16);
  }

  getRandomPlayerTypeGame() {
    const { defineTypeGameplay }: any = parse(
      readFileSync("./src/data/defines/newGameProPlayer.toml", {
        encoding: "utf-8"
      })
    );

    const position = Math.floor(Math.random() * 4);
    const FPS = defineTypeGameplay["FPS"];
    return FPS[position];
  }

  getRandomSkillsPoints(level: number) {
    const levelString = level.toString();
    const levelFloat = parseFloat(levelString);

    return {
      playstyle: {
        aim: levelFloat,
        quickness: levelFloat,
        offensive: levelFloat,
        defensive: levelFloat
      },
      focus: {
        communication: levelFloat,
        creativity: levelFloat,
        decisions: levelFloat,
        teamwork: levelFloat
      },
      knowledge: {
        gamesense: levelFloat,
        maps: levelFloat,
        utility: levelFloat,
        ecoManagement: levelFloat
      }
    };
  }

  getRandomTeamNames() {
    const { GENERICS }: any = parse(
      readFileSync("./src/data/defines/teams/names.toml", {
        encoding: "utf-8"
      })
    );

    return Object.values(GENERICS);
  }

  getRandomTeamName() {
    const { GENERICS }: any = parse(
      readFileSync("./src/data/defines/teams/names.toml", {
        encoding: "utf-8"
      })
    );

    const position = Math.floor(Math.random() * GENERICS.length);

    const name = GENERICS[position];

    return name;
  }
}

export const rankedService = new RankedService();
