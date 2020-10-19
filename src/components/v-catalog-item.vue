<template>
  <div class="v-catalog-item">
    <img src="" alt="product">
    <p>Item 1</p>
    <p>Price:100</p>
    <button>Add to cart</button>
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
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>