import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../../axios.config'

import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    latest: [],
    products: [],
    product: {},
    CartProducts:[]
  },
  mutations: {
    SET_LATEST(state, payload) {
      state.latest = payload
      console.log(state.latest)
    },
    SET_LOGIN(state,payload){
      state.isLogin = payload
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_PRODUCT(state, payload) {
      state.product = payload
    },
    SET_CARD_PRODUCTS(state, payload) {
      state.CartProducts = payload
    },
  },
  actions: {
    fetchLatest(context) {
      axios({
        method: 'get',
        url: '/products',
      })
        .then(({ data }) => {
          console.log(data)
          let products = data.products
          const length = products.length-3
          products = products.slice(length)
          context.commit('SET_LATEST', products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    fetchProducts(context) {
      axios({
        method: 'get',
        url: '/products',
      })
        .then(({ data }) => {
          console.log(data)
          const products = data.products
          context.commit('SET_PRODUCTS', products)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchProduct(context,payload){
      axios({
        method: 'get',
        url: `/products/${payload.id}`,
      })
        .then(({ data }) => {
          console.log(data)
          const product = data.product
          context.commit('SET_PRODUCT', product)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchCart (context,payload){
      axios({
        method: 'get',
        url: `/carts`,
        headers:{
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data,`--------------------------FETCH CART`)
          context.commit('SET_CARD_PRODUCTS', data.cart.CartProducts)
        })
        .catch(error => {
          console.log(error)
        })
    },

    addToCart(context,payload){
      axios({
        method: 'post',
        url: `/carts`,
        data:{
          product_id: payload.product_id
        },
        headers:{
          access_token: localStorage.access_token
        },
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeFromCart(context, payload) {
      axios({
        method: 'delete',
        url: `/carts/${payload.productId}`,
        data:{
          cartId: payload.cartId
        },
        headers:{
          access_token: localStorage.access_token
        },
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    checkout(context,payload) {
         axios({
        method: 'put',
        url: `/carts/checkout`,
        data:{
          payload
        },
        headers:{
          access_token: localStorage.access_token
        },
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateItemQuantity (context, payload) {
      axios({
        method: 'put',
        url: `/carts/${payload.productId}`,
        data:{
          value: payload.value
        },
        headers:{
          access_token: localStorage.access_token
        },
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch("fetchCart")
        })
        .catch(error => {
          console.log(error)
        })
    },
    login(context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        },
      })
        .then(({data}) => {
          localStorage.access_token = data.access_token
          context.commit('SET_LOGIN',true)
          router.push({name:'Home'})
        })
    },
    register(context, payload) {
      axios( {
        method:'post',
        url: '/register',
        data:{
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  },
});
