<template>
  <aside id="aside">
    <h2>Time Aliado</h2>
    <PlayerData
      :name="owner.name"
      :age="owner.age"
      :level="owner.level"
      :type="owner.typeGameplay"
    />
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
import { ownerCharacterFPSModule } from "@/store/modules/fps/proplayer/owner-character-fps-module";

@Component({
  components: { PlayerData }
})
export default class FPSProPlayerRankedAsideMyTeam extends Vue {
  public members: Array<characterFPS> = rankedFPSModule.myTeam.members;
  public owner = ownerCharacterFPSModule;
  mounted() {
    console.log(this.owner);
  }
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
