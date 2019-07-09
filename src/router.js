import Vue from "vue";
import Router from "vue-router";
import Test1 from "./components/Test1.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/test1",
      name: "Test1",
      component: Test1
    }
  ]
});
