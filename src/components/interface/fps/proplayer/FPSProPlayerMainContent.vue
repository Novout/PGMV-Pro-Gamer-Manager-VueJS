<template>
  <section id="content">
    <content-button
      text="Jogo Ranqueado"
      icon="podcast"
      size="2x"
      to="fpsproplayerranked"
    />
    <content-button
      text="Treinamento"
      icon="chart-line"
      size="2x"
      to="fpsproplayertraining"
    />
    <content-button
      text="Assistir Profissionais"
      icon="chalkboard-teacher"
      size="2x"
      to="fpsproplayertraining"
    />
    <content-button
      text="Perks"
      icon="tasks"
      size="2x"
      to="fpsproplayerperks"
    />
    <content-button
      text="Skills"
      icon="mountain"
      size="2x"
      to="fpsproplayerskills"
    />
    <content-button text="Dormir" icon="bed" size="2x" to="fpsproplayerbed" />
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ContentButton from "@/components/common/general/button/ContentButton";
@Component({
  components: { ContentButton }
})
export default class FPSProPlayerMainContent extends Vue {}
</script>

<style scoped>
#content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: var(--background-secondary);
}
</style>
