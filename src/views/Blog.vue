<template>
  <div class="blog container-fluid">
    blog view here
    {{ blog }}
  </div>
</template>

<script>
export default {
  name: "blog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  }
};
</script>

<style></style>
