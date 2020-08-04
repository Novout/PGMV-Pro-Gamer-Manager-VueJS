<template>
  <button><slot /></button>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>
