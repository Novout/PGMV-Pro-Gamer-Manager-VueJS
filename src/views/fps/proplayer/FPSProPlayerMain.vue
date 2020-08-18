<template>
  <main id="base">
    <FPSProPlayerMainHeader />
    <section id="main">
      <FPSProPlayerMainAside />
      <FPSProPlayerMainContent />
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FPSProPlayerMainHeader from "@/components/interface/fps/proplayer/FPSProPlayerMainHeader.vue";
import FPSProPlayerMainAside from "@/components/interface/fps/proplayer/FPSProPlayerMainAside.vue";
import FPSProPlayerMainContent from "@/components/interface/fps/proplayer/FPSProPlayerMainContent.vue";
@Component({
  components: {
    FPSProPlayerMainContent,
    FPSProPlayerMainAside,
    FPSProPlayerMainHeader
  }
})
export default class FPSProPlayerMain extends Vue {}
</script>

<style scoped>
#base {
  display: flex;
  flex-flow: column nowrap;
}

#main {
  display: flex;
  overflow-y: hidden;
}
</style>
