<template>
  <header class="correta">
    <div>
      <h2>Resposta correta</h2>
      <p>Prêmio atual: premio</p>
    </div>
    <div class="containerButtons">
      <Button label="Parar e voltar ao menu" @click="$router.push('/')" />
      <Button label="Continuar" @click="$router.push('/jogo')"/>
    </div>
  </header>
</template>

<style scoped>
.correta {
  margin-top: 70px;
  text-align: center;
  width: 100%;
  height: 100%;
}
.containerButtons{
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
  name: "Correta",
  components: { Button },
};
</script>
