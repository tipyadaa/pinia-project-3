<template>
    <h1 class="kkk">Booking </h1>
    <br>
    <div>
      <div class="container text-center ">
        <div class="row align-items-start ">
          <div class="col " v-for="(destination, index) in MenuListA" :key="index">
            <div class="card m-3 " style="width: 20rem;">
              <img :src="destination.img" class="card-img-top fixed-image-height" alt="...">
              <div class="card-body  ">
                <h5 class="card-title">{{ destination.title }}</h5>
                <p class="card-text">{{ destination.price }}</p>
                <p class="card-text">{{ destination.rating }}</p>
                
                <div class="form-floating mb-1">
                <input class="form-control" type="number" v-model="destination.numBookings" placeholder="Number of Bookings">
                <label for="floatingInputValue">จำนวนโต๊ะ</label></div>
                <RouterLink to="/ClickShop"><a class="btn" @click="booking(destination)">จองร้าน</a></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
      <h1 class="lisss">รายการจอง</h1>
      <table class="table table-pink table-striped" v-if="bookinglist.length > 0"> 
  <thead>
    <tr>
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อร้าน</th>
      <th scope="col">จำนวนโต๊ะ</th>
      <th scope="col">ราคา</th>
      <th scope="col">คะแนน</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr v-for="(booking, index) in bookinglist" :key="index">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ booking.name }}</td>
      <td>{{ booking.numBookings }}</td>
      <td>{{ booking.price }}</td>
      <td>{{ booking.rating }}</td>
    </tr>
  </tbody>
</table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const MenuListA = ref([
        {title:'ขนมจีนน้ำเงี้ยว  ',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7.jpg',price:50,rating:5},
        {title:'ไส้อั่ว',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%B1%E0%B9%88%E0%B8%A7.jpg',price:55,rating:5},
        {title:'แกงกระด้าง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%87.jpg',price:60,rating:4},
        {title:' แกงผักหละไข่มดแดง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B0.jpg',price:55,rating:5},
        {title:'แกงหน่อไม้ปลาดุก',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B9%84%E0%B8%A1%E0%B9%89.jpg',price:40,rating:5},
        {title:'แกงอ่อม',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%A1.jpg',price:50,rating:5},
        {title:'ขนมจีนน้ำเงี้ยว  ',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%80%E0%B8%87%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7.jpg',price:50,rating:5},
        {title:'ไส้อั่ว',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%B1%E0%B9%88%E0%B8%A7.jpg',price:55,rating:5},
        {title:'แกงกระด้าง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%87.jpg',price:60,rating:4},
        {title:' แกงผักหละไข่มดแดง',img:'https://www.toke-tong.com/wp-content/uploads/2021/02/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B0.jpg',price:55,rating:5},
        
        ])
  
  
  
  
  const bookinglist = ref([]);
  
  const booking = (destination) => {
    if (destination.numBookings > 0) {
      bookinglist.value.push({
        name: destination.title,
        price : destination.price,
        rating:destination.rating,
        numBookings: destination.numBookings,
       
      });
    }
  };
  </script>
  
  <style>
  .fixed-image-height {
    height: 250px; /* Set your desired fixed height for the images */
    object-fit: cover; /* Preserve the aspect ratio */
  }
  .card{
  background-color: #ffbcec;
  }
  
  </style>
  