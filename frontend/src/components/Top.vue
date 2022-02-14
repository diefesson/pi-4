<template>
  <header class="top">
    <span v-if="!signed" @click="$router.push('/login')">Criar conta</span>
    <span v-if="signed" @click="logout()">Sair</span>
    <span>|</span>
    <span v-if="!signed">Entrar</span>
    <span v-if="signed">{{ username }}</span>
    <div class="profile"></div>
  </header>
</template>

<style scoped>
.top {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.top > span {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

.profile {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: darkgray;
}
</style>

<script>
import router from "@/router";

export default {
  data: () => {
    return {
      signed: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    logout() {
      localStorage.clear("id");
      localStorage.clear("username");
      router.push("/login");
    },
  },
};
</script>
