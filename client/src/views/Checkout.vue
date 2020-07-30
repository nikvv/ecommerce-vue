<template>
  <div class="container">
    <div class="flex h-full mt-2">
      <div class="w-4/6">
        <ItemsCheckout
          v-for="cartProduct in cartProducts"
          :key="cartProduct.id"
          :cartProduct="cartProduct"
        />
      </div>
      <div class="w-2/6">
        <FormCheckout :totalPrice="totalPrice" :cartProducts="cartProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemsCheckout from "@/components/ItemsCheckout.vue";
import FormCheckout from "@/components/FormCheckout.vue";

import { mapState } from "vuex";

export default {
  name: "Checkout",
  components: {
    ItemsCheckout,
    FormCheckout
  },

  created() {
    this.$store.dispatch("fetchCart");
  },

  computed: {
    cartProducts() {
      return this.$store.state.CartProducts;
    },

    totalPrice() {
      return this.sum();
    }
  },
  methods: {
    sum() {
      let total = 0;
      if (this.cartProducts.length > 0) {
        this.cartProducts.forEach(cartInstance => {
          total += cartInstance.Product.price * cartInstance.quantity;
        });
      }
      return total
    }
  }
};
</script>

<style>
</style>