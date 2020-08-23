<template>
  <aside id="aside">
    <h2>Time Inimigo</h2>
    <PlayerData
      v-for="p in members"
      :key="p.name"
      :name="p.name"
      :age="p.age"
      :level="p.level"
      :type="p.typeGameplay"
    />
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { rankedFPSModule } from "@/store/modules/fps/proplayer/ranked-fps-module";
import PlayerData from "@/components/common/fps/proplayer/PlayerData.vue";
import { characterFPS } from "@/store/modules/fps/proplayer/AI/character-i";

@Component({
  components: { PlayerData }
})
export default class FPSProPlayerRankedAsideEnemyTeam extends Vue {
  public members: Array<characterFPS> = rankedFPSModule.enemyTeam.members;
}
</script>

<style scoped>
#aside {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 90vh;
}

#aside > h2 {
  font-family: "Raleway Tiny";
  color: var(--text-tertiary);
}
</style>
