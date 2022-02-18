<template>
  <div class="game">
    <p class="utterance">{{ utterance }}</p>
    <div class="answers">
      <span
        class="answer"
        v-for="(answer, i) in answers"
        v-bind:key="{ k: answer.id, s: answer.selected, e: answer.eliminated }"
        v-on:click="onAnswerClick(i)"
        v-bind:selected="answer.selected"
        v-bind:eliminated="answer.eliminated"
      >
        {{ answer.description }}
      </span>
    </div>
    <div class="options">
      <!-- <button class="option" v-on:click="onStopClick">PARAR</button> -->
      <button class="option" v-on:click="onEliminateClick">ELIMINAR 2</button>
      <button class="option" v-on:click="onConfirmClick">CONFIRMAR</button>
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
  background-color: #ff472f;
  border: 3px solid #ff472f;
}

.answer[selected="true"] {
  background-color: #2f55ff;
  border: 3px solid #5e7bff;
}

.answer[eliminated="true"] {
  filter: opacity(0.3);
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
import { Options, Vue } from "vue-class-component";
import { gameService } from "@/service";

const LAST_ROUND = 7;

@Options({
  data: () => ({
    eliminated: false,
    utterance: null,
    answers: [],
  }),
  methods: {
    indexOfSelected(): number | null {
      for (let [i, a] of this.answers.entries()) {
        if (a.selected) {
          return i;
        }
      }
      return -1;
    },
    selectAnswer(index: number) {
      const oldIndex = this.indexOfSelected();
      if (oldIndex != -1) {
        this.answers[oldIndex].selected = false;
      }
      if (index != null && !this.answers[index].eliminated) {
        this.answers[index].selected = true;
      }
    },
    suffleAnswers() {
      this.answers = this.answers.sort(() => Math.random() - 0.5);
      this.selectAnswer(null);
    },
    eliminate(count: number) {
      for (let c = 0, i = 0; c < count && i < this.answers.length; i++) {
        if (!this.answers[i].isCorrect) {
          this.answers[i].eliminated = true;
          this.answers[i].selected = false;
          c++;
        }
      }
      this.suffleAnswers();
    },
    async onAnswerClick(index: number) {
      this.selectAnswer(index);
    },
    async onEliminateClick() {
      if (!this.eliminated) {
        this.eliminate(2);
        this.eliminated = true;
      }
    },
    async onConfirmClick() {
      try {
        const selectedIndex = this.indexOfSelected();
        if (selectedIndex == -1) {
          return;
        }
        const answer = this.answers[selectedIndex];
        if (answer.isCorrect) {
          const wasLast = gameService.getGame().currentRound == LAST_ROUND;
          await gameService.next();
          if (wasLast) {
            gameService.finalize();
            this.$router.push("/pause/victory");
          } else {
            this.$router.push("/pause/correct");
          }
        } else {
          await gameService.error();
          this.$router.push("/pause/incorrect");
        }
      } catch (error) {
        console.error(error);
      }
    },
    /* async onStopClick() {
      try {
        await gameService.stopGame();
        this.$router.push("/pause/stop");
      } catch (error) {
        console.error(error);
      }
    }, */
  },
  async mounted() {
    try {
      if (!gameService.isPlaying()) {
        await gameService.startGame();
      }
      const question = gameService.getGame().question;
      this.utterance = question.utterance;
      this.answers = question.answers;
      this.suffleAnswers();
    } catch (error) {
      console.error(error);
    }
  },
})
export default class Jogo extends Vue {}
</script>
