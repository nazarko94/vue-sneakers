<template>
  <div class="catalog">
    <div class="container">
      <catalog-header />
      <hr class="line" />
      <catalog-banner :sliderItems="sliderItems" />
      <catalog-search />
      <catalog-products :sneakers="sneakers"/>
    </div>
  </div>
</template>

<script>
import CatalogHeader from "./CatalogHeader.vue";
import CatalogBanner from "./CatalogBanner.vue";
import CatalogSearch from "./CatalogSearch.vue";
import CatalogProducts from './CatalogProducts.vue';


export default {
  name: "CatalogWrapper",
  components: {
    CatalogHeader,
    CatalogBanner,
    CatalogSearch,
    CatalogProducts,
  },
  data() {
    return {
      sliderItems: [
        { id: 0, name: "slideOne", img: "slideOne.png" },
        { id: 1, name: "slideTwo", img: "slideTwo.png" },
        { id: 2, name: "slideThree", img: "slideThree.png" },
        { id: 3, name: "slideFour", img: "slideFour.png" },
      ],
      sneakers: [
        {
          id: 0,
          desc: "Чоловічі Кросівки Nike Blazer Mid Suede",
          price: "3999 грн",
          image: "1.jpg",
        },
        {
          id: 1,
          desc: "Чоловічі Кросівки Nike Air Max 270",
          price: "4199 грн",
          image: "2.jpg",
        },
        {
          id: 2,
          desc: "Чоловічі Кросівки Nike Blazer Mid Suede",
          price: "3499 грн",
          image: "3.jpg",
        },
        {
          id: 3,
          desc: "Чоловічі Кросівки Nike Puma X Aka Boku Future Rider",
          price: "4999 грн",
          image: "4.jpg",
        },
        {
          id: 4,
          desc: "Чоловічі Кросівки Under Armour Curry 8",
          price: "5299 грн",
          image: "5.jpg",
        },
        {
          id: 5,
          desc: "Чоловічі Кросівки Nike Kyrie 7",
          price: "3299 грн",
          image: "6.jpg",
        },
        {
          id: 6,
          desc: "Чоловічі Кросівки Jordan Air Jordan 11",
          price: "3799 грн",
          image: "7.jpg",
        },
        {
          id: 7,
          desc: "Чоловічі Кросівки Nike LeBron XVIII",
          price: "4399 грн",
          image: "8.jpg",
        },
        {
          id: 8,
          desc: "Чоловічі Nike Lebron XVIII Low",
          price: "4799 грн",
          image: "9.jpg",
        },
        {
          id: 10,
          desc: "Чоловічі Кросівки Nike Blazer Mid Suede",
          price: "3999 грн",
          image: "1.jpg",
        },
        {
          id: 9,
          desc: "Чоловічі Кросівки Nike Kyrie Flytrap IV",
          price: "4099 грн",
          image: "10.jpg",
        },
        {
          id: 11,
          desc: "Чоловічі Кросівки Nike Blazer Mid Suede",
          price: "3499 грн",
          image: "3.jpg",
        },
      ],
    };
  },
};
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
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  margin-top: 85px;
}

.line {
  margin-top: 45px;
  border: 1px solid #eaeaea;
}
</style>
