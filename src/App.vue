<template>
  <div id="app">
    <div class="login-wrapper" v-if="!loggedIn">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <component :is="this.currentTab" class="tab" @submitted="toggleLogin" />
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

<style>
header {
  text-align: center;
}
body {
  text-align: center;
  font-family: sans-serif;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
