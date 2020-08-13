<template>
  <article>
    <h1>{{ title }}</h1>
    <p align="center">{{ desc }}</p>
    <primary-button :to="to" width-prop="50%">{{ buttonOwner }}</primary-button>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PrimaryButton from "@/components/common/general/button/PrimaryButton.vue";
@Component({
  components: { PrimaryButton }
})
export default class NewGameOptionsItem extends Vue {
  @Prop(String) readonly title: string;
  @Prop(String) readonly desc: string;
  @Prop(String) readonly to: string;

  get buttonOwner() {
    return `Escolher ${this.title}`;
  }

  public toRouterOption(to: string) {
    this.$router.push(`/${to}`);
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  width: 30vw;
  height: 50vh;
  padding: var(--padding-2);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;
}

article h1 {
  font-size: 2.5rem;
}

article p {
  font-family: "Poppins Light";
  width: 15rem;
}

article:hover {
  transform: translateY(-25px) translateX(25px);
}
</style>
