import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Questions from "@/views/Questions.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Correta from "@/views/Correta.vue";
import Incorreta from "@/views/Incorreta.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
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
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
