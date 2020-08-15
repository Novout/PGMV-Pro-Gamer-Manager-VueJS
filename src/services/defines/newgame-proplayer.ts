import { readFileSync } from "fs";
import { parse } from "@iarna/toml";

class DataNewGameProPlayer {
  getDefineTypeGameplay() {
    const newGameProPlayer = parse(
      readFileSync("./src/data/defines/newGameProPlayer.toml", {
        encoding: "utf-8"
      })
    );

    return newGameProPlayer;
  }
}

export const dataNewGameProPlayer = new DataNewGameProPlayer();
