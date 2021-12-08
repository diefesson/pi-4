<template>
  <div class="menu">
    <router-link to="#"><button>Jogar</button></router-link>
    <router-link to="#"><button>Estatisticas</button></router-link>
    <router-link to="#"><button>Hall da fama</button></router-link>
    <router-link to="#"><button>Minhas perguntas</button></router-link>
    <router-link to="#"><button>Sair</button></router-link>
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
  font-family: "roboto", sans-serif;
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
