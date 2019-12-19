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
    activeBlog: {},
    comments: []
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
    },
    setComments(state, data) {
      state.comments = data;
    },
    addComment(state, data) {
      state.comments.push(data);
    }
  },
  actions: {
    async getAllBlogs({ commit, dispatch }) {
      let res = await _sandbox.get("blogs");
      commit("setAllBlogs", res.data.data);
    },
    async getActiveBlog({ commit, dispatch }, id) {
      let res = await _sandbox.get("blogs/" + id);
      commit("setActiveBlog", res.data.data);
    },
    async createBlog({ commit, dispatch }, blog) {
      let res = await _sandbox.post("blogs", blog);
      commit("addBlog", res.data.data);
    },
    async createComment({ commit, dispatch }, comment) {
      let res = await _sandbox.post("comments", comment);
      commit("addComment", res.data.data);
    },
    async getComments({ commit, dispatch }, id) {
      let res = await _sandbox.get("blogs/" + id + "/comments");
      commit("setComments", res.data.data);
    }
  },
  modules: {}
});
