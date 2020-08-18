<template>
  <section class="position">
    <section class="base">
      <slot></slot>
    </section>
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class NewGameCharacterContainer extends Vue {}
</script>

<style scoped>
.position {
  display: flex;
  place-content: center;
  height: 100vh;
  width: 100%;
}

.base {
  display: flex;
  flex-flow: column nowrap;
  place-items: flex-start;
  padding: var(--padding-2);
  border: 2px solid var(--border-primary);
  margin: 0 auto;
  max-width: 40vw;
}
</style>
