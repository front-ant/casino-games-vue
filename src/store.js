import Vue from "vue";
import Vuex from "vuex";
import * as APICalls from "./APICalls.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInStore: false,
    currentUser: "",
    gamesList: []
  },
  mutations: {
    logUserIn(state, user) {
      state.loggedInStore = true;
      state.currentUser = user;
    },
    logUserOut(state) {
      state.loggedInStore = false;
      state.currentUser = "";
    },
    addInitialGames(state, gameData) {
      state.gamesList = gameData;
    }
  },
  actions: {
    async logUserIn({ commit }, user, pw) {
      APICalls.postUserData(user, pw);
      let tokenData = await APICalls.getToken();
      window.sessionStorage.setItem("auth_token", tokenData.auth);
      window.sessionStorage.setItem("currentUser", tokenData.first_name);
      commit("logUserIn", user);
    },
    keepLoggedIn({ commit }, user) {
      commit("logUserIn", user);
    },
    logUserOut({ commit }) {
      commit("logUserOut");
      window.sessionStorage.removeItem("auth_token");
      window.sessionStorage.removeItem("currentUser");
    },
    addInitialGames({ commit }, gameData) {
      commit("addInitialGames", gameData);
    }
  }
});
