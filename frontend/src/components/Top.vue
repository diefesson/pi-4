<template>
  <header class="top">
    <div class="home">
      <span v-on:click="onHomeClick" class="clicavel">Home</span>
    </div>
    <div class="auth-options">
      <span v-if="!authenticated" class="clicavel" v-on:click="onRegisterClick">
        Criar conta
      </span>
      <span v-if="authenticated" class="clicavel" v-on:click="onLogoutClick">
        Sair
      </span>
      <span>|</span>
      <span v-if="!authenticated" class="clicavel" v-on:click="onLoginClick"
        >Entrar</span
      >
      <span v-if="authenticated">{{ username }}</span>
      <div class="profile">
        <img src="https://img.icons8.com/ios/344/user-male--v1.png" alt="ola" />
      </div>
    </div>
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
  justify-content: space-between;
  align-items: center;
}

.top div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.home {
  font-size: 22px;
  font-family: "Roboto", sans-serif;
}

.auth-options {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}

.profile {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #F4F4F4;
  margin-left: 10px;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

.clicavel {
  cursor: pointer;
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
    async onHomeClick() {
      router.push("/");
    },
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
