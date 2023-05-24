import { createStore } from "vuex";
import { createApp } from "vue";

const store = createStore({
  state: {
    searchValue: "",
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
    }
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
      commit("SET_SEARCH_VALUE_TO_VUEX", value);
    },
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
  },
});

export default store;
const app = createApp({});
app.use(store);
