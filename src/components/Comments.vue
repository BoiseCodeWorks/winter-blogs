<template>
  <div class="comments">
    <form @submit.prevent="createComment">
      <input
        v-model="comment"
        type="text"
        placeholder="Comment Here"
        required
      />
      <button type="submit">Add Comment</button>
    </form>
    {{ comments }}
  </div>
</template>

<script>
export default {
  name: "Comments",
  mounted() {
    this.$store.dispatch("getComments", this.$route.params.id);
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    }
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
        blog: this.$route.params.id
      };
      this.$store.dispatch("createComment", comment);
      this.comment = "";
    }
  }
};
</script>

<style></style>
