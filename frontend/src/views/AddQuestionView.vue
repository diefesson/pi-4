<template>
  <form><label>Enunciado:</label><input type="text" /></form>
</template>

<style scoped></style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data: () => ({
    id: null,
    utterance: "",
    answers: ["", "", "", "", ""],
  }),
  props: ["id"],
})
export default class AddQuestionView extends Vue {}
</script>
