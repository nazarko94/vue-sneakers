<template>
  <div class="catalog-favorite-wrapper">
    <catalog-favorite-item 
      v-for="(item, index) in favorite_data"
      @deleteFromFavorite="deleteFromFavorite(index)"
      :key="item.id"
      :favorite_item_data="item"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import CatalogFavoriteItem from './CatalogFavoriteItem.vue';
  export default {
    name: 'CatalogFavoriteWrapper',
    components: {
      CatalogFavoriteItem
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_FAVORITE'
      ]),
      deleteFromFavorite(index) {
        this.DELETE_FROM_FAVORITE(index);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>