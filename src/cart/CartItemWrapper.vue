<template>
  <div class="cart__item-wrapper">
    <catalog-cart-item 
      v-for="(item, index) in cart_data"
      :key="item"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @incrementItem="incrementItem(index)"
      @decrementItem="decrementItem(index)"
    />
    <catalog-popup v-if="isPopupVisiable" @closePopup="closePopup"/>
  </div>
  <div class="footer">
    <div class="cart__item-footer">
      <p class="cart__item-footer-totalCost">Всього: </p>
      <b class="cart__item-footer-totalSum">{{cartTotalCost}} грн.</b>
    </div>
    <a class="catalog__cart-btn totalCostBtn" @click="showPopup">
      Оформити замовлення
      <img class="arrow" src="../../public/img/arrow.svg" alt="Arrow"/>
    </a>
  </div>
</template>

<script>
  import CatalogPopup from '@/components/popup/CatalogPopup.vue';
  import CatalogCartItem from './CatalogCartItem.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'CartItemWrapper',
    data() {
      return {
        isPopupVisiable: false,
      }
    },
    components: {
      CatalogCartItem,
      CatalogPopup,
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM',
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      },
      incrementItem(index) {
        this.INCREMENT_CART_ITEM(index);
      },
      decrementItem(index) {
        this.DECREMENT_CART_ITEM(index);
      },
      showPopup() {
        this.isPopupVisiable = true;
      },
      closePopup() {
        this.isPopupVisiable = false;
      }
    },
    computed: {
      cartTotalCost() {
        let result = [];
        for(let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => {
          return sum + el;
        }, 0);
        return result;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding-bottom: 30px;
  }
  .cart__item-wrapper {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
  }
  .cart__item-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    &-totalCost {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-right: 20px;
    }
    &-totalSum {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
  }
  .totalCostBtn {
    margin: 20px auto 0;
  }
  .arrow {
      transform: rotate(360deg);
    }
</style>