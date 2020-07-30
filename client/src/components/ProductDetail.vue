<template>
  <section class="text-gray-500 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded"
          :src="product.image_url"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-white text-3xl title-font font-medium mb-1">{{product.name}}</h1>
          <h1 class="text-white text-3xl title-font font-medium mb-1">
            {{product.stock}}
            <span class="text-sm">in stock</span>
          </h1>

          <!-- <div class="flex mb-4">
          <span class="flex items-center">
            <svg v-for="i in 5" :key="i" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" :class="{'text-blue-700':i<5}" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-white ml-3">4 Reviews</span>
          </span>
          </div>-->
          <div class="flex mt-6 items-center pb-5 border-b-2 mb-5">
            <!-- <div class="flex items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="pl-3 pr-10 border border-gray-700 text-black rounded appearance-none py-2 focus:outline-none focus:border-white">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
            </div>-->
          </div>
          <div class="flex">
            <p class="font-medium text-2xl text-white">
              <span class="text-sm">IDR.</span>
              {{product.price}},00
            </p>
            <button
              v-if="product.stock > 0"
              @click="toCart(product.id)"
              class="flex ml-auto text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded"
            >Add to cart</button>
            <p class="text-2xl ml-auto text-white" v-else>OUT OF STOCK</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["product"],
  created() {
    console.log(this.product);
  },
  methods: {
    toCart(id) {
      if (localStorage.access_token) {
        const payload = { product_id: id };
        this.$store.dispatch("addToCart", payload);
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Sucessfully add to cart!",
        });
      } else {
        this.$router.push({ name: "Login" });
      }
    }
  }
};
</script>

<style>
</style>