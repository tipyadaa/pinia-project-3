<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useProductStore } from '../stores/shoppingList'


const buy = ref(useProductStore())
const buy_b = buy.value.MenuListA
</script>

<template>
  
  <div>
    <!-- Display Menu Items -->
    <div class="row mb-2">
      <div class="col-md-6 " v-for="(n, index) in buy_b" :key="index" style="max-width: 300px;">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4  flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis"></strong>
            <img :src="n.img" class="card-img-top" alt="...">
            <br>
            <br>
            <h5 class="card-title">{{ n.title }}</h5>
            <p class="card-text mb-auto">price : {{ n.price }}</p>
            <p class="card-text mb-auto">weight: {{ n.rating }}</p>
            <br>
            <div class="d-grid gap-2 d-md-block">
            <RouterLink class="m-2" to="/ClickShop"><button class="btn " @click="buy.booking(n)" style="background-color:#239B56 ; color: aliceblue;"><i class="fa-solid fa-cart-plus" style="color: rgb(255, 255, 255);"></i> add cart</button></RouterLink> 
            <RouterLink class="m-2" to="/productdetai"><button class="btn btn-primary" style="background-color:#239B56; color: aliceblue;" > details </button></RouterLink> 
          </div> 
          </div>
        </div>
      </div>
    </div>

   
  </div>
</template>

<style>
/* Add your CSS styles here */
</style>
