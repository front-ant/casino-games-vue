<template>
  <div class="base-pagination">
    <button :disabled="isStartButtonDisabled" @click="firstPage">
      First Page
    </button>
    <button :disabled="isPreviousButtonDisabled" @click="previousPage">
      Previous
    </button>
    <button :disabled="isNextButtonDisabled" @click="nextPage">
      Next
    </button>
    <button :disabled="isLastButtonDisabled" @click="lastPage">
      Last Page
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
    },
    isStartButtonDisabled() {
      return this.currentPage === 1;
    },
    isLastButtonDisabled() {
      return this.currentPage === this.pageCount;
    }
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    previousPage() {
      this.$emit("previousPage");
    },
    firstPage() {
      this.$emit("firstPage");
    },
    lastPage() {
      this.$emit("lastPage");
    }
  }
};
</script>
