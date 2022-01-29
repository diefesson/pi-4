<template>
  <header class="incorreta">
    <div>
      <h2>Mas que pena, você perdeu</h2>
      <p>Prêmio obtido: premio</p>
    </div>
    <div class="containerButtonsRespIncorreta">
      <Button label="Novo jogo" @click="$router.push('jogo')" />
      <Button label="Retornar ao menu" @click="$router.push('/')" />
    </div>
  </header>
</template>

<style scoped>
.incorreta {
  margin-top: 70px;
  text-align: center;
  width: 100%;
  height: 100%;
}
.containerButtonsRespIncorreta {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}
</style>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "Incorreta",
  components: { Button },
};
</script>
