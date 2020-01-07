import axios from "axios";

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/winter19",
  timeout: 6000
});

export default {
  actions: {
    async getAllBlogs({ commit, dispatch }) {
      let res = await _sandbox.get("blogs");
      commit("setResource", { resource: 'blogs', data: res.data.data });
    },
    async getActiveBlog({ commit, dispatch }, id) {
      let res = await _sandbox.get("blogs/" + id);
      commit("setResource", { resource: 'activeBlog', data: res.data.data });
    },
    async createBlog({ commit, dispatch }, blog) {
      let res = await _sandbox.post("blogs", blog);
      commit("addBlog", res.data.data);
    }
  }
}