<template>
  <span>Adicionar pergunta</span>
  <form>
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
    <input
      class="incorrect"
      placeholder="Alternativa incorreta..."
      v-model="answers[4]"
    />
    <button type="button" @click="created()">Adicionar</button>
    <br />
    <button type="button" @click="$router.push('/')">Voltar</button>
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
  border: 2px solid #008435;
}

.incorrect {
  border: 2px solid #741e1e;
}

button {
  align-self: center;
  font-family: "roboto";
  width: 50%;
  flex: 1 1 0px;
  border-color: silver;
  border-width: 1px;
  border-radius: 10px;
  background-color: white;
  font-family: "roboto", sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import QuestionEntity from "@/entity/Question";
import AnswerEntity from "@/entity/Answer";
import { questionService } from "@/service/";
import Answer from "@/entity/Answer";

@Options({
  data: () => ({
    utterance: "",
    answers: ["", "", "", "", ""],
  }),
  props: ["id"],

  methods: {
    async created() {
      try {
        const respostas: Answer[] = [
          new AnswerEntity(this.answers[0], true),
          new AnswerEntity(this.answers[1], false),
          new AnswerEntity(this.answers[2], false),
          new AnswerEntity(this.answers[3], false),
          new AnswerEntity(this.answers[5], false),
        ];

        const data = new QuestionEntity(
          parseFloat(localStorage.getItem("id") || ""),
          this.utterance,
          respostas
        );

        const response = await questionService.add(data);

        console.log(response);
      } catch (e) {
        alert("Usuário ou senha incorretos!");
      }
    },
  },
})
export default class AddQuestionView extends Vue {}
</script>
