<template>
  <div class="catalog">
    <div class="container">
      <catalog-header />
      <hr class="line" />
      <catalog-banner :sliderItems="sliderItems" />
      <catalog-search />
      <div class="catalog__products">
        <catalog-product-item 
          :product="product"
          v-for="product in products" 
          :key="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CatalogHeader from "./CatalogHeader.vue";
import CatalogBanner from "./CatalogBanner.vue";
import CatalogSearch from "./CatalogSearch.vue";
import CatalogProductItem from './CatalogProductItem.vue';


export default {
  name: "CatalogWrapper",
  components: {
    CatalogHeader,
    CatalogBanner,
    CatalogSearch,
    CatalogProductItem

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
   async fetchProducts() {
      try {
      const response = await axios.get('http://localhost:3000/products');
      this.products = response.data;
      } catch (e) {
        alert('Error');
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
}

.catalog {
  max-width: 1080px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  margin-top: 85px;
  &__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    padding-bottom: 20px;
  }
}

.line {
  margin-top: 45px;
  border: 1px solid #eaeaea;
}
</style>
