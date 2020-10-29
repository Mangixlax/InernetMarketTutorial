<template>
	<div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to catalog</div>
    </router-link>
		<h1>Cart</h1>
    <p v-if="!this.$store.state.cart.length">There are no products in cart ...</p>
    <v-cart-item
        v-for="(item, index) in getProductsFromCart"
        :key="item.article"
        :cart_item_data="item"
        @delete-from-cart="deleteFromCart(index)"
        @decrement="decrement(index)"
        @increment="increment(index)"
    />
    <div class="v-cart__total">
      <p> Total :</p>
      <p>{{CartTotalCost}}</p>
    </div>  
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
    computed: {
      getProductsFromCart() {
        return this.$store.state.cart
      },
      CartTotalCost() {  
        return Math.floor(this.$store.state.cart.reduce((res, item) => res + item.price * item.quantity, 0))    
        // let result = [];

        // for (let item of this.$store.state.cart) {
        //   result.push(item.price * item.quantity)
        // }

        // result = result.reduce(function (sum, el) {
        //   return sum + el;
        // })

        // return result;
      }
    },
    methods: {
      ...mapActions([
        'deleteProductFromCart',
        'decrementCartItem',
        'incrementCartItem'
      ]),     
      decrement(index){
        this.decrementCartItem(index)
      },
      increment(index){
        this.incrementCartItem(index)
      },
      deleteFromCart(index) {
       this.deleteProductFromCart(index)
      }
    },
  }
</script>

<style lang="scss">
  .v-cart {
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*3;
      display: flex;
      justify-content: center;
      background: #b2b2b2;
    }

    .total__name {
      margin-right: $margin*2;
    }
  }

</style>