import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/winter19",
  timeout: 6000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    setAllBlogs(state, data) {
      state.blogs = data;
    },
    setActiveBlog(state, data) {
      state.activeBlog = data;
    },
    addBlog(state, data) {
      state.blogs.push(data);
    }
  },
  actions: {},
  modules: {}
});
