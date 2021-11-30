<template>
  <header class="top">
    <span v-if="!signed">Criar conta</span>
    <span v-if="signed">Sair</span>
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
}

.profile {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: darkgray;
}
</style>

<script>
// TODO: use data from backend
// TODO: add actions

export default {
  data: () => {
    return {
      signed: true,
      username: "diefesson",
    };
  },
};
</script>