<template>
  <div class="v-main-wrapper">
    <p>adasd</p>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
  import vCatalog from './v-catalog.vue'
  import vCart from './v-cart'
  export default {
    name: 'v-main-wrapper',
    components: {
      vCatalog,
      vCart
    },
    props: {},
    data(){
      return{

      }
    },
    computed: {},
    methods: {},
    watch: {},
      


    }
</script>

<style lang="scss">
  .v-main-wrapper {    
    max-width: 900px;
    margin: 0 auto;
  }
</style>