<template>
<ProductDetail :product="product" />
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue'

import { mapState } from 'vuex'
export default {
  name:'Products',
  components:{
    ProductDetail
  },
  computed: mapState(['product']),
  created() {
    const payload = {id: this.$route.params.id}
    this.$store.dispatch('fetchProduct',payload)
  }

}
</script>