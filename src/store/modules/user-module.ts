import { VuexModule, Module, Mutation } from "vuex-class-modules";

@Module
class UserModule extends VuexModule {
  // state
  firstName = "Foo";
  lastName = "Bar";

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Mutation
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @Mutation
  setLastName(lastName: string) {
    this.lastName = lastName;
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
export const userModule = new UserModule({ store, name: "user" });
