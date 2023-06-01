<template>
  <div class="catalog-notification">
    <transition-group
      name="animate"
      class="catalog-notification__list"
      tag="div"
    >
        <div class="catalog-notification__content"
          v-for="message in messages"
          :key="message.id"
        >
          <span>{{message.name}}</span>
          <img src="../../../public/img/btn-checked.svg" alt="Checked">
        </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'CatalogNotification',
    props: {
      messages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      hideNotification() {
        let b = this;
        if(!this.messages.length) {
          setInterval(() => {
            b.messages.splice(b.messages.length - 1, 1);
        }, 3000);
        }
      }
    },
    mounted() {
      this.hideNotification();
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-notification {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 10;
    &__list {
      display: flex;
      flex-direction: column;
    }
    &__content {
      padding: 25px 15px;
      border-radius: 6px;
      color: #5c5c5c;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 16px;
      margin-bottom: 16px;            
      background-color: #fff;
      width: 250px;
      text-align: left;
      font-size: 13px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      &.error {
        background-color: #ff0000;
      }
      &.warning {
        background-color: orange;
      }
    }
    &__content-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
  }
  .animate {
  &-enter-from {
    transform: translateX(120px);
    opacity: 0;
  }
  &-enter-active {
    transition: all .6s ease;
  }
  
  &-leave-active {
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }
  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
  &-move {
    transition: transform .6s ease;
  }
}
</style>