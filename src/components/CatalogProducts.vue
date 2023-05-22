<template>
  <div class="catalog__products">
    <catalog-product-item :product="sneaker" v-for="sneaker in sneakers" :key="sneaker.id"/>
  </div>
</template>

<script>
  import CatalogProductItem from './CatalogProductItem.vue';
  export default {
    name: 'CatalogProducts',
    components: {
      CatalogProductItem,
    },
    props: {
      sneakers: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .catalog__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    padding-bottom: 20px;
  }
</style>