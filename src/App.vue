<template>
  <div id="app">
    <div class="login-wrapper" v-if="!loggedIn">
      <nav>
        <div class="nav-tab" role="tablist">
          <a
            :class="['nav-link', { active: currentTab === tab }]"
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
          >
            {{ tab }}</a
          >
        </div>
      </nav>
      <component
        :is="this.currentTab"
        class="form-container"
        @submitted="toggleLogin"
      />
    </div>

    <MainPage v-if="loggedIn" @logout="toggleLogin" />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "app",
  components: {
    MainPage,
    Login,
    Register
  },
  data() {
    return {
      loggedIn: false,
      currentTab: "Login",
      tabs: ["Login", "Register"]
    };
  },
  methods: {
    toggleLogin: function() {
      this.loggedIn ? (this.loggedIn = false) : (this.loggedIn = true);
      console.log(this.loggedIn);
    }
  }
};
</script>

<style src="./app.css"></style>
