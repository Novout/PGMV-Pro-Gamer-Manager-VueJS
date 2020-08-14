import { VuexModule, Module, Mutation } from "vuex-class-modules";

@Module
class SettingsModule extends VuexModule {
  windowMainResolution = ["maximize"];

  get getWindowMainResolution() {
    return this.windowMainResolution;
  }

  @Mutation
  setWindowMainResolution(windowMainResolution: Array<string>) {
    this.windowMainResolution = windowMainResolution;
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
