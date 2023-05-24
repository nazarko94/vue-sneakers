<template>
  <div class="catalog__banner">
    <div class="catalog__banner content">
      <div class="content-logo">
        <img src="../../public/img/addidasLogo.png" alt="Addidas|Disney">
      </div>
      <h1 class="content-title">
        <span>Stan Smith,</span><br> Forever!
      </h1>
      <a href="#products" class="content-btn">Купити</a>
    </div>
    <catalog-swiper 
      class="catalog__banner-img" 
      :carousel_data="sliderItems"
      :interval="4000"
    />
  </div>
</template>

<script>
  import CatalogSwiper from './swiper/CatalogSwiper.vue';
  export default {
    name: 'CatalogBanner',
    components: {
       CatalogSwiper,
    },
    props: {
      sliderItems: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .catalog__banner {
    position: relative;
    background-color: #F4EFE9;
    height: 300px;
    margin-top: 45px;
    border-radius: 20px;
    &-img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .content {
    &-logo {
      margin-left: 20px;
      padding-top: 15px;
    }
    &-title {
      font-weight: 700;
      font-size: 38px;
      line-height: 46px;
      margin: 32px 0 0 60px;
      span {
        color: #8BB43C;
      }
    }
    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 47px;
      margin: 10px 0 0 60px;
      background-color: #A5D364;
      color: #ffffff;
      border-radius: 110px;
      text-decoration: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      &:hover {
        background-color: #8BB43C;
      }
    }
  }  
</style>