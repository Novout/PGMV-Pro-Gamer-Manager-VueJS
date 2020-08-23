<template>
  <header>
    <p>Rodada: {{ getRound }}</p>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { rankedFPSModule } from "@/store/modules/fps/proplayer/ranked-fps-module";

@Component
export default class FPSProPlayerRankedHeader extends Vue {
  get getRound() {
    return rankedFPSModule.round;
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background: var(--background-tertiary);
}

header > p {
  color: var(--text-tertiary);
}
</style>
