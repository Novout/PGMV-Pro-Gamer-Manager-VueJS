<template>
  <component :is="formularyComponent"></component>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { settingsModule } from "@/store/modules/settings-module";

const NewGameCharacterOne = () => ({
  component: import("@/components/display/newgame/NewGameCharacterOne.vue"),
  loading: import("@/components/display/newgame/NewGameCharacterOne.vue"),
  error: import("@/components/display/newgame/NewGameCharacterOne.vue"),
  delay: 200,
  timeout: 3000
});

const NewGameCharacterTwo = () => ({
  component: import("@/components/display/newgame/NewGameCharacterTwo.vue"),
  loading: import("@/components/display/newgame/NewGameCharacterTwo.vue"),
  error: import("@/components/display/newgame/NewGameCharacterTwo.vue"),
  delay: 200,
  timeout: 3000
});

@Component
export default class NewGameCharacterDisplay extends Vue {
  get formularyCount() {
    return settingsModule.newPlayerAccount;
  }

  get formularyComponent() {
    if (this.formularyCount === 0) return NewGameCharacterOne;
    if (this.formularyCount === 1) return NewGameCharacterTwo;
    return NewGameCharacterOne;
  }
}
</script>
