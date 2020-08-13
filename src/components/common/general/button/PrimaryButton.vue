<template>
  <button @click.prevent="toRouterOption()" :style="{ width: widthProp }">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PrimaryButton extends Vue {
  @Prop(String) readonly to: string;
  @Prop(Function) readonly func: Function | undefined | null;
  @Prop(String) readonly widthProp: string | undefined | null = "100%";

  public toRouterOption(to: string) {
    this.$router.push(`/${to}`);
  }
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
