<template>
  <div class="lg:w-1/2 md:w-full mt-4">
    <h2 class="text-2xl bg-blue-900 text-center text-white leading-relaxed tracking-widest">Sign Up</h2>
    <form @submit.prevent='register' class="pl-4">
      <div class="mt-6">
        <label class="text-white">Username</label>
        <input
        v-model="username" 
          class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mt-6">
        <label class="text-white">Email</label>
        <input
        v-model="email"
          class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mt-6">
        <label class="text-white">Password</label>
        <input
        v-model="password"
          class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="mt-6">
        <button
        type="submit"
          class="inline-block w-full py-4 px-8 leading-none text-black bg-gray-200 hover:bg-gray-300 rounded shadow"
        >Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      const payload = { username:this.username, email:this.email, password:this.password}
      this.$store.dispatch('register',payload)
      this.username = '',
      this.email = '',
      this.password = ''
    }
  }
};
</script>

<style>
</style>