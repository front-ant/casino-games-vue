<template>
  <div class="base-pagination">
    <button :disabled="isPreviousButtonDisabled" @click="previousPage">
      Previous
    </button>
    <button :disabled="isNextButtonDisabled" @click="nextPage">
      Next
    </button>
  </div>
</template>
<script>
export default {
  name: "BasePagination",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1;
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount;
    }
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    previousPage() {
      this.$emit("previousPage");
    }
  }
};
</script>
