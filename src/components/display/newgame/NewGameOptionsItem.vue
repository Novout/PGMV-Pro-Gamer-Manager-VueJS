<template>
  <article>
    <h1>{{ title }}</h1>
    <p align="center">{{ desc }}</p>
    <button @click.prevent="toRouterOption">{{ buttonOwner }}</button>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { settingsModule } from "@/store/modules/settings-module";

@Component
export default class NewGameOptionsItem extends Vue {
  @Prop(String) readonly title: string;
  @Prop(String) readonly desc: string;
  @Prop(String) readonly to: string;

  get buttonOwner() {
    return `Escolher ${this.title}`;
  }

  public toRouterOption() {
    settingsModule.setModeGame(this.to === "caracterbuild" ? "proplayer" : "manager");
    this.$router.push(`/${this.to}`);
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  width: 30vw;
  height: 50vh;
  padding: var(--padding-2);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;
}

article h1 {
  font-size: 2.5rem;
}

article p {
  font-family: "Poppins Light";
  width: 15rem;
}

article:hover {
  transform: translateY(-25px) translateX(25px);
}

button {
  font-family: "Poppins Light";
  background: var(--background-secondary);
  color: white;
  padding: var(--padding-1) var(--padding-2);
  border: none;
  cursor: pointer;
}
</style>
