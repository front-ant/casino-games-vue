<template>
  <div class="game-entry">
    <img :src="game.pic" class="game-img" :alt="game.title" />
    <div class="game-text">
      <h3 class="game-title">{{ game.title }}</h3>
      <p class="game-description">{{ game.tagline }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    game: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
