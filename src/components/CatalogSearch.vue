<template>
 <div class="catalog__search">
    <h2 class="catalog__search-title">
      Всі кросівки
    </h2>
    <input 
      type="text" 
      class="catalog__search-field"
      placeholder="Пошук..."
    >
  </div>
</template>

<script>
  export default {
    name: 'CatalogSearch',
  }
</script>

<style lang="scss" scoped>
  .catalog__search {
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
      background: url('../../public/img/search.svg') no-repeat;
      background-position: 15px;
      padding-left: 45px;
      font-size: 14px;
      line-height: 17px;
      color: #C4C4C4;
      opacity: 0.6;
      cursor: pointer;
      &:focus {
        outline: none;
        color: #000;
      }
    }
  }
</style>