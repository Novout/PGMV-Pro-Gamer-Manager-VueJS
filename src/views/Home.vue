<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ firstName }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { userModule } from "@/store/modules/user-module";

@Component
export default class Home extends Vue {
  get firstName() {
    return userModule.firstName;
  }
}
</script>
