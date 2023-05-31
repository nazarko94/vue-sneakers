<template>
  <favorite-item-wrapper
    v-if="FAVORITE.length"
    :favorite_data="FAVORITE"
  />
  <div v-if="!FAVORITE.length" class="catalog__favorite">
    <div class="catalog__favorite-img">
      <img src="../../public/img/cryingSmile.png" alt="Sad smile"/>
    </div>
    <h2 class="catalog__favorite-title">Закладок нема</h2>
    <p class="catalog__favorite-desc">Ви нічого не додали в обране</p>
    <router-link :to="{name: 'catalog'}" class="catalog__favorite-btn">
        <img src="../../public/img/arrow.svg" alt="Arrow">
        Повернутись назад
    </router-link>
  </div>
</template>

<script>
  import FavoriteItemWrapper from './FavoriteItemWrapper.vue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'CatalogFavorite',
    components: {
      FavoriteItemWrapper
    },
    computed: {
      ...mapGetters([
        'FAVORITE'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .catalog__favorite {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
     &-title {
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
    }
    &-desc {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      opacity: 0.4;
      width: 285px;
      margin-top: 10px;
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 245px;
      height: 55px;
      margin-top: 40px;
      background-color: #9DD458;
      border-radius: 18px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
        img {
          padding-left: 15px;
          transform: rotate(180deg);
        }
        &:hover {
          background-color: #8BB43C;
        }
      }
  }
</style>