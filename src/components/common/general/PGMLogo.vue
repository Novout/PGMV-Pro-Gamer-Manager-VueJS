<template>
  <header>
    <h1>PGM</h1>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PGMLogo extends Vue {}
</script>

<style scoped>
header {
  padding: var(--padding-2);
  border-radius: var(--radius-default);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);
}

header h1 {
  display: flex;
  place-content: center;
  font-family: "Raleway ExtraBold";
  font-size: 8rem;
  color: var(--text-secondary);
}
</style>
