<template>
  <question-list v-bind:questions="questions" />
</template>

<script lang="ts">
import { authService, questionService } from "@/service/";
import QuestionList from "@/components/QuestionList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  data: () => ({
    questions: [],
  }),
  components: { QuestionList },
  async created() {
    const playerId = authService.getId()!;
    this.questions = await questionService.findByPlayerId(playerId);
  },
})
export default class Questions extends Vue {}
</script>
