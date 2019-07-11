import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInStore: false,
    Boolean: true
  },
  mutations: {
    logUserIn(state) {
      state.loggedInStore = true;
    },
    logUserOut(state) {
      state.loggedInStore = false;
    },
    changeBoolean(state) {
      state.Boolean === false
        ? (state.Boolean = true)
        : (state.Boolean = false);
    }
  }
});
