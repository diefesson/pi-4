<template>
  <form>
    <span>Adicionar pergunta</span>
    <textarea placeholder="Enunciado..."></textarea>
    <span>Alternativas:</span>
    <input class="correct" placeholder="Alternativa correta..." />
    <input class="incorrect" placeholder="Alternativa incorreta..." />
    <input class="incorrect" placeholder="Alternativa incorreta..." />
    <input class="incorrect" placeholder="Alternativa incorreta..." />
    <input class="incorrect" placeholder="Alternativa incorreta..." />
    <button>Adicionar</button>
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

@Options({
  data: () => ({
    utterance: "",
    answers: ["", "", "", "", ""],
  }),
  props: ["id"],
})
export default class AddQuestionView extends Vue {}
</script>
