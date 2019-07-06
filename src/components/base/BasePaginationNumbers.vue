<template>
  <button @click="onClick">
    {{ pageNumber }}
  </button>
</template>
<script>
export default {
  name: "BasePaginationNumbers",
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("loadPage", this.pageNumber);
    }
  }
};
</script>
