<script setup>
import Header from '../components/HeaderNev.vue';
import { ref } from 'vue';
import { useProductStore } from '../stores/shoppingList'


const buy = ref(useProductStore())
const buy_b = buy.value.MenuListA




</script>

<template>
  <div>
    <Header></Header>
    <div class="d-flex justify-content-center align-items-center">
      <div class="col-md-3">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4  position-relative">
          <div class="col p-4 flex-column position-static text-center">
            <strong class="d-inline-block mb-2 text-primary-emphasis"></strong>
            <img :src="buy_b[buy.id].img" class="card-img-top" alt="..." style="width: 300px;">
            <p></p>
            <h5 class="card-title">{{buy_b[buy.id].title}}</h5> 
            <p class="card-text mb-auto">t{{ buy_b[buy.id].review }}</p>
            <p class="card-text mb-auto">weight : {{ buy_b[buy.id].rating }}</p>
            <p class="card-text mb-auto">price : {{buy_b[buy.id].price }}</p>
            
            <br>
            <button class="btn " @click="buy.booking(buy_b[buy.id])"  style="background-color:#239B56 ; color: aliceblue;" ><i class="fa-solid fa-cart-plus"></i> add </button>
            <button class="btn btn-outline-primay" >in cart: {{ buy.sum }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>