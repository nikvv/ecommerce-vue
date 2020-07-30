<template>
  <div class="flex items-center container p-6 h-full">
    <div class="flex w-full bg-gray-200 h-48 rounded shadow-lg justify-center items-center">
      <div class="flex flex-col justify-center w-2/3 mx-auto">
      <h3 class="p-2 text-2xl">Total: IDR. {{priceFormat}}</h3>
        <button v-if="totalPrice"  @click='checkout' class="bg-gray-800 text-white p-2 rounded">Checkout now!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCheckout",
  props:['totalPrice','cartProducts'],
  computed: {
    priceFormat(){
      if(this.totalPrice)  return numeral(this.totalPrice).format("000,00");
    }
  },
  methods: {
    checkout() {
      let payload = []

      this.cartProducts.forEach(cartProduct => {
        const newQuantity = cartProduct.Product.stock - cartProduct.quantity
        const data = {cartId: cartProduct.cartId, quantity: newQuantity}
        payload.push(data)
      })
      this.$store.dispatch('checkout',payload)
    }
  }
};
</script>

<style>
</style>