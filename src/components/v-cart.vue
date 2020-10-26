<template>
	<div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
		<h1>Cart</h1>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @delete-from-cart="deleteFromCart(index)"
    />  
	</div>
</template>
<script>
  import vCartItem from './v-cart-item'
  import {mapActions} from 'vuex'

  export default {
    name: 'v-cart',
    components: {
      vCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default: () => ([])
      }
    },
    data(){
      return {

      }
    },
    methods: {
      ...mapActions([
        'deleteProductFromCart'
      ]),
      deleteFromCart(index) {
       this.deleteProductFromCart(index)

      }
    },
  }
</script>

<style>

</style>