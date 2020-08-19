<template>
  <aside>
    <section v-if="getInTeam">{{ getTeamName }}</section>
    <section v-else>
      <p>Você ainda não está em um time :(</p>
    </section>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ownerCharacterFPSModule } from "@/store/modules/fps/proplayer/owner-character-fps-module";
@Component
export default class FPSProPlayerMainAside extends Vue {
  get getInTeam() {
    return ownerCharacterFPSModule.inTeam;
  }

  get getTeamName() {
    return ownerCharacterFPSModule.teamName;
  }
}
</script>

<style scoped>
aside {
  display: flex;
  flex-flow: column nowrap;
  place-content: center space-between;
  height: 90vh;
  width: 40vw;
  background: var(--background-tertiary);
}

aside > section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
}

aside > section > p {
  font-family: "Poppins Light";
  color: var(--text-tertiary);
}
</style>
