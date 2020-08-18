<template>
  <section id="content">
    <p>a</p>
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class FPSProPlayerMainContent extends Vue {}
</script>

<style scoped>
#content {
  height: 90vh;
  width: 100%;
  background: var(--background-secondary);
}
</style>
