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
    <div class="botoes-container">
      <Button class="botao" label="Voltar" @click="$router.push('/')" />
      <Button class="botao" label="Adicionar" @click="onAddButton" />
    </div>
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

.botoes-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
import Button from "@/components/form/Button.vue";

@Options({
  components: { Incorreta, Button },
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
        await questionService.add(question);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
})
export default class AddQuestionView extends Vue {}
</script>
