<template>
  <div class>
    <nav class="flex flex-wrap bg-black-cvre items-center justify-between p-4 border-b">
      <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center"></div>

      <!-- BUREGER MENU -->
      <div class="block lg:hidden">
        <button
          class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
        <router-link
          class="text-xl text-gray-100 font-brand tracking-wider font-semibold hover:no-underline"
          :to="{name:'Home'}"
        >thecvrepeople</router-link>
        <!-- <router-link
          :to="{name:'Products'}"
          class="block lg:inline-block mt-4 lg:mt-0 ml-16 text-gray-100"
        >Products</router-link>-->
        <router-link
          class="text-xl text-gray-100 ml-16 font-brand tracking-wider font-semibold hover:no-underline"
          :to="{name:'Collections'}"
        >Collections</router-link>
      </div>
      <div class="flex items-baseline lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <router-link
          :to="{name:'Checkout'}"
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-100"
          href="#"
        >
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>

        <a
          v-if="isLogin"
          @click="logout"
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-100"
          href="#"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="currentColor"
            transform="rotate(180)"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <router-link
          v-else
          :to="{name:'Login'}"
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-100"
          href="#"
        >
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: mapState(["isLogin"]),
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("SET_LOGIN", false);
      if (this.$route.name !== "Home") this.$router.push({ name: "Home" });
    },
    login() {
      this.$router.push({ name: "Login" });
    },
    swal() {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }
};
</script>

<style scoped>
</style>