<template>
  <div class="v-main-wrapper">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->

    <!-- <v-catalog/>
    <v-cart
      v-if="CART.length"
      :cart_data="CART"
      /> -->
  </div>
</template>

<script>
  // import vCatalog from './v-catalog.vue'
  // import vCart from './v-cart'
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'v-main-wrapper',
    // components: {
    //   vCatalog,
    //   vCart
    // },
    // props: {},
    computed: {
      ... mapGetters([
        'CART'
      ]),
    },    
  }
</script>

<style lang="scss">
  .v-main-wrapper {    
    max-width: 900px;
    margin: 0 auto;
  }
</style>