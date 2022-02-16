import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Correta from "@/views/Correta.vue";
import Incorreta from "@/views/Incorreta.vue";
import ListQuestions from "@/views/ListQuestionsView.vue";
import AddQuestion from "@/views/AddQuestionView.vue";
import Jogo from "@/views/Jogo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list-questions",
    name: "List questions",
    component: ListQuestions,
  },
  {
    path: "/add-question",
    name: "Add question",
    component: AddQuestion,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registrar",
    name: "Register",
    component: Register,
  },
  {
    path: "/correto",
    name: "Correta",
    component: Correta,
  },
  {
    path: "/incorreto",
    name: "Incorreta",
    component: Incorreta,
  },
  {
    path: "/jogo",
    name: "Jogo",
    component: Jogo,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
