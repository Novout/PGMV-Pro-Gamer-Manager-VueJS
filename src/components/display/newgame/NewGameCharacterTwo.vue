<template>
  <NewGameCharacterContainer>
    <p>test</p>
  </NewGameCharacterContainer>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import NewGameCharacterContainer from "@/components/display/newgame/NewGameCharacterContainer";
@Component({
  components: { NewGameCharacterContainer }
})
export default class NewGameCharacterTwo extends Vue {}
</script>

<style scoped></style>
