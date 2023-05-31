<template>
    <div>
      <cart-item-wrapper
        :cart_data="CART"
        v-if="CART.length"
      />
      <div v-if="!CART.length" class="catalog__cart">
        <div class="catalog__cart-img">
          <img src="../../public/img/empty-cart.jpg" alt="Empty cart"/>
        </div>
        <h2 class="catalog__cart-title">Корзина пуста</h2>
        <p class="catalog__cart-desc">Додайте туди хоча б один товар, щоб зробити замовлення</p>
        <router-link :to="{name: 'catalog'}" class="catalog__cart-btn">
            <img src="../../public/img/arrow.svg" alt="Arrow">
            Повернутись назад
        </router-link>
      </div>
    </div>
</template>

<script>
import CartItemWrapper from './CartItemWrapper.vue';
import { mapGetters } from 'vuex';
  export default {
    name: 'CatalogCart',
    components: {
      CartItemWrapper
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    }
  }
</script>

<style lang="scss">
  .catalog__cart {
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