<template>
  <header class="login">
    <div>
      <div class="inputLabel">
        <p>Usuário:</p>
        <input type="text" class="inputForm" v-model="user" />
      </div>
      <div class="inputLabel">
        <p>Senha:</p>
        <input type="password" class="inputForm" v-model="senha" />
      </div>
      <div class="buttonLogin">
        <div>
          <Button label="Entrar" @click="() => created()" />
        </div>
        <div>
          <Button label="Cadastrar" @click="$router.push('/registrar')" />
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

<script lang="ts">
import Button from "@/components/form/Button.vue";
import { loginService } from "@/service/";
import LoginEntity from "@/entity/Login";
import { Options, Vue } from "vue-class-component";
import router from "@/router";

@Options({
  data: () => ({
    user: "",
    senha: "",
  }),
  components: {
    Button,
  },

  methods: {
    async created() {
      if (this.user === "" || this.senha === "") {
        alert("Os campos devem estar preenchidos");
      } else {
        try {
          const dataLogin = new LoginEntity(this.user, this.senha);

          const responseLogin = await loginService.add(dataLogin);
          if (responseLogin.player) {
            localStorage.setItem("username", responseLogin.player.username);
            localStorage.setItem("id", responseLogin.player.id.toString());
            
            router.push("/");
          }
        } catch (e) {
          alert("Usuário ou senha incorretos!");
        }
      }
    },
  },
})
export default class Login extends Vue {}
</script>
