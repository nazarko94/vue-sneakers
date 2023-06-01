import { createStore } from "vuex";
import { createApp } from "vue";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    cart: [],
    favorite: [],
    searchQuery: "",
  },
  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductsExsists = false;
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProductsExsists = true;
            item.quantity++;
          }
        });
        if (!isProductsExsists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_FAVORITE: (state, product) => {
      if (state.favorite.length) {
        let isProductsExsists = false;
        state.favorite.map((item) => {
          if (item.id === product.id) {
            isProductsExsists = true;
            item.quantity++;
          }
        });
        if (!isProductsExsists) {
          state.favorite.push(product);
        }
      } else {
        state.favorite.push(product);
      }
    },
    DELETE_FROM_FAVORITE({ сommit }, index) {
      сommit("REMOVE_FROM_FAVORITE", index);
    },
    REMOVE_FROM_FAVORITE: (state, index) => {
      state.favorite.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    SET_SEARCH_QUERY: (state, value) => {
      state.searchQuery = value;
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const products = await axios("http://localhost:3000/products", {
          method: "GET",
        });
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    ADD_TO_FAVORITE({ commit }, product) {
      commit("SET_FAVORITE", product);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
    GET_SEARCH_QUERY({commit}, value) {
      commit('SET_SEARCH_QUERY', value);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    FAVORITE(state) {
      return state.favorite;
    },
    SEARCH_QUERY(state) {
      return state.searchQuery;
    },
  },
});

export default store;
const app = createApp({});
app.use(store);
