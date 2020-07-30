<template>
  <div @click='detail' class="w-full overflow-hidden mt-4 cursor-pointer">
    <div class="flex flex-col">
      <a
        class="w-full card-img h-100 object-cover object-center"
        :style="{'background-image': `url(${product.image_url})`}"
      />
      <div class="w-full px-6 py-4 bg-gray-200 text-center">
        <div class="font-bold tracking-wide text-xl mb-2">{{product.name}}</div>
        <p class="text-gray-700 font-semibold"><span class="text-sm font-normal">IDR.</span> {{price}}</p>
      </div>
    </div>
  </div>
  <!-- <div class="w-full max-w-xl mx-auto rounded-md hover:shadow-lg overflow-hidden">
    <div
      class="flex items-end justify-end h-56 w-full bg-cover"
      style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
    >
      <button
        class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">Classic watch</h3>
      <span class="text-gray-500 mt-2">$123</span>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "ProductCard",
  props:['product'],
  methods:{
    detail(){
      this.$router.push({
        name: 'Products',
        params:{
          id: this.product.id
        }
      })
    }
  },
  computed: {
    price() {
       return numeral(this.product.price).format("000,00");
      }
    },
}
</script>

<style scoped>
.h-100 {
  height: 25rem;
}
.h-150 {
  height: 37.5rem;
}
.h-200 {
  height: 50rem;
}
.w-card {
  width: 30%;
}
.card-img{
      /* background: url('../assets/TN.jpg'); trust_nobody_01.jpg */
      background-position: top;
      background-size: cover;
      opacity: 0.6;
      transition: all .5s ease-in-out;
}
.card-img:hover{
      /* background: url('../assets/trust_nobody_01.jpg'); */
      background-size: cover;
      opacity: 1;
      background-position: bottom;
}
</style>