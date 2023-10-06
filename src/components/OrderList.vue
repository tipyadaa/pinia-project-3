<script setup>
import Header from '../components/HeaderNev.vue';
import { ref } from 'vue'; 
import { useProductStore } from '../stores/shoppingList'
const List = useProductStore()
const order = ref(List.orderList)



</script>
<template>
    <Header></Header>
    <div>
<h1 class="text-center">ประวัติการสั่งซื้อ</h1> 
      <table class="table table-pink table-striped" > 
  <thead> 
    <tr>
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col">สินค้า</th>
      <th scope="col">จำนวน</th>
      <th scope="col">ราคา</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    
    <tr v-for="(item,index) in order" :key="index">
        <th scope="row">{{ index+1 }}</th>
        <td>
        <div v-for="(m,index) in item" :key="index">
          {{ m.name }}
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          <img :src=m.img alt="" style="max-width: 100px;">
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          {{ m.numBookings }}
      </div>
      </td>
      <td >
        <div v-for="(m,index) in item" :key="index">
          {{ m.price }}
      </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>       
  <p class="text-center">
  <RouterLink to="/"><button type="button" class="btn " style="background-color:#239B56 ; color: aliceblue;" ><i class="fa-solid fa-cash-register"></i> ซื้อสินค้า </button></RouterLink>
</p>

</template>
<style scoped>

</style>