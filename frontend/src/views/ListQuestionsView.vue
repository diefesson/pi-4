<template>
  <div class="question-list">
    <div
      class="question"
      v-for="question in questions"
      v-bind:key="question.id"
    >
      <span>{{ question.utterance }}</span>
      <button>DELETAR</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-list {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 5px;
  padding: 10px;
}

.question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #f5f5f5;
  color: black;
  font-family: "roboto";
}

.question button {
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #a81414;
  color: white;
  font-family: "roboto";
  font-weight: 700;
  filter: opacity(0.3);
}
</style>

<script lang="ts">
import { authService, questionService } from "@/service/";
import { Options, Vue } from "vue-class-component";

@Options({
  data: () => ({
    questions: [],
  }),
  async mounted() {
    this.refresh();
  },
  methods: {
    async refresh() {
      const playerId = authService.getId()!;
      this.questions = await questionService.findByPlayerId(playerId);
    },
    /* async onDeleteClick(questionId: number) {
      try {
        await questionService.remove(questionId);
        await this.refresh();
      } catch (error) {
        console.error(error);
      }
    }, */
  },
})
export default class Questions extends Vue {}
</script>
