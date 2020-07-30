<template>
  <div class="flex mt-6 px-10 bg-gray-200 rounded">
    <img class="p-2" :src="cartProduct.Product.image_url" alt />
    <div class="flex flex-col items-start justify-center ml-4">
      <h3 class="text-xl tracking-wider">{{cartProduct.Product.name}}</h3>
    </div>
    <div class="flex items-center justify-center ml-6 text-2xl">
      <!-- Subtract quantity -->
      <span>
        <svg
          @click="updateQuantity(-1,cartProduct.Product.id)"
          class="w-4 h-4 cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <span class="ml-2">{{cartProduct.quantity}}</span>

      <!-- Add quantity -->
      <span>
        <svg
          @click="updateQuantity(1,cartProduct.Product.id)"
          class="w-4 h-4 ml-2 cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <div class="flex items-center ml-6">
      <h3 class="font-bold tracking-wide text-lg">
        <span class="text-sm font-semibold">IDR.</span>
        {{price}}
      </h3>
    </div>

    <div
      @click="removeItem(cartProduct.Product.id,cartProduct.cartId)"
      class="flex items-center ml-auto cursor-pointer"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCheckout",
  props: ["cartProduct"],
  computed: {
    price() {
      return numeral(this.cartProduct.Product.price).format("000,00");
    }
  },
  methods: {
    removeItem(productId, cartId) {
      console.log(productId);
      console.log(cartId);
      const payload = { productId, cartId };
      this.$store.dispatch("removeFromCart", payload).then(() => {
        this.$store.dispatch("fetchCart");
      });
    },

    updateQuantity(value, productId) {

      if (this.cartProduct.quantity <= 1 && value < 0) {
        console.log(`Quantity sudah 1`);
      } else if (
        this.cartProduct.quantity == this.cartProduct.Product.stock &&
        value > 0
      ) {
        console.log(`Stock habis`);

      } else {
        const payload = { value, productId };
        this.$store.dispatch("updateItemQuantity", payload)
        // .then(() => {
        //   this.$store.dispatch("fetchCart");
        // });
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>