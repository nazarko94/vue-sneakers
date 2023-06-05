import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import CatalogMain from "@/components/CatalogMain.vue";
import CatalogCart from "@/cart/CatalogCart.vue";
import CatalogFavorite from "@/favorite/CatalogFavorite.vue";
import RegisterForm from "@/RegisterForm.vue";
import LoginForm from "@/LoginForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogMain,
    },
    {
      path: "/cart",
      name: "cart",
      component: CatalogCart,
      props: true,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: CatalogFavorite,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm,
    },
  ],
});

export default router;

const app = createApp({});
app.use(router);