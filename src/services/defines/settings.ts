import { readFileSync } from "fs";
import { parse } from "@iarna/toml";

class SettingsOptionService {
  getOptions() {
    const { options } = parse(
      readFileSync("./src/data/defines/settings.toml", { encoding: "utf-8" })
    );

    return Object.values(options);
  }
}

export const settingsOptionService = new SettingsOptionService();
