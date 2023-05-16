<template>
  <div class="wrapper">
    <div 
      class="catalog-swiper"
      :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
    >
      <catalog-swiper-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </div>
    <div class="arrows">
      <div class="circle" @click="prevSlide">
        <img src="../../public/img/switch.svg" class="arrow" alt="arrow">
      </div>
      <div class="circle" @click="nextSlide">
        <img src="../../public/img/switch.svg" class="arrow last" alt="arrow">
      </div>
    </div>
  </div>
</template>

<script>
import CatalogSwiperItem from './CatalogSwiperItem.vue';

  export default {
    name: 'CatalogSwiper',
    components: {
      CatalogSwiperItem,
    },
    props: {
      carousel_data: {
        type: Array,
        default() {
          return []
        }
      },
      interval: {
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        currentSlideIndex: 0,
      }
    },
    methods: {
      prevSlide() {
        if(this.currentSlideIndex > 0) {
          this.currentSlideIndex--;
        }
      },
      nextSlide() {
        if(this.currentSlideIndex >= this.carousel_data.length - 1) {
          this.currentSlideIndex = 0;
        } else {
          this.currentSlideIndex++;
        }
      },
    },
    mounted() {
      if(this.interval > 0) {
        let vm = this;
        setInterval(function() {
          vm.nextSlide()
        }, vm.interval);
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    max-width: 640px;
    overflow: hidden;
    margin: 0 auto;
  }
  .catalog-swiper {
    display: flex;
    transition: all ease .5s;
  }
  .arrows {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  .circle {
    position: relative;
    bottom: 170px;
    width: 35px;
    height: 35px;
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: 43px;
    transform: rotate(-180deg);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  }
  .arrow {
    position: absolute;
    top: 10px;
    left: 17px;
  }

  .last {
    transform: rotate(-180deg);
    left: 12px;
  }
</style>