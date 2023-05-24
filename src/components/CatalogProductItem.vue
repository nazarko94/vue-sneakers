<template>
    <div class="catalog__products product-item">
      <div 
        class="product-item__btn like"
        :class="{ redBlock: isRedBlock, redHeart: isRed }" 
        @click="toggleRedBlock"
        :title="msgToFavorite" 
      >
      </div>
      <div class="product-item__img">
        <img
          :src="require('../../public/img/sneakers/' + product.image)"
          alt="Sneaker"
        />
      </div>
      <div class="product-item__desc">
        {{ product.gender }}
      </div>
      <div class="product-item__desc name">
        {{ product.name }}
      </div>
      <p class="product-item__price">
        <span>Ціна:</span> {{ product.price }}.
      </p>
      <div 
        class="product-item__btn"
        :class="{check : isChecked, green: isGreen}" 
        @click="toggleGreenBlock"
        :title="msgToCart"
      >
      </div>
    </div>
</template>

<script>
  export default {
    name: 'CatalogProductItem',
    data() {
      return {
        isRed: false,
        isRedBlock: false,
        isChecked: false,
        isGreen: false,
        msgToFavorite: 'Додати до обраних',
        msgToCart: 'Додати в кошик'
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      toggleRedBlock() {
        this.isRedBlock = !this.isRedBlock;
        this.isRed = !this.isRed;
      },
      toggleGreenBlock() {
        this.isChecked = !this.isChecked;
        this.isGreen = !this.isGreen;
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-item {
  position: relative;
  display: flex;
  justify-content: center;
  width: 210px;
  padding: 22px 0 32px 0;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
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
    background-image: url('../../public/img/btn-plus.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
}
.like {
  position: absolute;
  top: 30px;
  left: 30px;
  background: url('../../public/img/heart.svg') no-repeat;
  background-position: 5px;
  opacity: 0.3;

}

.redHeart {
  background: url('../../public/img/redHeart.svg') no-repeat;
  background-size: 22px;
  background-position: 3px;
  opacity: 1;
}

.redBlock {
  background-color: #FEF0F0;
}

.check {
  background-image: url('../../public/img/btn-checked.svg');
}

.green {
  background-color: linear-gradient(180deg, #89F09C 0%, #3cc755 100%);
  border-radius: 8px;
}
</style>