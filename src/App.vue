<template>
  <catalog-wrapper/>
</template>

<script>
  import CatalogWrapper from "./components/CatalogWrapper.vue";
  export default {
    components: {
      CatalogWrapper
    },
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: #E7F6FF;
  }
</style>
