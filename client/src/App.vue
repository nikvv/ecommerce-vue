<template>
  <div class="container mx-auto" id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import {mapState} from 'vuex'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  },
  // computed: mapState(['isLogin']),
  created() {
    if(localStorage.access_token) {
      this.$store.commit('SET_LOGIN',true)
    }
  }
}
</script>
<style scoped>

</style>
