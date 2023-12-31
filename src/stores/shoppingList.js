import { defineStore } from "pinia";
import { ref , computed} from 'vue'

export const useProductStore = defineStore('useProductStore',() => {
    const MenuListA = ref([
        {title:'ชาตรามือ ชาเขียวมัทฉะกรีนทรี เข้มข้น  ',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B7%E0%B8%AD-%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0.jpg',
        price:390,
        rating:'100 กรัม',
        review:'ชาเขียวมัทฉะ ชาตรามือ ชาของคนไทยที่คัดสรรใบชาคุณภาพอย่างพิถีพิถัน เลือกใบชาที่มีคุณภาพ ชาตรามือมีกลิ่นหอมสดชื่นเป็นเอกลักษณ์ เหมาะกับการใช้ชงเป็นเครื่องดื่มหลากหลายเมนูการชง ชาดำเย็น ชามะนาว ชามนมเย็น ชาไข่มุก สีสันสวยงามน่ารับประทานเข้มข้นเป็นชาของคนไทย ที่มีกลิ่นและรสสัมผัสที่ดีไม่แพ้ใบชาจากต่างประเทศแถมราคาไม่แรงมาก'},
        {title:'CHOUI FONG ผงชาเขียวแท้ 100 %',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-CHOUI-FONG-%E0%B8%9C%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B9%89-100-.jpg',
        price:150,
        rating:'100 กรัม',
        review:'CHOUI FONG ผงชาเขียวแท้ 100 % จากไร่ชาฉุยฝง จังหวัดเชียงราย ประเทศไทย ชาเขียวผ่านขั้นตอนการผลิตทุกกระบวนการอย่างพิถีพิถันตั้งแต่การเก็บยอดอ่อนของใบชาที่ผ่านการเลือกสรรอย่างดี หลังจากนั้นมาผ่านกระบวนการบดอย่างช้าๆเพื่อให้ได้ชาเขียวคุณภาพสูงที่มีกลิ่นที่หอมและคงไว้ซึ่งคุณประโยชน์ต่างๆ กลิ่นของใบชามีกลิ่นหอมอ่อนๆ สดชื่นสัมผัสได้ถึงชาเขียวแบบไทยๆ จากรีวิวผู้ใช้พบว่าเป็นชาที่มีราคาไม่แพงสามารถดึงกลิ่นชาเขียวออกมาได้ดี อาจมีตะกอนของใบหลงเหลืออยู่บ้างเหมาะกับการนำมาทำเบเกอรี่จะได้สีของขนมที่สวย แต่หากต้องการนำมาทำเครื่องดื่มก็สามารถทำได้เช่นกันบรรจุในซองซิปล็อคใช้งานได้สะดวกไม่ทำให้ชาเขียวเสื่อมคุณภาพ'},
        {title:'Nishio Matcha Green Tea เกรด Premium',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Nishio-Matcha-Green-Tea-%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B8%94-Premium.jpg',
        price:450,
        rating:'100 กรัม',
        review:'Nishio Matcha Green Tea ชาเขียวเกรดพรีเมี่ยม จากเมืองนิชิโอะ ประเทศญี่ปุ่น ซึ่งเป็นสถานที่ที่นิยมปลูกชาคุณภาพดีมากที่สุดแห่งหนึ่ง คัดเลือกใบชาอย่างพิถีพิถัน ด้วยกรรมวิธีที่จะคงคุณภาพของใบชาไว้ได้มากที่สุด คลุมต้นชาไว้ไม่ให้โดนแสงแดด และคัดใบชาอ่อนเพียง 3 ใบแรกจากต้นชา ทำให้ได้บชาที่มีสีสวยงามและมีกลิ่นหอมมากที่สุด ชาเขียวจาก Nishio มีความหอมนุ่มเฉพาะตัวคงรสชาติของชาเขียวแท้ รสชาติกลมกล่อมนุ่มนวล สัมผัสได้ถึงใบชาเกรดพรีเมี่ยมแท้ คอชาเขียวต้องติดใจ สามารถนำไปทำเครื่องดื่มมัทฉะลาเต้ได้ทั้งแบบร้อนและแบบเย็น หรือทำไอศกรีมชาเขียว เค้กชาเขียวก็ได้เช่นกัน บรรจุภัณฑ์ในซองซิปล็อคอย่างดีราคาไม่แรงมาก'},
        {title:' Maruzen Green Tea Powder',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Maruzen-Green-Tea-Powder.jpg',
        price:260,
        rating:'100 กรัม',
        review:'Maruzen Green Tea Powder ชาเขียวออร์แกนิกเกรดพรีเมี่ยม ที่เกิดจากการนำต้นชาจากเมืองชิซูโอกะประเทศญี่ปุ่นมาปลูกในประเทศไทย ที่ไร่บุญรอด จังหวัดเชียงราย ควบคุมทุกขั้นตอนการปลูกอย่างพิถีพิถันตามคุณภาพชาเขียวจากญี่ปุ่น ไม่ว่าจะเป็น การควบคุมแสงแดด การบดชา และการอบไอน้ำ (นึ่ง) เนื่องจากชาเขียว Maruzen เกิดจากความร่วมมือระหว่างบริษัทสิงห์ปาร์ค เชียงราย และบริษัทมารุเซ็น ที เจแปน จำกัด บริษัทซึ่งมีความเชี่ยวชาญในการผลิตชาเขียวมานานทำให้ชาเขียวของมารุเซ็นมีรสชาติที่ใกล้เคียงกับชาเขียวจากประเทศญี่ปุ่น ทำให้เราได้ดื่มชาเขียวออร์แกนิกคุณภาพดีในราคาที่ไม่แรงมาก ชาเขียวของมารุเซ็น เหมาะกับการนำมาทำเครื่องดื่มแบบร้อนจะให้กลิ่นชาที่หอมสดชื่นกลิ่นชาไม่แรงมากกำลังดี'},
        {title:'Aroma ชาเขียวมัทฉะ  Matcha Green Tea',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Aroma-%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0.jpg',
        price:250,
        rating:'100 กรัม',
        review:'ชาเขียวมัทฉะ Aroma ชาเขียวจากประเทศไทย ที่เหมาะสมกับร้านกาแฟมากๆ เป็นชาเขียวที่มีรสชาติเข้มข้น กลิ่นหอมกำลังดี สีสวย ไม่ต้องใช้ชาเขียวปริมาณมากก็ได้รสชาติชาเขียวที่มีความเข้มข้น กลิ่นหอม ชาเขียวเข้มข้นอาจมีรสขมโดดอยู่บ้าง และยังมีกากของใบชาหลงเหลืออยู่ หากไม่ชอบกากของชาหรือไม่ชอบชาเขียวรสเข้มมากอาจใช้ตระแกรงกรองชาก่อนนำมาใช้เพื่อไม่ให้มีกากของชา เหมาะกับการนำมาทำเบเกอรี่จะได้ขนมที่มีกลิ่นหอมชาเขียวและรสชาติชาเขียวที่เข้มข้นหรือนำมาทำไอศกรีมก็ได้สัมผัสของชาเขียวที่ดีและมีสีสันสวยงาม หากนำมาทำเครื่องดื่มควรกรองชาก่อนนำมาใช้'},
        {title:'ITOEN Ocha Sara Sara Rypkucha',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-ITOEN-Ocha-Sara-Sara-Rypkucha.jpg',
        price:390,
        rating:'100 กรัม',
        review:'ITOEN Ocha Sara Sara Rypkucha ชาเขียวแท้จากประเทศญี่ปุ่น สามารถหาซื้อได้ตามซุปเปอร์มาเก็ตในประเทศไทยมีวางขายจำนวนมากได้รับความนิยมสำหรับคนรักชาเขียวแบบชงเองไม่ควรพลาด ชาเขียว ITOEN แนะนำอย่างมากสำหรับดื่มแบบไม่ปรุงแต่งใดๆ ละลายง่ายได้ทั้งแบบร้อนและแบบเย็น มีกลิ่นหอมชาเขียวแท้ จากญี่ปุ่นสีชาเขียวสวยงาม สามารถชงดื่มได้ทุกวันเพื่อเพิ่มความกระปรี้กระเปร่าเติมความสดชื่นให้ร่างกาย ชาเขียว ITOEN Ocha Sara Sara Rypkucha 1 ซอง 40 กรัมสามารถชงได้มากถึง 50 แก้ว สำหรับผู้ที่รักการดื่มชาเขียวแต่ไม่มีเวลาและต้องการความสะดวกรวดเร็วซื้อติดบ้าน ติดที่ทำงานไว้สักซองก็ดีค่ะ'},
        {title:'Uji Uji Matcha Green Tea Base',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Uji-Uji-Matcha-Green-Tea-Base.jpg',
        price:290,
        rating:'100 กรัม',
        review:'Uji Uji Matcha Green Tea Base ชาเชียวคุณภาพดีจากเมืองอูจิ ประเทศญี่ปุ่น สถานที่ผลิตชาเขียวแต่โบราณ นิยมเก็บใบชาเขียวจากเมืองอูจิเพื่อดื่มกันในราชวงศ์ชั้นสูง Uji Uji เป็นชาเขียวปรุงสำเร็จพร้อมชงดื่มได้ทันที เหมาะกับผู้ที่ชอบชาเขียวแบบอ่อนๆ รสชาติกลมกล่อม มีกลิ่นหอมของใบชา ชาเขียวสีสวยน่ารับประทาน ผงชาเขียวบดละเอียดเนื้อเนียน กากน้อย มีส่วนผสมจากชาเขียวบดผง99% และน้ำตาล 1 % ทำให้รสชาติชาเขียวกลมกล่อมไม่ขมมาก สามารถดื่มได้ง่ายได้ทั้งเมนูแบบร้อนและเย็น รสชาติชาเขียวหวานนุ่มละมุน ถูกใจคอชาเขียวอย่างแน่นอน'},
        {title:'Maruzen ชาเขียวญี่ปุ่นเซ็นฉะ (Sencha)',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Makotoen-Matcha-Iri-Sencha.jpg',
        price:195,
        rating:'100 กรัม',
        review:'Maruzen ชาเขียวญี่ปุ่นเซ็นฉะ ชาเขียวเซ็นฉะเป็นชาวที่ชาวญี่ปุ่นนิยมดื่ม และเป็นชาที่นิยมผลิตในประเทศญี่ปุ่นมากถึง60% กรรมวิธีการปลูกจะแตกต่างจากชาวเขียวมัทฉะทั่วไปคือจะต้องปลูกกลางแสงแดด ซึ่งแตกต่างจากชาเขียวมัทฉะที่จะต้องปลูกในร่มเพื่อเก็บยอดอ่อนใบชา กรรมวิธีในการอบก็แตกต่างกัน ชาเขียวเซ็นฉะมีสาร EGCG อยู่ในปริมาณสูง ซึ่งนิยมใช้ดื่มเพื่อลดน้ำหนัก และยังมีสารคาเทชิน ที่เร่งการเผาผลาญ ไขมันในร่างกาย เป็นชาเขียวที่มีความเข้มข้นสูงเหมาะกับผู้ที่ชอบความขมฝาดของชาเขียวแท้ๆ'},
        {title:'Makotoen Matcha Iri Sencha',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-Maruzen-%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%89%E0%B8%B0-Sencha.jpg',
        price:200,
        rating:'100 กรัม',
        review:'Makotoen Matcha Iri Sencha เป็นชานำเข้าจากประเทศญี่ปุ่นคัดสรรจากไร่ชาคุณภาพ เป็นชาเขียวเซนชาผสมผงมัทฉะ ใบชาไม่ผ่านกรรมวิธีการหมักมีความสดและคงความเป็นคุณภาพของใบชา รสชาติของชาจึงมีความกลมกล่อม มีกลิ่นหอมสีสวย ชวนดื่ม กลิ่นของชาสัมผัสได้ถึงความสดชื่นผ่อนคลาย เป็นชาเขียวที่ดื่มแล้วเพิ่มความสดชื่นในยามเช้าได้อย่างดี รสชาติของชากลมกล่อมฝาดนิดๆตามแบบฉบับของชาเขียวแท้100%'},
        {title:' CHAHO Matsu Kaori Matcha Powder',
        img:'https://www.top10.in.th/wp-content/uploads/2020/09/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%97%E0%B8%89%E0%B8%B0-CHAHO-Matsu-Kaori-Matcha-Powder.jpg',
        price:200,
        rating:'100 กรัม',
        review:'CHAHO Matsu Kaori Matcha Powder ชาเขียวแท้ไม่เจือสีไม่ผ่านการปรุงแต่ง หอมกลิ่นชาเขียว ได้รสชาติของชาเขียวแบบกล่อม ผ่านขั้นตอนการบดชาอย่างดี ซึ่งมีความละเอียด สีและรสชาติเป็นกลิ่นชาแบบแท้ๆ สามารถนำมาทำได้หลายเมนูทั้งเมนูเครื่องดื่ม ชาเขียว CHAHO สามารถตีฟองได้ ละลายน้ำได้เร็วทำเครื่องดื่มได้ทั้งร้อนและเย็น และยังสามารถนำมาทำขนมเบเกอรี่ได้สีสวยน่ารับประทาน'},
        
        ])

        const id = ref(0)
        function idcard(i) {
            id.value = i
            
        }

        const bookinglist = ref([]);

 const booking = (destination) => {
    const item = {
    name: destination.title,
    price : destination.price,
    //rating:destination.rating,
    numBookings: 1,
    img :destination.img
  }

        const findId = bookinglist.value.find(e => e.name == item.name)

        if(findId) {
            const findIndexProduct = bookinglist.value.findIndex(e => e.name == item.name)
            bookinglist.value[findIndexProduct].numBookings = bookinglist.value[findIndexProduct].numBookings + item.numBookings
        } else {
            bookinglist.value.push(item)

        }
    }

    const TotalList = computed(()=> {
        return bookinglist.value.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price* currentValue.numBookings;
        }, 0);
      }) 

      const sum = computed(()=> {
        return bookinglist.value.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.numBookings;
        }, 0);
      }) 

      const orderList = ref([]);
      function orderadd(list) {
        orderList.value.push(list);
      
        // Clear the cartList
        bookinglist.value = [];
      }

      const notting =([])

    function delList(i){
        bookinglist.value.splice(i,1)
        } 

        return{MenuListA,id,idcard,booking,bookinglist ,delList,TotalList,sum,notting,orderadd,orderList}
    });