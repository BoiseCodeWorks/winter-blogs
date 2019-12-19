<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Your StarLogs App</h1>
    <form @submit.prevent="createBlog">
      <input
        v-model="newBlog.title"
        type="text"
        placeholder="Blog Name"
        required
      />
      <input
        v-model="newBlog.body"
        type="text"
        placeholder="Description"
        required
      />
      <input v-model="newBlog.img" type="text" placeholder="Optional Image" />
      <button type="submit">Add Blog</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      newBlog: {
        title: "",
        body: "",
        img: ""
      }
    };
  }
};
</script>
