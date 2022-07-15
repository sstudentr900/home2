<template>
    <div>
      <h2>Slider3</h2>    
      <div class="carousel-wrap" 
      ref="carousel" 
      data-auto="true" 
      data-delay="5000" 
      @mouseenter.stop="toggleTimer = false" 
      @mouseleave.stop="toggleTimer = true"
      @touchstart.stop="touchStart" 
      @touchmove.stop="touchMove" 
      :style="'min-height:' + minHeight "
      >
          <transition-group :name="carouselName">
            <div class="item" v-for="(s, i) in carousels" v-show="show == i" :key="i"><a :href="s.href"><img :src="s.img"/></a></div>
          </transition-group>
        <a class="button-prev" href="#" @click.prevent="toPrev">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"/>
        </a>
        <a class="button-next" href="#" @click.prevent="toNext">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"/>
        </a>
        <div class="dot-group"><a v-for="(l, i) in len" href="#" :class="{ 'active': show == i }" @click.prevent="show = i" :key="i"></a></div>
      </div>
    </div>
</template>
<style>
.carousel-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  /* border: 2px solid rgba(255, 255, 255, 0.1); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* height: 405px; */
}
.carousel-wrap .item {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #000;
  color: #FFF;
  opacity: 1;
}
.carousel-wrap .item:first-of-type {
  position: relative;
}
.carousel-wrap .item img {
  display: block;
  max-width: 100%;
}
.carousel-wrap .item a {
  display: block;
}
.button-prev, .button-next, .dot-group {
  position: absolute;
  z-index: 1;
}
.button-prev, .button-next {
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
}
.button-prev:hover, .button-next:hover {
  opacity: 0.7;
}
.button-prev img, .button-next img {
  display: block;
  max-width: 50px;
}
.button-next {
  right: 0;
}
.dot-group {
  right: 0;
  bottom: 8px;
  left: 0;
  display: flex;
  justify-content: center;
}
.dot-group a {
  display: block;
  margin-right: 8px;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: 0.3s;
}
.dot-group a:hover, .dot-group a.active {
  background: #fff;
}

.carousel-prev-enter-active, .carousel-prev-leave-active,
.carousel-next-enter-active, .carousel-next-leave-active {
  /* transition: transform 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  will-change: transform; */
  transition: 0.5s;
}

.carousel-next-enter-from, .carousel-prev-leave-to {
  transform: translateX(100%);
}

.carousel-next-leave-to, .carousel-prev-enter-from {
  transform: translateX(-100%);
}
</style>
<script>
// carousel items
const carousels = [
  {
    img: 'https://picsum.photos/900/506?image=1081',
    href: "#"
  },
  {
    img: 'https://picsum.photos/900/506?image=1068',
    href: "#"
  },
  {
    img: 'https://picsum.photos/900/506?image=989',
    href: "#"
  }
];
export default {
  data() {
    return {
      carouselName: 'carousel-next',
      carousels: carousels,
      len: 0,
      show: 0,
      xDown: null, // for swiper
      yDown: null, // for swiper
      autoplay: false, // 是否自動輪播
      timer: null, // auto play
      timerDelay: 3000, // 自動輪播間隔秒數
      toggleTimer: true, // pause auto play
      minHeight: 0 // 抓最小高度
    };
  },
  mounted() {
    this.len = this.carousels.length;
    // console.log(this.$refs.carousel)
    // console.log(this.$refs.carousel.style.minHeight)
    // this.autoplay = this.$refs.carousel.dataset.auto == 'true';
    // this.timerDelay = Number(this.$refs.carousel.dataset.delay) || 3000;
    // if(this.autoplay) this.autoPlay();
    window.addEventListener('load', () => {
      this.$refs.carousel.style.minHeight = this.$refs.carousel.offsetHeight + 'px';
    });
  },
  computed:{
  },
  methods: {
    toNext() {
      this.carouselName = 'carousel-next';
      this.show + 1 >= this.len ? this.show = 0 : this.show = this.show + 1;
    },
    toPrev() {
      this.carouselName = 'carousel-prev';
      this.show - 1 < 0 ? this.show = this.len - 1 : this.show = this.show - 1;
    },
    // swiper event(for mobile)
    touchStart(e) {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
    },
    touchMove(e) {
      const _this = this;
      if(!this.xDown || !this.yDown) { return; }

      let xUp = e.touches[0].clientX;
      let yUp = e.touches[0].clientY;

      let xDiff = this.xDown - xUp;
      let yDiff = this.yDown - yUp;

      if(Math.abs(xDiff) > Math.abs(yDiff)) {
        xDiff > 0 ? _this.toNext() : _this.toPrev();
      }
      this.xDown = null;
      this.yDown = null;
    },
    // 自動輪播
    autoPlay() {
      setInterval(() => {
        if(this.toggleTimer) this.toNext();
      }, this.timerDelay);
    }
  }
};
</script>
