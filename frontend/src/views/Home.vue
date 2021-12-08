<template>
  <div class="menu">
    <button>Jogar</button>
    <button>Estatisticas</button>
    <button>Hall da fama</button>
    <button>Minhas perguntas</button>
    <button>Sair</button>
  </div>
</template>

<style scoped>
.menu {
  margin: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu > button {
  width: 100%;
  flex: 1 1 0px;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  background-color: white;
  font-family: 'roboto', sans-serif;
  font-size: 24px;
  padding: 10px;
}
</style>

<script>
// TODO: link to other pages

export default {
  name: "Home",
  components: {},
};
</script>
