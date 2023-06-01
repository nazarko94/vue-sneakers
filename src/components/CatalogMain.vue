<template>
      <div class="catalog__main">
        <catalog-banner :sliderItems="sliderItems" />
        <div class="catalog__navigation">
          <h2 class="catalog__search-title">
            Всі кросівки
          </h2>
          <catalog-select 
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
          />
          <catalog-search/>
        </div>
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
</template>

<script>
  import CatalogBanner from "./CatalogBanner.vue";
  import CatalogSearch from "./CatalogSearch.vue";
  import CatalogSelect from "./CatalogSelect.vue";
  import CatalogProductItem from "./CatalogProductItem.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
  name: "CatalogMain",
  components: {
    CatalogBanner,
    CatalogSearch,
    CatalogProductItem,
    CatalogSelect,
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
        {name: 'Всі кросівки', value: 'All'},
        {name: 'Чоловічі кросівки', value: 'M'},
        {name: 'Жіночі кросівки', value: 'F'},
      ],
      sortedProducts: [],
      selected: 'Всі кросівки',
    };
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART',
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_FAVORITE"
    ]),
    addToCart(el) {
      this.ADD_TO_CART(el)
    },
    addToFavorite(el) {
      this.ADD_TO_FAVORITE(el);
    },
    sortByCategories(category) {
      let a = this;
      this.PRODUCTS.map((item) => {
        if(category.name === item.category) {
          a.sortedProducts.push(item);
        }
      })
      if(category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          a.selected = category.name;
          return e.category === category.name;
        })
      }
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      "CART"
    ]),
    filteredProducts() {
      let b = this;
      if(this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        b.selected = 'Всі кросівки';
        return this.PRODUCTS;
      }
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
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