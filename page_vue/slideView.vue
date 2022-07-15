<template>
    <div>
      <h2>Slider</h2>    
      <div class="slide">
          <div class="slide-ctrl">
            <div class="slide-prev" @click="slideCtrl(1)">Prev</div>
            <div class="slide-next" @click="slideCtrl(-1)">Next</div>
          </div>
          <transition-group name="flip-list" tag="ul" class="slide-list">
              <li v-for="item in slideData" :key="item.id">
                  <article class="slide-article">
                      <h3>
                        {{ welfare[item.ref].title }}
                      </h3>
                  </article>
              </li>
          </transition-group>
      </div>
      <br />
      <br />
      <hr />
      <a href="https://ilandychiu.medium.com/%E4%BD%BF%E7%94%A8-vue-js-%E7%9A%84%E7%84%A1%E9%99%90%E8%BC%AA%E6%92%AD-slider-87943226c2c2">Slick</a>
    </div>
</template>
<style>
.slide-list li {
  position: relative;
  /* 設定每一個要輪播的項目寬度 */
  flex: calc(100% / 4) 0 0;
  /* 
  為了達成上述圖片示意，因此除了往前推 2 個項目的距離外，
  還要再多推 0.5 個輪播項目的距離，呈現露出半個輪播項目的樣式
  */
  left: calc(-100% / 4 * 2.5);
}
.slide-list li:nth-child(5) .slide-article  {
    background-color: #ff0;
}
.slide-list li:first-child,
.slide-list li:last-child{
    z-index: -1;
    opacity: 0;
}
/* 動畫樣式設定 */
.flip-list-move {
  transition: transform 0.8s;
}
.slide {
  width: 100%;
  overflow: hidden;
}
.slide-list {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.slide-article {
  background-color: #eee;
  padding: 10px;
  height: 100%;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
}
.slide-prev,
.slide-next {
  width: 150px;
  display: inline-block;
  background-color: #000;
  color: #fff;
  margin: 0 10px;
  padding: 5px 15px;
  border-radius: 50px;
  cursor: pointer;
}
.slide-prev:hover,
.slide-next:hover {
  color: #ff0;
}
</style>
<script>
export default {
  data() {
    return {
      slideData: [],
      welfare: [ 
        { title: "優渥獎金" },
        { title: "貼心補助" },
        { title: "OJT培訓" },
        { title: "多元福利" },
        { title: "完善制度" },
        { title: "舒適環境" },
      ],
      clickWait: false,
      timer: {}
    };
  },
  mounted() {
    for (let i = 0; i < this.welfare.length * 2; i++) {
      let obj = {};
      obj.id = i;
      obj.ref = i % this.welfare.length;
      this.slideData.push(obj);
    }
    console.log(this.slideData)
  },
  methods: {
    slideCtrl(slidesToShow = 1) {
      if (this.clickWait) {
        return;
      }
      this.stopTime();
      this.clickWait = true;
      if (slidesToShow > 0) {
        const shiftItem = this.slideData.shift();
        this.slideData.push(shiftItem);
        this.setTime();
        return;
      }
      if (slidesToShow < 0) {
        const shiftItem = this.slideData.pop();
        this.slideData.unshift(shiftItem);
        this.setTime();
      }
    },
    setTime() {
      this.timer = setTimeout(() => {
        this.clickWait = false;
      }, 500);
    },
    stopTime() {
      clearInterval(this.timer);
    },
  },
};
</script>
