<template>
  <header class="jogo">

    <div>
      <h3>Pergunta a ser feita?</h3>
    </div>
    <div class="containerButtons">
      <button class="botaoJogo" @click="jogo()">Resposta 1</button>
      <button class="botaoJogo" @click="$router.push('jogo')">
        Resposta 2
      </button>
      <button class="botaoJogo" @click="$router.push('jogo')">
        Resposta 3
      </button>
      <button class="botaoJogo" @click="$router.push('jogo')">
        Resposta 4
      </button>
    </div>
    <div class="eliminar">eliminar duas</div>
    <Button label="Confirmar" @click="$router.push('jogo')" />
    <br>
    <Button label="Voltar" @click="$router.push('/')" />
  </header>
</template>

<style scoped>
.jogo {
  margin-top: 70px;
  text-align: center;
}
.containerButtons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}
.botaoJogo {
  width: 100%;
  flex: 1 1 0px;
  border-color: #2c4416;
  border-width: 1px;
  border-radius: 10px;
  color: white;
  background-color: #2c4416;
  font-family: "roboto", sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
}
.eliminar {
  margin-top: 40px;
  margin-left: 470px;
  margin-bottom: 70px;
  cursor: pointer;
}
</style>

<script lang="ts">
import Button from "@/components/form/Button.vue";
import JogoEntity from "@/entity/Jogo";
import { jogoService } from "@/service/";
import { Options, Vue } from "vue-class-component";
@Options({
  data: () => ({
    user: "",
    senha: "",
  }),
    components: { Button },
  methods: {
    async jogo() {
      try {
        const jogo = new JogoEntity(parseFloat(localStorage.getItem('id') || ''), "start");
        const response = await jogoService.add(jogo);
        if (response) {
          console.log(response);
        }
      } catch (e) {
        alert("Erro!");
      }
    },
  },
})
export default class Jogo extends Vue {}
</script>