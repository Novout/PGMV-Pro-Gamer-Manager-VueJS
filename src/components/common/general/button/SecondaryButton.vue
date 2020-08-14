<template>
  <button @click.prevent="func()"><slot></slot></button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SecondaryButton extends Vue {
  @Prop(Function) readonly func: Function | null
}
</script>

<style scoped>
button {
  background: none;
  padding: var(--padding-1) var(--padding-3);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-default);
  height: 3rem;
  cursor: pointer;
}
</style>