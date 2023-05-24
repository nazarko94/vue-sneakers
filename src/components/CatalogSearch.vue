<template>
 <div class="catalog__search">
    <h2 class="catalog__search-title">
      Всі кросівки
    </h2>
    <input 
      type="text" 
      class="catalog__search-field"
      placeholder="Пошук..."
      v-model="searchValue"
    >
    <img
      src="../../public/img/search.svg" 
      alt="Search" 
      class="catalog__search-button"
      @click="search(searchValue)"
    >
    <img
      src="../../public/img/plus.svg" 
      alt="clear" 
      class="catalog__search-clear"
      @click="clearSearchField"
    >
  </div>
  <div class="catalog__search-error">
    <p>За даним запитом товарів не знайдено</p>
    <img src="../../public/img/sadSmile.png" alt="">
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'CatalogSearch',
    data() {
      return {
        searchValue: '',
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
    computed: {
      ...mapGetters([
        'SEARCH_VALUE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX',
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value);
      },
      clearSearchField() {
        this.searchValue = '';
        this.GET_SEARCH_VALUE_TO_VUEX();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catalog__search {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
    }
    &-field {
      width: 250px;
      height: 45px;
      border: 1px solid #F3F3F3;
      border-radius: 10px;
      font-size: 14px;
      padding-left: 40px;
      line-height: 17px;
      color: #C4C4C4;
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