<template>
  <section>
    <NewGameOptionsItem
      title="Jogador"
      desc="Se torne um Pro-Player e conquiste o mundo!"
      to="caracterbuild"
    />
    <NewGameOptionsItem
      title="Dono"
      desc="Crie e administre um time de e-sports!"
      to="teambuild"
    />
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import NewGameOptionsItem from "@/components/display/newgame/NewGameOptionsItem";
@Component({
  components: { NewGameOptionsItem }
})
export default class NewGameOptions extends Vue {}
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row nowrap;
  place-content: center space-evenly;
  margin: 25vh auto 0;
}
</style>
