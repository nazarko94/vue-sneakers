<template>
  <div class="catalog">
    <div class="container">
      <catalog-header />
      <hr class="line" :cart-data="cart_data" />
      <div class="catalog__main">
        <catalog-banner :sliderItems="sliderItems" />
        <div class="catalog__navigation">
          <catalog-select
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
          />
          <h2 class="catalog__search-title">Всі кросівки</h2>
          <catalog-search />
        </div>
        <catalog-notification :messages="messages" />
        <div class="catalog__products" id="products">
          <catalog-product-item
            :product="product"
            v-for="product in filteredProducts"
            :key="product.id"
            @addToCart="addToCart"
            @addToFavorite="addToFavorite"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogHeader from "./CatalogHeader.vue";
import CatalogBanner from "./CatalogBanner.vue";
import CatalogSearch from "./CatalogSearch.vue";
import CatalogSelect from "./CatalogSelect.vue";
import CatalogNotification from "./notifications/CatalogNotification.vue";
import CatalogProductItem from "./CatalogProductItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CatalogMain",
  components: {
    CatalogHeader,
    CatalogBanner,
    CatalogSearch,
    CatalogProductItem,
    CatalogSelect,
    CatalogNotification,
  },
  data() {
    return {
      sliderItems: [
        { id: 0, name: "slideOne", img: "slideOne.png" },
        { id: 1, name: "slideTwo", img: "slideTwo.png" },
        { id: 2, name: "slideThree", img: "slideThree.png" },
        { id: 3, name: "slideFour", img: "slideFour.png" },
      ],
      products: [],
      categories: [
        { name: "Всі кросівки", value: "All" },
        { name: "Чоловічі кросівки", value: "M" },
        { name: "Жіночі кросівки", value: "F" },
      ],
      sortedProducts: [],
      selected: "Всі кросівки",
      messages: [],
    };
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "GET_PRODUCTS_FROM_API", "ADD_TO_FAVORITE"]),
    addToCart(el) {
      this.ADD_TO_CART(el).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift({
          name: "Товар додано в корзину",
          id: timeStamp,
        });
      });
    },
    addToFavorite(el) {
      this.ADD_TO_FAVORITE(el);
    },
    sortByCategories(category) {
      let a = this;
      this.PRODUCTS.map((item) => {
        if (category.name === item.category) {
          a.sortedProducts.push(item);
        }
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          a.selected = category.name;
          return e.category === category.name;
        });
      }
    },
    filteredByName(value) {
      this.sortedProducts = [...this.PRODUCTS];
      this.selected = "Всі кросівки";
      if (value) {
        this.sortedProducts = this.sortedProducts.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_QUERY"]),
    filteredProducts() {
      let b = this;
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        b.selected = "Всі кросівки";
        return this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_QUERY() {
      this.filteredByName(this.SEARCH_QUERY);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.filteredByName(this.SEARCH_QUERY);
  },
};
</script>

<style lang="scss" scoped>
.catalog__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
</style>
