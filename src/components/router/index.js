// import Vue from "vue";
// import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import VueRouter from "vue-router";

const Home = () => import("../../views/home/Home.vue");
const Category = () => import("../../views/category/Category.vue");
const Cart = () => import("../../views/cart/Cart.vue");
const Profile = () => import("../../views/profile/Profile.vue");

// createApp(App).use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  // mode: "history",
});

export default router;
