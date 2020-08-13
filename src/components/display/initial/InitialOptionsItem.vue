<template>
  <article @click.prevent="toRouterOption(to)">
    <section>
      <img :src="require(`@/assets/gfx/interface/${source}`)" />
    </section>
    <p>{{ desc }}</p>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class InitialOptionsItem extends Vue {
  @Prop(String) readonly desc: string;
  @Prop(String) readonly to: string;
  @Prop(String) readonly source: string;

  public toRouterOption(to: string) {
    this.$router.push(`/${to}`);
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: var(--background-primary);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-default);
  height: 50px;
  margin: var(--margin-2) 0;
  transition: all 0.3s ease;
}

article:hover {
  background: var(--background-primary-hover);
}

article section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  background: var(--background-secondary);
  border-top-left-radius: var(--radius-default);
  border-bottom-left-radius: var(--radius-default);
  height: 50px;
  transform: translateX(-5px);
}

article section img {
  height: var(--svg-option);
}

article p {
  display: flex;
  place-content: center flex-start;
  width: 85%;
  font-family: "Poppins Bold";
  font-size: 1.5rem;
  margin: var(--margin-1);
}
</style>
