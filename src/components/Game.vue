<template>
  <div class="game-entry">
    <img :src="image" class="game-img" :alt="title" />
    <div class="game-text">
      <h3 class="game-title">{{ title }}</h3>
      <p class="game-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
