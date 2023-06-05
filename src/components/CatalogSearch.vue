<template>
  <form v-if="!product_data.length" class="catalog__search">
    <input 
      name="query" 
      class="catalog__search-field"
      placeholder="Пошук..."
      v-model="searchQuery"
    >
    <img
      src="../../public/img/search.svg" 
      alt="Search" 
      class="catalog__search-button"
      @click="event => searchByName(searchQuery)"
    >
    <img
      src="../../public/img/plus.svg" 
      alt="clear" 
      class="catalog__search-clear"
      @click="$event => clearSearch()"
    >
  </form>
  <div v-else class="catalog__search-error">
    <p>За даним запитом товарів не знайдено</p>
    <img src="../../public/img/sadSmile.png" alt="">
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'CatalogSearch',
    data() {
      return {
        searchQuery: '',
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
    methods: {
      ...mapActions([
        "GET_SEARCH_QUERY"
      ]),
      searchByName(name) {
        this.GET_SEARCH_QUERY(name);
      },
      clearSearch() {
        this.searchQuery = '';
        this.GET_SEARCH_QUERY();
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