<template>
  <div class="blog container-fluid">
    blog view here
    {{ blog }}
    <h1>Comments:</h1>
    <comments />
  </div>
</template>

<script>
import Comments from "../components/Comments";
export default {
  name: "blog",
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  components: {
    Comments
  }
};
</script>

<style></style>
