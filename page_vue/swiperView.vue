<template>
    <div>
      <h2>輪播套件-swiper</h2>    
      <h4>安裝 Swiper</h4>
      <pre>
        npm install swiper
      </pre>
      <h4>import</h4>
      <p>全局</p>
      <pre>
        //main.js
        import 'swiper/css';
        //script
        import Swiper from 'swiper';
      </pre>
      <p>組件</p>
      <pre>
        //script
        import Swiper from 'swiper';
        import 'swiper/css';
      </pre>
      <h4>引入swiperJS</h4>
      <p>在mounted引用</p>
      <pre>
        mounted() {
          new Swiper(
            // ".mySwiper", 同下
            this.$refs.mySwiper,
            {
              modules: [Navigation, Pagination],
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                clickable: true  //pagination click
              },

              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

              loop: true 
            }
          )
        }
      </pre>
      <p>mounted找不到資料就要改成watch(監聽數據)+nectTick(循環結束執行,數據修改後執行)</p>
      <pre>
        watch:{
          //監聽數據
          slideData:{
            //接收到ajax data 
            handler:function(){
              console.log(12);
              //數據修改後執行
              this.$nextTick(()=>{
                //執行Swiper
                new Swiper(this.$refs.mySwiper{ ... })
              })
            }
          }
        }
      </pre>
      <h4>實作</h4>
      <div class="swiper mySwiper" ref="mySwiper">
          <div class="swiper-wrapper">
              <!--<div class="swiper-slide" v-for="(item,index) in items" :key="item.id"><img :src="item.src"></div>-->
              <div class="swiper-slide page1">page 1</div>
              <div class="swiper-slide page2">page 2</div>
              <div class="swiper-slide page3">page 3</div>
              <div class="swiper-slide page4">page 4</div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      </div>
      <br>
      <input v-model="slideData" placeholder="slideData_watch">
      <p>Message is: {{ slideData }}</p>
      <br>
      <br>
      <a href="https://ithelp.ithome.com.tw/articles/10272948">輪播套件-swiper</a>
      <a href="https://swiperjs.com/get-started">官網</a>
    </div>
</template>
<style>
.swiper {
    width: 100%;
    height: 400px;
}
.swiper-slide {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-slide.page1{ background-color: #f0e4d4; }
.swiper-slide.page2{ background-color: #f9d9ca; }
.swiper-slide.page3{ background-color: #bdc2bb; }
.swiper-slide.page4{ background-color: #d2d5b8; }
</style>
<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
  data() {
    return {
      slideData:''
    };
  },
  mounted() {
    //get ajax data
    // this.slideData.push('1')
    // console.log(this.slideData)
  },
  watch:{
    //監聽數據
    slideData:{
      //接收到ajax data 
      handler:function(){
        console.log(12);
        //數據修改後執行
        this.$nextTick(()=>{
          //執行Swiper
          new Swiper(
            // ".mySwiper", 同下
            this.$refs.mySwiper,
            {
              modules: [Navigation, Pagination],
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
                clickable: true  //pagination click
              },

              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

              autoplay: {
                  delay: 1000,
              },
              loop: true 
            }
          )
        })
      }
    }
  },
  // computed:{
  // },
  // methods: {
  // }
};
</script>
