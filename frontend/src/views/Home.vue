<template>
  <div class="menu">
    <button>Jogar</button>
    <button @click="$router.push('/add-question')">Adicionar pergunta</button>
    <button @click="$router.push('/list-questions')">Minhas perguntas</button>
    <button @click="logout()">Sair</button>
  </div>
</template>

<style scoped>
.menu {
  margin: 15px;
  gap: 10px;
  display: flex;
  margin-top: 50%;
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
  cursor: pointer;
  padding: 10px;
}
</style>

<script>
import router from "@/router";

export default {
  name: "Home",
  components: {},
  methods: {
    logout() {
      localStorage.clear("id");
      localStorage.clear("username");
      router.push("/login");
    },
  }
};
</script>
