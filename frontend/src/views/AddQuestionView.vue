<template>
  <span>Adicionar pergunta</span>
  <div class="questoes">
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
    <Button class="botao" label="Adicionar" @click="created()" />
    <br />
    <Button class="botao" label="Voltar" @click="$router.push('/')" />
  </div>
</template>

<style scoped>
.questoes {
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

.botao {
  align-self: center;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import QuestionEntity from "@/entity/Question";
import AnswerEntity from "@/entity/Answer";
import { questionService } from "@/service/";
import Answer from "@/entity/Answer";
import Button from "@/components/form/Button.vue";
import router from "@/router";

@Options({
  data: () => ({
    utterance: "",
    answers: ["", "", "", "", ""],
  }),
  props: ["id"],
  components: {
    Button,
  },

  methods: {
    async created() {
      try {
        const respostas: Answer[] = [
          new AnswerEntity(this.answers[0], true),
          new AnswerEntity(this.answers[1], false),
          new AnswerEntity(this.answers[2], false),
          new AnswerEntity(this.answers[3], false),
        ];

        const data = new QuestionEntity(
          parseFloat(localStorage.getItem("id") || ""),
          this.utterance,
          respostas
        );

        const response = await questionService.add(data);

        console.log(response);
        alert("Pergunta cadastrada com sucesso!");
        router.push("/");
      } catch (e) {
        alert("Erro!");
      }
    },
  },
})
export default class AddQuestionView extends Vue {}
</script>
