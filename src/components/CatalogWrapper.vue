<template>
  <!-- <login-form/> -->
    <div>
      <router-view></router-view>
    </div>  
</template>

<script>
  import { mapGetters } from 'vuex';
  // import LoginForm from '@/LoginForm.vue';
  export default {
    name: 'CatalogWraper',
    components: {
      // LoginForm,
    },
    computed: {
      ...mapGetters([
        'CART',
        'FAVORITE'
      ]),
    }
  }

</script>

<style lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
}

.catalog {
  max-width: 1080px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  margin-top: 85px;
  &__products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    padding-bottom: 20px;
  }
}

.line {
  margin-top: 45px;
  border: 1px solid #eaeaea;
}
</style>
