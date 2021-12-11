<template>
  <question-list v-bind:questions="questions" />
</template>

<script lang="ts">
import Question from "@/entity/Question";
import QuestionList from "@/components/QuestionList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  data: () => ({
    questions: [
      new Question(0, "pergunta 0", []),
      new Question(1, "pergunta 1", []),
    ],
  }),
  components: { QuestionList },
})
export default class Questions extends Vue {}
</script>
