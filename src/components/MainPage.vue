<template>
  <main>
    <header>
      <h1>Welcome!</h1>
    </header>
    <nav>
      <button @click="handleLogout">Logout</button>
      <button @click="toggleStyles">Toggle View</button>
    </nav>
    <div :class="{ 'list-view': listView, 'grid-view': !listView }">
      <Game
        v-for="game in games"
        :key="game.id"
        :title="game.title"
        :image="game.pic"
        :description="game.tagline"
      />
    </div>
  </main>
</template>

<script>
import Game from "./Game.vue";

import * as APICalls from "../APICalls";
export default {
  name: "MainPage",
  components: { Game },
  mounted: async function() {
    this.loading = true;
    try {
      let loadedGames = await APICalls.loadGames();
      this.games = loadedGames;
      this.loading = false;
    } catch (error) {
      this.error = true;
    }
  },
  data() {
    return {
      games: [],
      loading: false,
      error: false,
      listView: false
    };
  },
  methods: {
    handleLogout: function() {
      this.$emit("logout");
    },
    toggleStyles: function() {
      this.listView ? (this.listView = false) : (this.listView = true);
    }
  }
};
</script>
<style src="../games-list.css"></style>
