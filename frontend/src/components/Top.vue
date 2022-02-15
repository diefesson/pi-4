<template>
  <header class="top">
    <span v-if="!authenticated" v-on:click="onRegisterClick">Criar conta</span>
    <span v-if="authenticated" v-on:click="onLogoutClick">Sair</span>
    <span>|</span>
    <span v-if="!authenticated" v-on:click="onLoginClick">Entrar</span>
    <span v-if="authenticated">{{ username }}</span>
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
import { authService } from "@/service";

export default {
  data: () => ({
    authenticated: authService.isAuthenticated(),
    username: authService.getUsername(),
  }),
  methods: {
    async onLoginClick() {
      router.push("/login");
    },
    async onRegisterClick() {
      router.push("/registrar");
    },
    async onLogoutClick() {
      authService.logout();
      await router.push("/");
      router.go(0);
    },
  },
};
</script>
