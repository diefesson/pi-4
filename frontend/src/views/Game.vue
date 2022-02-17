<template>
  <div class="game">
    <p class="utterance">{{ utterance }}</p>
    <div class="answers">
      <span class="answer" v-for="answer in answers" v-bind:key="answer.id">
        {{ answer.description }}
      </span>
    </div>
    <div class="options">
      <button class="option">PARAR</button>
      <button class="option">ELIMINAR 2</button>
      <button class="option">CONFIRMAR</button>
    </div>
  </div>
</template>

<style scoped>
.game {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

.utterance {
  font-family: "roboto", sans-serif;
  font-size: 18px;
  line-height: 0.5em;
}

.answers {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin-bottom: 40px;
}

.answer {
  padding: 7px;
  border-radius: 10px;
  font-family: "roboto" sans-serif;
  font-size: 22px;
  font-weight: 700;
  background-color: rgb(255, 71, 47);
}

.options {
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
}

.option {
  padding: 5px;
  border-radius: 5px;
  width: 160px;
  font-family: "roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
}
</style>

<script lang="ts">
import Button from "@/components/form/Button.vue";
import JogoEntity from "@/entity/Jogo";
import { jogoService } from "@/service/";
import { Options, Vue } from "vue-class-component";
@Options({
  data: () => ({
    utterance: "pergunta",
    answers: [
      {
        id: 0,
        description: "a1",
        isCorrect: true,
        eliminated: false,
      },
      {
        id: 1,
        description: "a2",
        isCorrect: false,
        eliminated: false,
      },
      {
        id: 2,
        description: "a3",
        isCorrect: false,
        eliminated: false,
      },
      {
        id: 3,
        description: "a4",
        isCorrect: false,
        eliminated: false,
      },
    ],
  }),
  components: { Button },
  methods: {
    async jogo() {
      try {
        const jogo = new JogoEntity(
          parseFloat(localStorage.getItem("id") || ""),
          "start"
        );
        const response = await jogoService.add(jogo);
        if (response) {
          console.log(response);
        }
      } catch (e) {
        alert("Erro!");
      }
    },
  },
})
export default class Jogo extends Vue {}
</script>
