<template>
    <div>
      <h2>Slider</h2>    
      <div class="slide">
          <div class="top">
            <img :src="welfare[nowImageIndex].src" alt="">
          </div>
          <div class="bottom">
            <div class="content">
              <ul v-bind:style="{transform:'translateX('+slideUl+'%)'}">                
                <li v-for="(item,index) in welfare" :key="index" :class="{active:nowImageIndex==index}" @click="clickImg(index)">
                  <img :src="item.src" alt="">
                </li>
              </ul>
            </div>
            <div class="ctrl">
              <div class="prev" @click="slideCtrl(1)"></div>
              <div class="next" @click="slideCtrl(-1)"></div>
            </div>
          </div>
      </div>
    </div>
</template>
<style>
.slide {
  width: 50%;
  margin: auto;
}
.slide .top{
  font-size: 0;
}
.slide .top img{
  width: 100%;
  height: auto;
}
.slide .bottom{
  width: 100%;
  position: relative;
}
.slide .ctrl>div{
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 3px;
  width: 16px;
  height: 16px;
  border: 0;
  border-left: 2px solid #222;
  border-bottom: 2px solid #222;
  transform: translateY(-50%) rotate(45deg);
  opacity: .4;
  transition: opacity .5s ease;
} 
.slide .ctrl>div.next{
  left: auto;
  right: 3px;
  transform: translateY(-50%) rotate(-135deg);
} 
.slide .content {
  margin: 5px 20px 0;
  overflow: hidden;
}
.slide ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  font-size: 0;
  position: relative;
}
.slide ul li {
  flex: calc(100% / 4) 0 0;
  height: 100%;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
  cursor: pointer;
}
.slide ul li.active{
  border: 3px solid #222;
}
.slide ul li img{
  width: 100%;
  height: auto;
}
/* 動畫樣式設定 */
.flip-list-move {
  transition: transform 0.8s;
}
</style>
<script>
export default {
  data() {
    return {
      welfare: [ 
        { 
          src: "https://unsplash.it/300/300?image=1084",
          id: 1 
        },
        { 
          src: "https://unsplash.it/300/300?image=1083",
          id: 2 
        },
        { 
          src: "https://unsplash.it/300/300?image=1082",
          id: 3 
        },
        { 
          src: "https://unsplash.it/300/300?image=1081",
          id: 4 
        },
        { 
          src: "https://unsplash.it/300/300?image=1084",
          id: 5 
        },
        { 
          src: "https://unsplash.it/300/300?image=1082",
          id: 6 
        },
        // { 
        //   src: "https://unsplash.it/300/300?image=1083",
        //   id: 7 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1084",
        //   id: 8 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1083",
        //   id: 9 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1082",
        //   id: 10 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1081",
        //   id: 11 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1084",
        //   id: 12 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1082",
        //   id: 13 
        // },
        // { 
        //   src: "https://unsplash.it/300/300?image=1083",
        //   id: 14 
        // },
      ],
      slideUl:0,
      nowImageIndex: 0,
      clickWait: false,
      timer: {},
    };
  },
  mounted() {
  },
  methods: {
    slideCtrl(slidesToShow = 1) {
        console.log(slidesToShow,this.nowImageIndex,this.nowImageIndex>=1,this.welfare.length-this.nowImageIndex>4)
      if (slidesToShow > 0 && this.nowImageIndex>=1) {
        console.log(12)
        this.nowImageIndex--;
        this.slideUl = this.nowImageIndex*-1*25 
        console.log('pre',this.nowImageIndex,this.welfare.length)
        return;
      }
      if (slidesToShow < 0 && this.welfare.length-this.nowImageIndex>4) {
        this.nowImageIndex++;
        this.slideUl = this.nowImageIndex*-1*25 
        console.log('nex',this.nowImageIndex,this.welfare.length)
      }
    },
    clickImg(index){
      this.nowImageIndex = index
      if(this.welfare.length-index>=4){
        this.slideUl = this.nowImageIndex*-1*25 
      }
    }
  },
};
</script>
