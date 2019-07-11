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
      <Game v-for="game in shownGames" :key="game.id" :game="game" />
    </div>
    <BasePagination
      :current-page="currentPage"
      :page-count="pageCount"
      @nextPage="pageChangeHandle('next')"
      @previousPage="pageChangeHandle('previous')"
      @firstPage="pageChangeHandle('first')"
      @lastPage="pageChangeHandle('last')"
      @loadPage="pageChangeHandle"
    />
  </main>
</template>

<script>
import Game from "./Game.vue";
import BasePagination from "./base/BasePagination.vue";

import * as APICalls from "../APICalls";
export default {
  name: "MainPage",
  static: {
    visibleItemsPerPageCount: 9
  },
  components: { Game, BasePagination },
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
  computed: {
    shownGames: function() {
      let visibleItems = this.$options.static.visibleItemsPerPageCount;
      return this.games.slice(
        this.currentPage * visibleItems - visibleItems,
        this.currentPage * visibleItems
      );
    },

    pageCount: function() {
      return Math.ceil(
        this.games.length / this.$options.static.visibleItemsPerPageCount
      );
    }
  },
  data() {
    return {
      games: [],
      loading: false,
      error: false,
      listView: false,
      currentPage: 1
    };
  },
  methods: {
    handleLogout: function() {
      this.$emit("logout");
    },
    toggleStyles: function() {
      this.listView ? (this.listView = false) : (this.listView = true);
    },
    pageChangeHandle(value) {
      let visibleItems = this.$options.static.visibleItemsPerPageCount;

      switch (value) {
        case "next":
          this.currentPage += 1;

          break;
        case "previous":
          this.currentPage -= 1;
          break;
        case "first":
          this.currentPage = 1;
          break;
        case "last":
          this.currentPage = this.pageCount;
          break;
        default:
          this.currentPage = value;
      }
    }
  }
};
</script>
<style src="../games-list.css"></style>
