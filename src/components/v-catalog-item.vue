<template>
  <div class="v-catalog-item">
<<<<<<< HEAD
    <img :src="`../assets/images/${id}.jpg`" alt="product">
    <p id class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">{{product_data.price}}</p>
    <button >Add to cart</button>
=======
    <img class="v-catalog-item__image" :src="require('../assets/images/' + product_data.image)" alt="product">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">{{Math.floor(product_data.price)}}</p>
<<<<<<< HEAD
    <button @click="sendDataToParent">Add to cart</button>
>>>>>>> c5edd9d44d45b3636edf2e132850bc6f5afa6ceb
=======
    <button @click="addToCart">Add to cart</button>
>>>>>>> 063aece10d309d324dcb69ccc24e10150c564c22
  </div>
</template>

<script>
  export default {
    name: 'v-catalog-item',
    props: {
      product_data: {
        type: Object,
        default (){
          return {}
        }
      }
    },
    data(){
      return {

      }
    },
    methods: {
      addToCart () {
        this.$emit('add-to-cart', this.product_data)
      }
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }
  
</style>