import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import CatalogMain from "@/components/CatalogMain.vue";
import CatalogCart from "@/cart/CatalogCart.vue";
import CatalogFavorite from "@/favorite/CatalogFavorite.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
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
  ],
});

export default router;

const app = createApp({});
app.use(router);