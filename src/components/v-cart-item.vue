<template>
	<div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="product">

        <div>
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
      
        <div class="v-cart-item__quantity">
          <button @click="decrement" class="btn">-</button>  
          <p>Qty : {{cart_item_data.quantity}}</p>
          <button @click="increment" class="btn">+</button> 
        </div>
        <button @click="deleteFromCart">Delete</button>
	</div>
</template>
<script>
  export default {
    name: 'v-cart',
    components: {},
    props: {
      cart_item_data: {
        type: Object,
        default: () => ({})
      },
    },
    methods: {
      deleteFromCart() {
        this.$emit('delete-from-cart')
      },
    
      decrement(){
        this.$emit('decrement')
      },
      increment(){
        this.$emit('increment')
      },
        
    },
  }
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        margin: $margin*2;
        box-shadow: 0 0 8px 0 #e0e0e0;
        &__image {
            max-width: 50px;
        }
        &__quantity {
          display: flex;
          align-items: center;
        }
    }
</style>
