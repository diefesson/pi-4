<template>
  <header class="register">
    <form @submit="created()">
      <div class="inputsStyles">
        <div class="inputLabel">
          <p>Username:</p>
          <input type="text" class="inputForm" v-model="username" required />
        </div>
        <div class="inputLabel">
          <p>email:</p>
          <input type="email" class="inputForm" v-model="email" required />
        </div>
        <div class="inputLabel">
          <p>Senha:</p>
          <input type="password" class="inputForm" v-model="senha" required />
        </div>
        <div class="inputLabel">
          <p>Confirmar senha:</p>
          <input
            type="password"
            class="inputForm"
            v-model="confirmarSenha"
            required
          />
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
  color: #000;
  width: 400px;
  height: 21px;
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
}
</style>

<script>
import Button from "@/components/form/Button.vue";
import { cadastroService } from "@/service/";
import CadastroEntity from "@/entity/Cadastro";

export default {
  name: "Register",
  data: () => ({
    username: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  }),
  components: {
    Button,
  },

  methods: {
    async created() {
      if (this.confirmarSenha !== this.senha) {
        alert("Os campos de senha devem ser iguais!");
        return;
      }
      if (this.senha.length < 6 || this.username.length < 6) {
        alert("Os campos de senha e username devem ter mais de 5 caracteres!");
        return;
      }
      try {
          const dataCastro = new CadastroEntity(1, this.username, this.email, this.senha);

          const responseCadastro = await cadastroService.add(dataCastro);

          console.log(responseCadastro);
          // if (responseCadastro.player) {
          //   localStorage.setItem("username", responseLogin.player.username);
          //   localStorage.setItem("id", responseLogin.player.id.toString());
            
          //   router.push("/");
          // }
        } catch (e) {
          alert("Usuário ou senha incorretos!");
        }
    },
  },
};
</script>
