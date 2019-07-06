<template>
  <div class="base-pagination">
    <button :disabled="isPreviousButtonDisabled" @click="previousPage">
      Previous
    </button>
    <BasePaginationNumbers :pageNumber="currentPage" @loadPage="onLoadPage" />
    <button :disabled="isNextButtonDisabled" @click="nextPage">
      Next
    </button>
  </div>
</template>
<script>
import BasePaginationNumbers from "./BasePaginationNumbers.vue";
export default {
  name: "BasePagination",
  components: {
    BasePaginationNumbers
  },
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
    },
    onLoadPage(value) {
      this.$emit("loadPage", value);
    }
  }
};
</script>
