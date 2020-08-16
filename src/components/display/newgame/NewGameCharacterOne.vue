<template>
  <NewGameCharacterContainer>
    <header>
      <p>Crie seu Personagem</p>
    </header>
    <label>Nome:</label>
    <input v-model="characterFormulary.name" />
    <label>Idade:</label>
    <input v-model="characterFormulary.age" />
    <label>Categoria:</label>
    <section>
      <article
        v-for="classGameplay in characterFormulary.dataClassGameplay"
        :key="classGameplay"
      >
        <button
          @click.prevent="setClassGameplay(classGameplay)"
          :class="{
            'button-activated':
              classGameplay === characterFormulary.classGameplay
          }"
        >
          {{ classGameplay }}
        </button>
      </article>
    </section>
    <label>Estilo de Jogo:</label>
    <section>
      <article
        v-for="typeGameplay in characterFormulary.dataTypeGameplay"
        :key="typeGameplay"
      >
        <button
          @click.prevent="setTypeGameplay(typeGameplay)"
          :class="{
            'button-activated': typeGameplay === characterFormulary.typeGameplay
          }"
        >
          {{ typeGameplay }}
        </button>
      </article>
    </section>
    <footer>
      <button @click="backPage">Voltar</button>
      <button @click="newPage">Continuar</button>
    </footer>
  </NewGameCharacterContainer>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import NewGameCharacterContainer from "@/components/display/newgame/NewGameCharacterContainer.vue";
import { dataNewGameProPlayer } from "@/services/defines/newgame-proplayer";
import { settingsModule } from "@/store/modules/settings-module";
import { ownerCharacterFPSModule } from "@/store/modules/fps/proplayer/owner-character-fps-module";

interface initialCharacterFormulary {
  name: string | undefined;
  age: number | undefined;
  classGameplay: string;
  typeGameplay: string;
  dataTypeGameplay: Array<string>;
  dataClassGameplay: Array<string>;
  defineTypeGameplay: any;
}

@Component({
  components: {
    NewGameCharacterContainer
  }
})
export default class NewGameCharacterOne extends Vue {
  private characterFormulary: initialCharacterFormulary = {
    name: undefined,
    age: undefined,
    classGameplay: "FPS",
    dataClassGameplay: [],
    typeGameplay: "Awper",
    dataTypeGameplay: [],
    defineTypeGameplay: {}
  };
  public setClassGameplay(classGameplay: string) {
    this.characterFormulary.classGameplay = classGameplay;
  }
  public setTypeGameplay(typeGameplay: string) {
    this.characterFormulary.typeGameplay = typeGameplay;
  }
  public newPage() {
    if (this.characterFormulary.classGameplay === "FPS") {
      ownerCharacterFPSModule.setInitialFormulary({
        name: this.characterFormulary.name,
        age: this.characterFormulary.age,
        typeGameplay: this.characterFormulary.typeGameplay
      });
    }
    settingsModule.setNewPlayerAccount();
  }
  public backPage() {
    settingsModule.decreasePlayerAccount();
    this.$router.back();
  }

  mounted() {
    const {
      defineTypeGameplay
    }: any = dataNewGameProPlayer.getDefineTypeGameplay();
    this.characterFormulary.defineTypeGameplay = defineTypeGameplay;
    this.characterFormulary.dataClassGameplay = Object.keys(defineTypeGameplay);
    this.characterFormulary.dataTypeGameplay = defineTypeGameplay["FPS"];
  }

  @Watch("characterFormulary.classGameplay")
  classGameplayActivated(val: string) {
    const typeGameplaySearch: Array<string> = this.characterFormulary
      .defineTypeGameplay[val];
    this.characterFormulary.dataTypeGameplay = typeGameplaySearch;
    this.characterFormulary.typeGameplay = typeGameplaySearch[0];
  }
  @Watch("characterFormulary.typeGameplay")
  dataTypeGameplayActivated(val: string) {
    this.characterFormulary.typeGameplay = val;
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 40vw;
  padding-bottom: var(--padding-1);
}

label {
  font-family: "Raleway Tiny";
  font-size: 1.2rem;
  margin-top: var(--margin-1);
}

button {
  padding: 0 var(--margin-1);
  font-family: "Raleway Medium";
}

header {
  padding: var(--padding-2) 0;
}

header > p {
  font-size: 2.5rem;
}

footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding-3) 0 var(--padding-1) 0;
}

footer > button {
  background: var(--background-secondary);
  border: none;
  padding: var(--padding-1) var(--padding-2);
  color: var(--text-tertiary);
  border-radius: var(--radius-default);
  cursor: pointer;
}

.button-activated {
  background: var(--background-secondary);
  border: none;
  color: var(--text-tertiary);
  padding: 2px;
  cursor: pointer;
}

input {
  width: 100%;
}

article > button {
  cursor: pointer;
}
</style>
