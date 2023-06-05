<template>
  <div class="catalog-popup__wrapper">
    <div class="catalog-popup">
      <div class="catalog-popup__header">
        <div class="catalog-popup__close" @click="closePopup">
          <img src="../../../public/img/plus.svg" alt="Cross">
        </div>
      </div>
      <div class="catalog-popup__content">
        <slot></slot>
        <img src="../../../public/img/complete-order.jpg" alt="Complete order">
        <p class="catalog-popup__title">Ваше замовлення <br> успішно виконано!</p>
      </div>
      <div class="catalog-popup__footer" @click="closePopup">
        <button class="catalog-popup__btn catalog__cart-btn">Готово</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogPopup',
    methods: {
      closePopup() {
        this.$emit('closePopup');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-popup {
    padding: 16px;
    position: fixed;
    top: 160px;
    min-width: 500px;
    left: calc(50% - 200px);
    z-index: 3;
    background-color: #fff;
    border-radius: 20px;
    &__header, &__footer {
      display: flex;
      justify-content: right;
      align-items: center;
    }
    &__footer {
      justify-content: center;
    }
    @media (max-width: 768px) {
      width: 300px;
      left: calc(50% - 160px);
    }
    @media (max-width: 768px) {
      width: 260px;
      left: calc(50% - 146px);
    }
    &__title {
      z-index: 5;
      margin-top: 15px;
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      color: #87C20A;
    }
    &__close {
      transform: rotate(45deg);
      cursor: pointer;
      img {
        width: 20px;
      }
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(64, 64, 64, 0.7);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      height: 100%;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__btn {
      border: none;
      margin-bottom: 20px;
    }
  }
</style>