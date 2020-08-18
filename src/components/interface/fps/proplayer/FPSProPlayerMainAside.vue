<template>
  <aside></aside>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FPSProPlayerMainAside extends Vue {}
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
</style>
