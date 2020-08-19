<template>
  <section
    id="button"
    :style="{ width: width }"
    @click="$router.push(`/${to}`)"
  >
    <font-awesome-icon :icon="icon" :size="size" />
    <p>{{ text }}</p>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContentButton extends Vue {
  @Prop({ default: "spinner" }) icon: string;
  @Prop({ default: "2x" }) size: string;
  @Prop(String) text: string | undefined;
  @Prop({ default: "25vw" }) width: string;
  @Prop({ default: "fpsproplayer" }) to: string;
}
</script>

<style scoped>
#button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid var(--border-primary);
  background: var(--background-primary);
  padding: 4px var(--padding-1);
  transition: all 0.2s ease;
  margin: var(--margin-1) 0;
}

#button:hover {
  transform: translateX(10px) translateY(-10px);
}

p {
  margin-left: var(--margin-2);
}
</style>
