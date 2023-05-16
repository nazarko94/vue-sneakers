<template>
  <div class="catalog">
    <div class="container">
      <catalog-header/>
      <hr class="line"/>
      <div class="catalog__banner">
        <div class="catalog__banner content">
          <div class="content-logo">
            <img src="../../public/img/addidasLogo.png" alt="Addidas|Disney">
          </div>
          <h1 class="content-title">
            <span>Stan Smith,</span><br> Forever!
          </h1>
          <a href="#" class="content-btn">Купити</a>
        </div>
        <catalog-swiper 
          class="catalog__banner-img" 
          :carousel_data="sliderItems"
          :interval="3000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogHeader from './CatalogHeader.vue';
import CatalogSwiper from './CatalogSwiper.vue';

  export default {
    name: 'CatalogWrapper',
    components: { 
      CatalogHeader,
      CatalogSwiper,
    },
    data() {
      return {
        sliderItems: [
          {id: 0, name: 'slideOne', img: 'slideOne.png'},
          {id: 1, name: 'slideTwo', img: 'slideTwo.png'},
          {id: 2, name: 'slideThree', img: 'slideThree.png'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .catalog {
    max-width: 1080px;
    margin: 0 auto;
    background-color: #ffffff;
    height: 1526px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    margin-top: 85px;
    &__banner {
      position: relative;
      background-color: #F4EFE9;
      height: 300px;
      margin-top: 45px;
      border-radius: 20px;
      &-img {
        position: absolute;
        top: 0px;
        right: 000px;
      }
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

  .line {
    margin-top: 45px;
    border: 1px solid #eaeaea;
}
</style>