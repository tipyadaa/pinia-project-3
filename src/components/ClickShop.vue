<script setup>
import Header from '../components/HeaderNev.vue';
//import { ref } from 'vue'; 
import { useProductStore } from '../stores/shoppingList'
const StoreA = useProductStore()
const buying = StoreA.bookinglist

</script>
<template>
    <Header></Header>
    <div>
        <h1 class="lisss text-center " >รายการจอง</h1>
      <table class="table table-pink table-striped" > 
  <thead>
    <tr>
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">สินค้า</th>
      <th scope="col">จำนวน</th>
      <th scope="col">ราคา</th>
      <th scope="col">ลบรายการ</th>
     
     
    </tr>
  </thead>
  <tbody class="table-group-divider">
    
    <tr v-for="(booking, index) in buying" :key="index">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ booking.name }}</td>
      <td><img :src="booking.img" alt="..." style="max-width: 100px;"></td>
      <td><button type="button" class="btn btn-success m-1" @click="booking.numBookings ++"><i class="fa-solid fa-plus"></i></button>  {{ booking.numBookings }}  <button type="button" class="btn btn-danger m-1" @click="booking.numBookings --" v-if="booking.numBookings > 0"> <i class="fa-solid fa-minus"></i> </button></td>
      <td>{{ booking.price*booking.numBookings }}</td>
      <td><button type="button" class="btn btn-danger m-1" @click="StoreA.delList(index)"><i class="fa-solid fa-trash"></i></button></td>
      
    </tr>
  </tbody>
</table>
  </div>
  <p class="text-center mx-3">
  <RouterLink to="/TotalP" class="m-2"><button type="button" class="btn " style="background-color:#239B56; color: aliceblue;"  ><i class="fa-solid fa-cash-register" ></i> ชำระเงิน </button></RouterLink>
  <RouterLink to="/" class="m-2"><button type="button" class="btn" style="background-color:#239B56; color: aliceblue;" ><i class="fa-solid fa-cart-shopping"></i> ซื้อสินค้าต่อ</button></RouterLink>
</p>
</template>
<style scoped>

</style>