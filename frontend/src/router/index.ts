import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PauseStatus from "@/views/PauseView.vue";
import PauseView from "@/views/PauseView.vue";
import ListQuestionsView from "@/views/ListQuestionsView.vue";
import AddQuestionView from "@/views/AddQuestionView.vue";
import Game from "@/views/GameView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list-questions",
    name: "List questions",
    component: ListQuestionsView,
  },
  {
    path: "/add-question",
    name: "Add question",
    component: AddQuestionView,
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
    path: "/pause/:pauseStatus",
    name: "Correct",
    component: PauseView,
    props: true,
  },
  {
    path: "/pause/:pauseStatus",
    name: "Incorrect",
    component: PauseView,
    props: true,
  },
  {
    path: "/pause/:pauseStatus",
    name: "stop",
    components: PauseView,
    props: true,
  },
  {
    path: "/game",
    name: "game",
    component: Game,
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
