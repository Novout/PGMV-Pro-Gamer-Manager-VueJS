<template>
  <img :src="require('@/assets/common/base/he4rt.svg')" width="10%">
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class He4rtLogo extends Vue {}
</script>

<style scoped>
img {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>