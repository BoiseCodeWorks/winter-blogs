<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Your StarLogs App</h1>
    <form @submit.prevent="createBlog" class="d-flex">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="newBlog.title"
          type="text"
          class="form-control"
          placeholder="Blog Name"
          id="title"
          required
        />
      </div>
      <div class="form-group">
        <label for="desc">Description</label>
        <input
          class="form-control"
          v-model="newBlog.body"
          type="text"
          placeholder="Description"
          id="desc"
          required
        />
      </div>
      <div class="form-group">
        <label for="img">Image Url</label>
        <input
          class="form-control"
          id="img"
          v-model="newBlog.img"
          type="text"
          placeholder="Optional Image"
        />
      </div>
      <button class="btn btn-outline-success" type="submit">Add Blog</button>
    </form>

    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="{ name: 'blog', params: { id: blog.id } }">{{
          blog.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {
      newBlog: {
        title: "",
        body: "",
        img: ""
      }
    };
  },
  methods: {
    createBlog() {
      let blog = { ...this.newBlog };
      this.$store.dispatch("createBlog", blog);
      this.newBlog = {
        title: "",
        body: "",
        img: ""
      };
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  }
};
</script>
