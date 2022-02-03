<template>
  <question-list v-bind:questions="questions" />
</template>

<script lang="ts">
import { questionService } from "@/service/";
import QuestionList from "@/components/QuestionList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  data: () => ({
    questions: [],
  }),
  components: { QuestionList },
  async created() {
    this.questions = await questionService.findByPlayerId(0); // TODO: remove hardcoded player id
  },
})
export default class Questions extends Vue {}
</script>
