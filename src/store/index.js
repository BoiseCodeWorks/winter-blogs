import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import blogModule from './blogModule.js'

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/winter19",
  timeout: 6000
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogModule
  },
  state: {
    blogs: [],
    activeBlog: {},
    comments: []
  },
  mutations: {
    resetState(state) {
      state.blogs = [];
      state.activeBlog = {}
      state.comments = []
    },
    setResource(state, payload) {
      state[payload.resource] = payload.data
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
    async createComment({ commit, dispatch }, comment) {
      let res = await _sandbox.post("comments", comment);
      commit("addComment", res.data.data);
    },
    async getComments({ commit, dispatch }, id) {
      let res = await _sandbox.get("blogs/" + id + "/comments");
      commit("setComments", res.data.data);
    }
  }
});
