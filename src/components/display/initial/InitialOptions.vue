<template>
  <section>
    <InitialOptionsItem
      desc="Novo Jogo"
      to="newgame"
      source="initial_options_new_game.png"
    />
    <InitialOptionsItem
      desc="Salvar Jogo"
      to="savegame"
      source="initial_options_save_game.png"
    />
    <InitialOptionsItem
      desc="Opções"
      to="options"
      source="initial_options_edit_options.png"
    />
    <InitialOptionsItem
      desc="Editor"
      to="editor"
      source="initial_options_editor.png"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import InitialOptionsItem from "@/components/display/initial/InitialOptionsItem.vue";
@Component({
  components: { InitialOptionsItem }
})
export default class InitialOptions extends Vue {}
</script>

<style scoped>
section {
  padding: 30% 0;
}

@media only screen and (max-height: 800px) {
  section {
    padding: 0;
  }
}
</style>
