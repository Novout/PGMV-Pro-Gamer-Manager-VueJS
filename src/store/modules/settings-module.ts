import { VuexModule, Module, Mutation } from "vuex-class-modules";

@Module
class SettingsModule extends VuexModule {
  windowMainResolution = ["maximize"];
  modeGame = "";

  get getWindowMainResolution() {
    return this.windowMainResolution;
  }

  get getModeGame() {
    return this.modeGame;
  }

  @Mutation
  setWindowMainResolution(windowMainResolution: Array<string>) {
    this.windowMainResolution = windowMainResolution;
  }

  @Mutation
  setModeGame(modeGame: string) {
    this.modeGame = modeGame;
  }

  /*
  @Action
  async loadUser() {
    const user = await fetchUser();
    this.setFirstName(user.firstName);
    this.setLastName(user.lastName);
  }
  */
}

import store from "../index";
export const settingsModule = new SettingsModule({ store, name: "settings" });
