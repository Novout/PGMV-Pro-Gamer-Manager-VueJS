<template>
  <button @click.prevent="func()">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PrimaryButton extends Vue {
  @Prop(String) readonly to: string;
  @Prop(Function) readonly func: any;
}
</script>

<style scoped>
button {
  font-family: "Poppins Light";
  background: var(--background-secondary);
  color: white;
  padding: var(--padding-1) var(--padding-2);
  border: none;
  cursor: pointer;
}
</style>
