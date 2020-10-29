<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart'}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list" v-if="this.$store.state.products.length">
      <v-catalog-item       
        v-for="product in this.$store.state.products"
        :key="product.article"
        :product_data="product"
        @add-to-cart="addToCart"
      />     
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item.vue'
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'


  export default {
    name: 'v-catalog',
    components: {
      vCatalogItem,
    },
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
    methods: {
      ...mapActions ([
        'fetchProductsFromApi',
        'addProductToCart'
      ]),
      addToCart(data){
        this.addProductToCart(data)
      }
    },
    created(){
      this.fetchProductsFromApi()
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
  }
</style>