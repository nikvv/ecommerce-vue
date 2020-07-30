<template>
<div class="flex sm:flex-col lg:flex-row w-full">
<SignInForm />
<SignUpForm />
</div>

</template>

<script>
import SignInForm from '@/components/SignInForm.vue'
import SignUpForm from '@/components/SignUpForm.vue'

import { mapState } from "vuex";

export default {
  name: 'Login',
  components:{
    SignInForm,
    SignUpForm
  },
  computed: mapState(['isLogin']),
  mounted() {
    if(isLogin){
      this.$router.push({name:'Home'})
    }
  }

}
</script>

<style>

</style>