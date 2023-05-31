<template>
  <div class="catalog__cart-item">
    <div class="catalog__products product-item">
      <div class="product-item__img">
        <img
          :src="require('../../public/img/sneakers/' + cart_item_data.image)"
          alt="Sneaker"
        />
      </div>
      <div class="product-item__desc">
        {{ cart_item_data.gender }}
      </div>
      <div class="product-item__desc name">
        {{ cart_item_data.name }}
      </div>
      <p class="product-item__price">
        <span>Ціна:</span> {{ cart_item_data.price }} грн.
      </p>
      <div 
        class="product-item__btn"
        @click="deleteFromCart"
        :title="msgToCart"
      >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogCartItem',
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart');
      }
    }
  }
</script>

<style lang="scss" scoped>
 .catalog__cart {
  &-item {
    margin-right: 25px;
  }
 }

 .product-item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 210px;
  height: 260px;
  padding: 22px 0 32px 0;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 29px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
  }
  &__img {
    img {
      width: 133px;
    }
  }
  &__desc {
    font-size: 14px;
    line-height: 17px;
    width: 150px;
  }
  .name {
      margin-bottom: 15px;
    }
  &__price {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-right: 50px;
    span {
      display: block;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #bdbdbd;
      margin-bottom: 5px;
    }
  }
  &__btn {
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    color: #d3d3d3;
    background-image: url('../../public/img/btn-remove.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
}
.check {
  background-image: url('../../public/img/btn-checked.svg');
}

.green {
  background-color: linear-gradient(180deg, #89F09C 0%, #3cc755 100%);
  border-radius: 8px;
}
</style>