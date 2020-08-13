<template>
  <main>
    <NewGameOptions />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NewGameOptions from "@/components/display/newgame/NewGameOptions.vue";
@Component({
  components: { NewGameOptions }
})
export default class NewGameDisplay extends Vue {}
</script>

<style scoped></style>
