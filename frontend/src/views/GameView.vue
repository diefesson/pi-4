<template>
  <div class="game">
    <p class="utterance">{{ utterance }}</p>
    <div class="answers">
      <span
        class="answer"
        v-for="(answer, i) in answers"
        v-bind:key="answer.id"
        v-on:click="onAnswerClick(i)"
        v-bind:selected="answer.selected"
      >
        {{ answer.description }}
      </span>
    </div>
    <div class="options">
      <!-- <button class="option" v-on:click="onStopClick">PARAR</button> -->
      <button class="option">ELIMINAR 2</button>
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
}

.answer[selected="true"] {
  background-color: #9e2d1e;
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
    selectedIndex: null,
    utterance: null,
    answers: [],
  }),
  methods: {
    async selectAnswer(index: number) {
      if (this.selectedIndex != null) {
        this.answers[this.selectedIndex].selected = false;
      }
      this.answers[index].selected = true;
      this.selectedIndex = index;
    },
    async onAnswerClick(index: number) {
      this.selectAnswer(index);
    },
    async onConfirmClick() {
      try {
        if (this.selectedIndex == null) {
          return;
        }
        const answer = this.answers[this.selectedIndex];
        if (answer.isCorrect) {
          await gameService.next();
          if (gameService.getGame().currentRound == LAST_ROUND) {
            this.$router.push("/pause/victory");
          } else {
            this.$router.push("/pause/correct");
          }
        } else {
          await gameService.error();
          this.$router.push("/pause/incorrect");
        }
      } catch (error) {
        console.log(error);
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
    } catch (error) {
      console.error(error);
    }
  },
})
export default class Jogo extends Vue {}
</script>
