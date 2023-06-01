<template>
  <div class="catalog__cart-item">
    <div class="catalog__products product-item">
      <div class="product-item__img">
        <img
          :src="require('../../public/img/sneakers/' + favorite_item_data.image)"
          alt="Sneaker"
        />
      </div>
      <div class="product-item__desc">
        {{ favorite_item_data.category }}
      </div>
      <div class="product-item__desc name">
        {{ favorite_item_data.name }}
      </div>
      <p class="product-item__price">
        <span>Ціна:</span> {{ favorite_item_data.price }} грн.
      </p>
      <div 
        class="product-item__btn"
        @click="deleteFromFavorite"
        :title="msgToCart"
      >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogFavoriteItem',
    props: {
      favorite_item_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    methods: {
      deleteFromFavorite() {
        this.$emit('deleteFromFavorite');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>