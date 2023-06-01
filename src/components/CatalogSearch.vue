<template>
  <div class="catalog__search">
    <input 
      type="text" 
      class="catalog__search-field"
      placeholder="Пошук..."
    >
    <img
      src="../../public/img/search.svg" 
      alt="Search" 
      class="catalog__search-button"
    >
    <img
      src="../../public/img/plus.svg" 
      alt="clear" 
      class="catalog__search-clear"
      @click="clearSearchField"
    >
  </div>
  <!-- <div v-else class="catalog__search-error">
    <p>За даним запитом товарів не знайдено</p>
    <img src="../../public/img/sadSmile.png" alt="">
  </div> -->
</template>

<script>
  export default {
    name: 'CatalogSearch',
    data() {
      return {

      }
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .catalog__search {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
    }
    &-field {
      width: 250px;
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 14px;
      padding-left: 40px;
      line-height: 17px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      opacity: 0.6;
      &:focus, :active {
        outline: none;
        color: #000;
      }
    }
    &-button {
      position: absolute;
      top: 13px;
      right: 220px;
      cursor: pointer;
    }
    &-clear {
      position: absolute;
      top: 18px;
      right: 10px;
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
</style>