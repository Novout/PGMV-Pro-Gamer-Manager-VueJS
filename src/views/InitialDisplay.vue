<template>
  <main>
    <section>
      <PGMLogo />
      <InitialOptions />
      <He4rtLogo />
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import { ownerModule } from "@/store/modules/owner-module";
import PGMLogo from "@/components/common/general/PGMLogo.vue";
import InitialOptions from "@/components/display/initial/InitialOptions.vue";
import He4rtLogo from "@/components/common/general/He4rtLogo.vue";

@Component({
  components: {
    He4rtLogo,
    InitialOptions,
    PGMLogo
  }
})
export default class InitialDisplay extends Vue {}
</script>

<style scoped>
main {
  max-height: 100vh;
  width: 100%;
  background: var(--background-primary);
}

main section {
  display: flex;
  flex-flow: column nowrap;
  place-content: center flex-start;
  margin: 2vh auto 0;
  width: 400px;
}
</style>
