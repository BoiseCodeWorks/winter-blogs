<template>
  <div class="comments">
    <form @submit.prevent="createComment">
      <input
        v-model="comment"
        type="text"
        placeholder="Comment Here"
        required
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Comments",
  mounted() {
    this.$store.dispatch("getComments", this.$route.params.id);
  },
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    createComment() {
      let comment = {
        content: this.comment,
        blogId: this.$route.params.id
      };
    }
  }
};
</script>

<style></style>
