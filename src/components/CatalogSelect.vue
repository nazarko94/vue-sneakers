<template>
  <div class="catalog-select">
   <div class="catalog-select__top" @click="toggleArrow">
     <div 
      class="catalog-select__title"
      @click="areOptionsVisiable = !areOptionsVisiable"
    >
      {{ selected }}
    </div>
    <div 
      class="catalog-select__arrow"
    >
      <img 
        src="../../public/img/arrowSelect.svg" 
        alt="Arrow" 
        :class="{toggle: isToggle}"
        @click.stop.prevent
      />
    </div>
   </div>
    <div 
      class="catalog-select__options"
      v-if="areOptionsVisiable"
    >
      <p 
        class="catalog-select__options-item"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogSelect',
    data() {
      return {
        areOptionsVisiable: false,
        isToggle: false,
      }
    },
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: '',
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option);
        this.areOptionsVisiable = false;
      },
      toggleArrow() {
        this.isToggle = !this.isToggle;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-select {
    position: relative;
    width: 250px;
    cursor: pointer;
    &__top {
      position: relative;
    }
    @media(max-width: 348px) {
      margin: 0 auto;
    } &__title {
      border: 1px solid #ddd;
      height: 45px;
      padding: 14px 10px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-weight: 400;
      opacity: 0.6;
    } 
    &__arrow {
      img {
        position: absolute;
        top: 8px;
        left: 200px;
        width: 60px;
        opacity: 0.6;
        transition: 0.3s; 
      }
    } 
    &__options-item {
      margin: 0;
      padding: 5px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
    &__options {
      border: 1px solid #ddd;
      position: absolute;
      top: 45px;
      right: 0;
      width: calc(100% - 2px);
      background-color: #fff;
      text-align: left;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-weight: 400;
      opacity: 0.6;
    }
  }
  .toggle {
    position: absolute;
    top: 47px;
    left: 400px;
    width: 60px;
    transform: rotate(180deg);  
  }
</style>