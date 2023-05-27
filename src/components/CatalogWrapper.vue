<template>
  <div class="catalog">
    <div class="container">
      <catalog-header />
      <hr class="line" />
      <!-- <catalog-main/>
      <catalog-cart 
        :cart_data="CART"
        v-if="CART.length"
      /> -->
      <router-view></router-view>
     </div>
    </div>  
</template>

<script>
  import CatalogHeader from './CatalogHeader.vue';
  // import CatalogMain from './CatalogMain.vue';
  // import CatalogCart from './CatalogCart.vue'
  import { mapGetters } from 'vuex';
  export default {
    name: 'CatalogWraper',
    components: {
      CatalogHeader,
      // CatalogMain,
      // CatalogCart,
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    }
  }

</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
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
