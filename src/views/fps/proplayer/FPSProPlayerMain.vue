<template>
  <main>
    <FPSProPlayerMainHeader />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FPSProPlayerMainHeader from "@/components/interface/fps/proplayer/FPSProPlayerMainHeader.vue";
@Component({
  components: { FPSProPlayerMainHeader }
})
export default class FPSProPlayerMain extends Vue {}
</script>

<style scoped></style>
