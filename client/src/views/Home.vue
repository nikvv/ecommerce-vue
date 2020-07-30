<template>
<div>
  <BannerHero />
  <h2 class="uppercase text-center mt-16 text-xl text-white font-semibold tracking-widest font-mono">Our latest product</h2>
  <div class="py-2 px-2">
    <!-- <div class="flex flex-wrap -m-4"> -->
    <div class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <ProductCard v-for="product in latest" :key="product.id" :product="product" />

    </div>
  </div>
  <Footer/>
</div>

  <!-- <div>
    <Ecommerce />
  </div>-->
</template>

<script>
// @ is an alias to /src
// Components
import ProductCard from "@/components/ProductCard.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import BannerHero from "@/components/BannerHero.vue";

import { mapState } from 'vuex'
export default {
  name: "Home",
  components: {
    ProductCard,
    ProductDetail,
    BannerHero

  },
  created () {
    this.$store.dispatch('fetchLatest')
  },
  computed: mapState(['latest'])
};
</script>
