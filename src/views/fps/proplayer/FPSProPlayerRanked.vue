<template>
  <section id="base">
    <FPSProPlayerRankedHeader />
    <section>
      <FPSProPlayerRankedAsideMyTeam />
      <FPSProPlayerRankedCenter />
      <FPSProPlayerRankedAsideEnemyTeam />
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { rankedFPSModule } from "@/store/modules/fps/proplayer/ranked-fps-module";
import FPSProPlayerRankedAsideEnemyTeam from "@/components/interface/fps/proplayer/FPSProPlayerRankedAsideEnemyTeam.vue";
import FPSProPlayerRankedHeader from "@/components/interface/fps/proplayer/FPSProPlayerRankedHeader.vue";
import FPSProPlayerRankedAsideMyTeam from "@/components/interface/fps/proplayer/FPSProPlayerRankedAsideMyTeam.vue";
import FPSProPlayerRankedCenter from "@/components/interface/fps/proplayer/FPSProPlayerRankedCenter.vue";
@Component({
  components: {
    FPSProPlayerRankedCenter,
    FPSProPlayerRankedAsideMyTeam,
    FPSProPlayerRankedHeader,
    FPSProPlayerRankedAsideEnemyTeam
  }
})
export default class FPSProPlayerRanked extends Vue {
  mounted() {
    rankedFPSModule.createMyTeam();
    rankedFPSModule.createEnemyTeam();
  }

  get getMyTeam() {
    return rankedFPSModule.myTeam;
  }

  get getEnemyTeam() {
    return rankedFPSModule.enemyTeam;
  }
}
</script>

<style scoped>
#base {
  background: var(--background-secondary);
  height: 100vh;
}

#base > section {
  display: flex;
  justify-content: space-between;
}
</style>
