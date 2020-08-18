import { readFileSync } from "fs";
import { parse } from "@iarna/toml";

class EnvService {
  getBaseEnv() {
    const env = parse(readFileSync("./env.toml", { encoding: "utf-8" }));

    return env;
  }
}

export const envService = new EnvService();
