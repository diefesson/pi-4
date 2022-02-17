<template>
  <span class="title">{{ title }}</span>
  <span class="prize">Prêmio atual: {{ prize }}</span>
  <div class="options">
    <button class="option" v-if="canContinue" v-on:click="onStopClick">
      Parar
    </button>
    <button class="option" v-if="canContinue" v-on:click="onContinueClick">
      Continuar
    </button>
    <button class="option" v-if="!canContinue" v-on:click="onReturnClick">
      Voltar ao menu
    </button>
  </div>
</template>

<style scoped>
.title {
  font-family: "roboto", sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.prize {
  font-family: "roboto", sans-serif;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 220px;
}

.options {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.options {
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
}

.option {
  padding: 5px;
  border-radius: 5px;
  width: 160px;
  font-family: "roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
}
</style>

<script lang="ts">
import Button from "@/components/form/Button.vue";
import { gameService } from "@/service";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { Button },
  data: () => ({
    title: null,
    prize: null,
    canContinue: false,
  }),
  props: ["pauseStatus"],
  methods: {
    async onStopClick() {
      if (gameService.isPlaying()) {
        await gameService.stopGame();
      }
      this.$router.push("/pause/stop");
    },
    async onContinueClick() {
      this.$router.push("/game");
    },
    async onReturnClick() {
      this.$router.push("/");
    },
  },
  mounted() {
    const prizes = gameService.getGame().award;
    switch (this.pauseStatus) {
      case "correct":
        this.title = "Resposta Correta";
        this.prize = prizes.hit;
        this.canContinue = true;
        break;
      case "incorrect":
        this.title = "Resposta Incorreta";
        this.prize = prizes.wrong;
        break;
      case "stop":
        this.title = "Fim de jogo";
        this.prize = prizes.stop;
        break;
      case "victory":
        this.title = "Parabéns você acertou todas as questões";
        this.prize = prizes.hit;
        break;
    }
  },
})
export default class PauseView extends Vue {}
</script>
