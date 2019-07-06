<template>
  <div class="base-pagination">
    <BaseButton
      :disabled="isPreviousButtonDisabled"
      @click.native="previousPage"
    >
      Previous
    </BaseButton>
    <BasePaginationNumbers :pageNumber="currentPage" @loadPage="onLoadPage" />
    <BaseButton :disabled="isNextButtonDisabled" @click.native="nextPage">
      Next
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";
import BasePaginationNumbers from "./BasePaginationNumbers.vue";
export default {
  name: "BasePagination",
  components: {
    BaseButton,
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
