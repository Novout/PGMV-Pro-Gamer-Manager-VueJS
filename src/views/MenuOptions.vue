<template>
  <main>
    <header>
      <p>Opções</p>
      <secondary-button :func="routeBack">Voltar</secondary-button>
    </header>
    <section>
      <p>Resolução:</p>
      <section>
        <v-select
          v-model="windowResolution"
          class="style-chooser"
          :options="windowResolutionList"
          placeholder="Troque a Resolução"
        />
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import PrimarySelect from "@/components/common/general/select/PrimarySelect.vue";
import { settingsOptionService } from "@/services/defines/settings.ts";
import { remote } from "electron";
import SecondaryButton from "@/components/common/general/button/SecondaryButton.vue";

@Component({
  components: {SecondaryButton, PrimarySelect }
})
export default class MenuOptions extends Vue {
  private windowResolution: string | undefined | null = "";
  private windowResolutionList = [""];
  
  public routeBack() {
    this.$router.back();
  }

  mounted() {
    this.windowResolutionList = settingsOptionService.getOptions();
  }
  
  @Watch('windowResolution')
  resolutionActivated() {
    const window = remote.getCurrentWindow();

    if(this.windowResolution === null) return;
    
    if(this.windowResolution === "FullScreen") {
      window!.setFullScreen(true);
    } else {
      const size = this.windowResolution!.replace(/\D+/g, " ").split(" ", 2);
      window!.setFullScreen(false);
      window!.setSize(parseInt(size[0]), parseInt(size[1]));
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: var(--background-primary);
  width: 100%;
}

header p {
  font-size: 3rem;
  padding: var(--padding-1) 0;
  color: var(--text-primary);
}

main {
  height: 100vh;
  background: var(--background-tertiary);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}

main > section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
}

main > section > section {
  background: var(--background-primary);
  border-radius: 0.5rem;
  width: 300px;
}

section p {
  color: white;
  font-size: 1.5rem;
  padding: var(--padding-2) 0;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: var(--background-primary);
  border: none;
  color: var(--text-secondary);
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: var(--text-secondary);
}
</style>
