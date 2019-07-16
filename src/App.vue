<template>
  <div id="app">
    <div class="login-wrapper" v-if="!loggedInStore">
      <nav>
        <div class="nav-tab" role="tablist">
          <router-link to="/" class="nav-link"> Login</router-link>
          <router-link to="/register" class="nav-link"> Register</router-link>
        </div>
      </nav>
      <router-view @submitted="toggleLogin"></router-view>
    </div>

    <MainPage v-if="loggedInStore" @logout="toggleLogin" />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Test1 from "./components/Test1.vue";
import Register from "./components/Register.vue";
import MainPage from "./components/MainPage.vue";
import * as APICalls from "./APICalls";
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    MainPage,
    Login,
    Register,
    Test1
  },
  data() {
    return {
      currentTab: "Login",
      tabs: ["Login", "Register"]
    };
  },
  computed: mapState(["loggedInStore"]),
  mounted: function() {
    const authToken = window.sessionStorage.getItem("auth_token");
    const user = window.sessionStorage.getItem("currentUser");
    if (authToken && user) {
      this.keepLoggedIn(user);
    } else return;
  },

  methods: {
    ...mapActions(["logUserIn", "logUserOut", "keepLoggedIn"]),
    toggleLogin(user, pw) {
      if (!this.loggedInStore) {
        if (user !== "" && pw !== "") {
          try {
            this.logUserIn(user, pw);
          } catch (err) {
            console.log(err);
          }
        } else if (user !== "" && pw === "") {
          alert("Please enter a password!");
        } else if (user === "" && pw !== "") {
          alert("Please enter a username!");
        } else alert("Please enter a username and password!");
      } else {
        this.logUserOut();
      }
    }
  }
};
</script>

<style src="./app.css"></style>
