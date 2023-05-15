<template>
  <div class="catalog">
    <div class="container">
      <catalog-header/>
      <hr class="line"/>
      <div class="catalog-banner">
        
      </div>
    </div>
  </div>
</template>

<script>
import CatalogHeader from './CatalogHeader.vue'
  export default {
  components: { CatalogHeader },
    name: 'CatalogWrapper',
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .catalog {
    max-width: 1080px;
    margin: 0 auto;
    background-color: #ffffff;
    height: 1526px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    margin-top: 85px;
  }  

  .line {
    margin-top: 45px;
    border: 1px solid #eaeaea;
}
</style>