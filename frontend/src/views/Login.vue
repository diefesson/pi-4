<template>
  <header class="login">
    <div>
      <InputForm label="Usuário:" />
      <InputForm label="Senha:" />
      <div class="buttonLogin">
        <div>
          <Button label="Entrar" />
        </div>
        <div>
          <Button label="Cadastrar" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.buttonLogin {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 15px;
  align-items: center;
}
</style>

<script>
import InputForm from "@/components/form/InputForm.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "Login",
  components: {
    InputForm,
    Button,
  },
};
</script>
