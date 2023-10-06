<script setup>
import Header from '../components/HeaderNev.vue';

import { ref  } from 'vue'; 
import { useProductStore } from '../stores/shoppingList'
const StoreA = useProductStore()
const buying = ref(StoreA.bookinglist)



</script>
<template>
  <Header></Header>
    <div>
        <h1 class="lisss text-center" >รายการชำระเงิน</h1>
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
      <td> {{ booking.numBookings }}  </td>
      <td>{{ booking.price*booking.numBookings }}</td>
      <td><button type="button" class="btn btn-danger m-1" @click="StoreA.delList(index)"><i class="fa-solid fa-trash"></i></button></td>
     
      
    
    </tr>

  </tbody>

</table>
<div>
    <p class="text-center">
      <button class="btn" style="background-color:#239B56; color: aliceblue;"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
        ชำระเงิน
      </button>
      <RouterLink to="/" class="m-2"><button type="button" class="btn " style="background-color:#239B56; color: aliceblue;" ><i class="fa-solid fa-cart-shopping"></i> ซื้อสินค้าต่อ</button></RouterLink>
    </p>
    
    <div style="min-height: 120px;">
  <div class="collapse collapse" id="collapseWidthExample">
    <div class="card mx-auto" style="width: 18rem; text-align: center;">
      <div class="card-body">
        <h5 class="card-title"> TOTAL</h5>
        <h6 class="card-text">Total Price {{ StoreA.sum }} ชิ้น</h6>
        <p class="card-text">Total Product {{ StoreA.TotalList }} บาท</p>
        <RouterLink to="/" class="m-2" ><button class="btn btn-primary" type="button"  @click="StoreA.orderadd(buying)"> ชำระเงินเสร็จสิ้น </button></RouterLink>
      </div>
    </div>
  </div>
</div>
  </div>





<table>

</table>
</div>

<!--/table>
 <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">thx</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>การซื้อสินค้าสำเร็จ<br>
        <strong>Fresh Harvest Dairy-Free</strong></h1>
      </div>
      
    </div>
  </div>
</div>

<button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
</div>-->
  
</template>
<style scoped>
.center-price {
justify-content: center; /* จัดให้อยู่ตรงกลางแนวนอน */
  align-items: center; /* จัดให้อยู่ตรงกลางแนวตั้ง */
}
</style>