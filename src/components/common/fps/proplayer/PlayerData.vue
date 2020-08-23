<template>
  <article>
    <section>
      <p>Nome: {{ name }}</p>
      <p>Idade: {{ age }}</p>
    </section>
    <section>
      <p>Nível: {{ level }}</p>
      <p>Estilo: {{ type }}</p>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PlayerData extends Vue {
  @Prop(String) name: string;
  @Prop(Number) age: number;
  @Prop(Number) level: number;
  @Prop(String) type: string;
}
</script>

<style scoped>
article {
  display: flex;
  flex-flow: column nowrap;
  padding: var(--padding-1);
  background: var(--background-tertiary);
  border-radius: var(--radius-default);
  pointer-events: none;
  width: 90%;
}

article > section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: var(--margin-1) 0;
}

article > section > p {
  font-family: "Poppins Light";
  font-size: 0.75rem;
  color: var(--text-tertiary);
}
</style>
