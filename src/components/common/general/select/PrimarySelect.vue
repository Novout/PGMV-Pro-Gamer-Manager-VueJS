<template>
  <section>
    <select :value="value" @input="e => (value = e.target.value)">
      <option v-for="(payload, index) in list" :key="index" :value="payload">
        {{ payload }}
      </option>
    </select>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  inheritAttrs: false
})
export default class PrimarySelect extends Vue {
  @Prop(String) value: string;
  @Prop(Array) readonly list: Array<string>;
}
</script>

<style scoped></style>
