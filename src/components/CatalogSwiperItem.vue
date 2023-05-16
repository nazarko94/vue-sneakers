<template>
  <div class="catalog-swiper-item">
    <img :src="require('../../public/img/' + item_data.img)" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CatalogSwiperItem',
    props: {
      item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 640px;
    height: 300px;
    border-radius: 0 20px 20px 0;
  }
</style>