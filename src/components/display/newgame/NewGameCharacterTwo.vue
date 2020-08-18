<template>
  <NewGameCharacterContainer>
    <button @click="saveSettingsAndContinue">FPS</button>
  </NewGameCharacterContainer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NewGameCharacterContainer from "@/components/display/newgame/NewGameCharacterContainer.vue";

@Component({
  components: { NewGameCharacterContainer }
})
export default class NewGameCharacterTwo extends Vue {
  public saveSettingsAndContinue() {
    this.$router.push("/fpsproplayer");
  }
}
</script>

<style scoped></style>
