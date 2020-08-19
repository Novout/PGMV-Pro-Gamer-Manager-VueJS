<template>
  <header>
    <section>
      <icon-button
        name="Calendário"
        icon="calendar-week"
        to="fpsproplayercalendary"
      />
      <icon-button name="Ranking" icon="users" to="fpsproplayerranking" />
      <icon-button name="Perfil" icon="id-badge" to="fpsproplayerprofile" />
      <icon-button
        name="Time"
        icon="star"
        to="fpsproplayerteam"
        v-if="getInTeam"
      />
    </section>
    <section>
      <icon-button name="Configurações" icon="cog" to="options" />
    </section>
  </header>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import IconButton from "@/components/common/general/svg/IconButton";
import { ownerCharacterFPSModule } from "@/store/modules/fps/proplayer/owner-character-fps-module";

@Component({
  components: { IconButton }
})
export default class FPSProPlayerMainHeader extends Vue {
  get getInTeam() {
    return ownerCharacterFPSModule.inTeam;
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

header > section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}

section > p {
  color: white;
  margin: 0 var(--margin-1);
}
</style>
