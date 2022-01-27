<template>
  <header class="register">
    <form @submit="test">
      <div class="inputsStyles">
        <div class="inputLabel">
          <p>Nickname:</p>
          <input type="text" class="inputForm" v-model="nickname" />
        </div>
        <div class="inputLabel">
          <p>Usuário:</p>
          <input type="text" class="inputForm" v-model="user" />
        </div>
        <div class="inputLabel">
          <p>Senha:</p>
          <input type="password" class="inputForm" v-model="senha" />
        </div>
        <div class="inputLabel">
          <p>Confirmar senha:</p>
          <input type="password" class="inputForm" v-model="confirmarSenha" />
        </div>
      </div>
      <div class="buttonRegister">
        <div>
          <Button label="Criar conta" type="submit" />
        </div>
      </div>
    </form>
  </header>
</template>

<style scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.buttonRegister {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 15px;
  align-items: center;
}
.inputsStyles {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.inputLabel {
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
}
.inputLabel > p {
  width: 80px;
  flex-wrap: wrap;
}
.inputForm {
  all: unset;
  background: #fff;
  width: 400px;
  height: 21px;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
}
</style>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "Register",
  data: () => ({
    nickname: null,
  }),
  components: {
    Button,
  },

  methods: {
    test: function () {
      alert(this.nickname);
    },
  },
};
</script>
