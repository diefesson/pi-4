<template>
  <div class="question-list">
    <div v-for="q in questions" v-bind:key="q.id">{{ q.utterance }}</div>
  </div>
</template>

<style lang="scss" scoped>
.question-list{
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    questions: Array,
  },
})
export default class QuestionList extends Vue {}
</script>
