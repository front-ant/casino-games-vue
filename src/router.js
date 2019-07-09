import Vue from "vue";
import Router from "vue-router";
import Test1 from "./components/Test1.vue";
import Login from "./components/Login.vue";
import Test2 from "./components/Test2.vue";
import MainPage from "./components/MainPage.vue";
import Register from "./components/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/test1",
      name: "test1",
      component: Test1
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      name: "main",
      component: MainPage
    },
    {
      path: "/test2",
      name: "test2",
      component: Test2
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
