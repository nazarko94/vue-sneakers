<template>
  <div class="catalog__header">
    <div class="catalog__header leftSide">
      <div class="leftSide__image">
        <img
          src="../../public/img/logo.png"
          alt="Logo"
          class="leftSide__image-img"
        />
      </div>
      <div class="leftSide__text">
        <h2 class="leftSide__text-title">Vue sneakers</h2>
        <p class="leftSide__text-desc">Магазин найкращих кросівок</p>
      </div>
    </div>
    <div class="catalog__header rightSide">
      <div class="rightSide__cart">
        <router-link :to="{name: 'cart'}">
          <img
            src="../../public/img/cart.svg"
            alt="Cart"
            class="rightSide__cart-img"
            :title="msgCart"
          />
        </router-link>
        <p class="rightSide__cart-price">{{cartTotalCost}} грн.</p>
      </div>
      <div class="rightSide__favorite">
        <router-link :to="{name: 'favorite'}">
          <img 
            src="../../public/img/heart.svg" 
            alt="Heart" 
            :title="msgHeart"
          />
        </router-link>
      </div>
      <div class="rightSide__user">
        <router-link :to="{name: 'login'}">
          <img 
            src="../../public/img/user.svg" 
            alt="User"
            :title="msgLogout"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "CatalogHeader",
  data() {
    return {
      msgCart: 'Кошик',
      msgHeart: 'Обране',
      msgLogout: 'Вийти'
    }
  },
  computed: {
      ...mapGetters([
        'CART'
      ]),
      cartTotalCost() {
        let result = [];
        for(let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => {
          return sum + el;
        }, 0);
        return result;
      },
    }
};
</script>

<style lang="scss" scoped>
.catalog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  box-sizing: border-box;
}

.leftSide {
  &__image-img {
    width: 40px;
    height: 40px;
  }
  &__text {
    margin-left: 16px;
    &-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
    }
    &-desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #9d9d9d;
    }
  }
}
.rightSide {
  &__cart,
  &__favorite,
  &__user {
    display: flex;
    margin-right: 30px;
    cursor: pointer;
    &-price {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #5c5c5c;
      margin-left: 10px;
      margin-top: 2px;
      vertical-align: center;
    }
  }
  &__user {
    margin-right: 0;
  }
}
</style>
