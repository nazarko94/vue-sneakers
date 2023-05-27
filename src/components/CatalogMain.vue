<template>
      <div class="catalog__main">
        <catalog-banner :sliderItems="sliderItems" />
        <catalog-search/>
        <div class="catalog__products" id="products">
          <catalog-product-item
            :product="product"
            v-for="product in PRODUCTS"
            :key="product.id"
            @addToCart="addToCart"
          />
        </div>
        <!-- <router-link :to="{name: 'cart'}">
          <div class="catalog__link">{{CART.length}}</div>
        </router-link> -->
      </div>
</template>

<script>
  import CatalogBanner from "./CatalogBanner.vue";
  import CatalogSearch from "./CatalogSearch.vue";
  import CatalogProductItem from "./CatalogProductItem.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
  name: "CatalogMain",
  components: {
    CatalogBanner,
    CatalogSearch,
    CatalogProductItem,
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
    };
  },
  methods: {
    sortedProductsBySearchValue(value) {
      if(value) {
        this.products = this.products.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase());
        })
      } else {
        this.GET_PRODUCTS_FROM_API();
      }
    },
    ...mapActions([
      'ADD_TO_CART',
      "GET_PRODUCTS_FROM_API"
    ]),
    addToCart(el) {
      this.ADD_TO_CART(el)
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortedProductsBySearchValue(this.SEARCH_VALUE);
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE',
      'PRODUCTS',
      "CART"
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.sortedProductsBySearchValue(this.SEARCH_VALUE);
  },
};
</script>

<style lang="scss" scoped>

</style>