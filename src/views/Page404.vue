<template>
  <main>
    <p>Error Page :(</p>
    <button @click.prevent="$router.push('/')">Voltar para principal</button>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Page404 extends Vue {}
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

main p {
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.25);
  padding: var(--padding-5) 0;
  pointer-events: none;
}

main button {
  padding: var(--padding-1);
  cursor: pointer;
}
</style>
