<template>
  <button
    :class="white ? 'button--white' : 'button--black'"
    @click="$router.push(`/${to}`)"
  >
    <font-awesome-icon :icon="icon" />
    <p>{{ name }}</p>
  </button>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class IconButton extends Vue {
  @Prop(String) name;
  @Prop(String) icon;
  @Prop({ default: true }) white;
  @Prop(String) to;
}
</script>

<style scoped>
button {
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  background: none;
  border: none;
  padding: var(--padding-1);
  cursor: pointer;
}

p {
  font-family: "Poppins Light";
  transition: all 0.2s ease;
}

p:hover {
  color: #aaaaaa;
}

.button--white {
  color: white;
  transition: all 0.25s ease;
}

.button--black {
  color: black;
  transition: all 0.25s ease;
}
</style>
