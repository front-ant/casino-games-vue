<template>
  <div id="app">
    <div class="login-wrapper" v-if="!loggedIn">
      <nav>
        <div class="nav-tab" role="tablist">
          <router-link to="/" class="nav-link"> Login</router-link>
          <router-link to="/register" class="nav-link"> Register</router-link>
        </div>
      </nav>
      <router-view @submitted="toggleLogin"></router-view>
    </div>

    <MainPage v-if="loggedIn" @logout="toggleLogin" />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Test1 from "./components/Test1.vue";
import Register from "./components/Register.vue";
import MainPage from "./components/MainPage.vue";
import * as APICalls from "./APICalls";

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
      loggedIn: false,
      currentTab: "Login",
      tabs: ["Login", "Register"]
    };
  },
  mounted: function() {
    const authToken = window.sessionStorage.getItem("auth_token");

    if (authToken) {
      this.loggedIn = true;
    }
  },
  methods: {
    async toggleLogin(user, pw) {
      if (!this.loggedIn) {
        if (user !== "" && pw !== "") {
          try {
            APICalls.postUserData(user, pw);
            let tokenData = await APICalls.getToken();
            window.sessionStorage.setItem("auth_token", tokenData.auth);
            this.loggedIn = true;
            console.log(user);
          } catch (err) {
            console.log(err);
          }
        } else if (user !== "" && pw === "") {
          alert("Please enter a password!");
        } else if (user === "" && pw !== "") {
          alert("Please enter a username!");
        } else alert("Please enter a username and password!");
      } else {
        this.loggedIn = false;
        window.sessionStorage.removeItem("auth_token");
      }
    }
  }
};
</script>

<style src="./app.css"></style>
