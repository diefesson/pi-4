<template>
  <form v-on:submit.prevent>
    <span>Adcionar pergunta</span>
    <textarea placeholder="Enunciado..." v-model="utterance"></textarea>
    <span>Alternativas:</span>
    <input
      class="correct"
      placeholder="Alternativa correta..."
      v-model="answers[0]"
    />
    <input
      class="incorrect"
      placeholder="Alternativa incorreta..."
      v-model="answers[1]"
    />
    <input
      class="incorrect"
      placeholder="Alternativa incorreta..."
      v-model="answers[2]"
    />
    <input
      class="incorrect"
      placeholder="Alternativa incorreta..."
      v-model="answers[3]"
    />
    <button type="button" v-on:click="onAddButton">Adcionar</button>
  </form>
</template>

<style scoped>
form {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

span {
  font-family: "roboto";
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  padding: 10px;
}

textarea,
input {
  border-radius: 8px;
  margin-bottom: 26px;
  padding: 10px;
}

textarea {
  height: 5em;
}

.correct {
  border: 3px solid #008435;
}

.incorrect {
  border: 3px solid #a81414;
}

button {
  width: fit-content;
  align-self: center;
  font-family: "roboto";
  font-weight: 400;
  padding: 10px;
  border-radius: 10px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { authService, questionService } from "@/service";
import Question from "@/entity/Question";
import Answer from "@/entity/Answer";
import Incorreta from "./Incorreta.vue";

@Options({
  components: { Incorreta },
  data: () => ({
    utterance: "",
    answers: ["", "", "", ""],
  }),
  props: ["id"],
  methods: {
    collectQuestion(): Question {
      const answers: Answer[] = this.answers.map(
        (description: string) => new Answer(description, false)
      );
      answers[0].isCorrect = true;
      return new Question(
        authService.getId() as number,
        this.utterance,
        answers
      );
    },
    async onAddButton() {
      try {
        const question = this.collectQuestion();
        const result = await questionService.add(question);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
})
export default class AddQuestionView extends Vue {}
</script>
