import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/blogs/:id",
    name: "blog",
    component: Blog,
    beforeEnter: (to, from, next) => {
      let confirmed = window.confirm('You have unsaved changes are you sure you want to leave this page?')
      next(confirmed)
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   debugger
//   if (to.name == 'blog') {
// let confirmed = window.confirm('You have unsaved changes are you sure you want to leave this page?')
// next(confirmed)
//     return
//   }
//   next()
// })

export default router;
