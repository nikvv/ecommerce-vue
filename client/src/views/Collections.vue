<template>
<div>
      <h1 class="text-white text-center text-3xl mt-4 font-serif">All Collections</h1>
      <h3 class="text-white text-right mt-4">{{products.length}} products</h3>
 <div class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</div>
 
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "Collections",
  components: {
    ProductCard
  },
  computed: mapState(["products"]),
  created() {
    if (this.products.length === 0) this.$store.dispatch("fetchProducts");
  }
};
</script>

<style>
</style>