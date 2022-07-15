<template>
    <div>
      <h2>Slider2</h2>    
      <div class="slider" ref="sliderlist" :style="sliderlistStyle">
        <transition-group tag="div" :name="direction > 0 ? 'nex' : 'pre'" class="slider_list">
          <img v-for="(src,index) in imgList" :key="src" :src="src" v-show="index === active">
        </transition-group>
        <a class="prev" @click="change(active-1)">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png">
        </a>
        <a class="next" @click="change(active+1)">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png">
        </a>
        <ul class="slider_dots">
          <li v-for="(src,index) in imgList" :class="{active:index === active}" @click="change(index)" :key="index"></li>
        </ul>
      </div>
    </div>
</template>
<style>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.slider>a {
  z-index: 99;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
}
.slider>a img{
  display: block;
  max-width: 50px;
}
.slider>a:hover {
  opacity: 0.7;
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
img{
  width: 100%;
  height: auto;
}
.slider_list{
  font-size: 0;
}
.slider_list > img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: auto;
}
/* .slider_list > img:first-of-type {
  position: relative;
} */
.slider_dots {
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 8px;
  left: 0;
  z-index: 99;
  list-style: none;
  padding: 0;
}
.slider_dots > li {
  display: block;
  margin-right: 8px;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}

.slider_dots > li:hover,
.slider_dots > li.active{
  background: #fff;
}

.nex-enter-active,
.nex-leave-active,
.pre-enter-active,
.pre-leave-active {
  /* transition: left 0.5s; */
  transition: 0.5s;
}

.nex-leave-to ,
.pre-enter-from {
  /* left: -100% !important; */
  transform: translateX(-100%);
}
.nex-enter-from, 
.pre-leave-to {
  /* left: 100% !important; */
  transform: translateX(100%);
}

</style>
<script>
export default {
  data() {
    return {
      active: 0,
      direction: 1,
      imgList: [
        "https://picsum.photos/700/400?image=0",
        "https://picsum.photos/700/400?image=1",
        "https://picsum.photos/700/400?image=2",
      ],
      sliderlistStyle : {}
    };
  },
  created(){
    var img = new Image();
    var obj = this;
    img.onload = function() {
      // obj.$refs.sliderlist.style.minHeight = this.height + 'px';
      obj.sliderlistStyle = {
        'minHeight': this.height + 'px'
      }
    }
    img.src = this.imgList[0];
  },
  mounted() {
  },
  computed:{
    total() {
      return this.imgList.length
    },
  },
  methods: {
    change(index) {
      this.direction = index > this.active ? 1 : -1
      this.active = (index + this.total) % this.total
    }
  }
};
</script>
