
<script setup>
import { ref } from 'vue';
import { useProductStore } from '../stores/shoppingList'


const buy = ref(useProductStore())


</script>
<template>
  <div>
      <header>
<nav class="navbar navbar-expand-lg " style="background-color: #9FE2BF;">
<div class="container-fluid">
  <a class="navbar-brand" href="#">ENJOY</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/" class="nav-link"><i class="fa-solid fa-house"></i> Home </RouterLink> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/ClickShop" class="nav-link"> <i class="fa-solid fa-cart-shopping"></i> cart : {{buy.sum}}</RouterLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/TotalP" class="nav-link"> <i class="fa-solid fa-cash-register"></i> totalPrice</RouterLink> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/orderList" class="nav-link"> <i class="fa-solid fa-clock-rotate-left"></i>history</RouterLink> </a>
      </li>
      
    </ul>
  </div>
</div>
</nav>
</header>
  </div>
</template>