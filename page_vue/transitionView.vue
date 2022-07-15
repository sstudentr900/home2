<template>
    <div>
      <h2>transition</h2>
      <p>v==transition</p>
      <p>v-enter-from : 定義元素在進場「之前」的樣式。</p>
      <p>v-enter-active : : 定義元素在進場「過程」的樣式。</p>
      <p>v-enter-to : : 定義元素在進場「結束時」的樣式。</p>
      <p>v-leave-from : 定義元素在退場「之前」的樣式。</p>
      <p>v-leave-active : : 定義元素在退場「過程」的樣式。</p>
      <p>v-leave-to : : 定義元素在退場「結束時」的樣式。</p>
      <div class="div-flex">
        <div class="wrap">
            <transition>
              <div class="block" v-show="isShow">hellow1</div>
            </transition>  
        </div>
      </div>
      <br>
      <button @click="isShow =! isShow">Toggle</button>
      <h2>mode</h2>
      <p>(name="slide") == (v=slide) == (slide-enter-from)</p>
      <p>v-if判斷切換顯示元素</p>
      <p>新元素進場的動畫先執行，再移除現有的元素 (mode:in-out)</p>
      <p>先移除現有的元素，再執行新元素進場的動畫 (mode:out-in)</p>
      <div class="div-flex">
        <div class="wrap">
            <transition name="slide" mode="in-out">
              <div class="block" v-if="isShow">hellow1</div>
              <div class="block" v-else>hellow2</div>
            </transition>  
        </div>
        <div class="wrap">
            <transition name="slide" mode="out-in">
              <div class="block" v-if="isShow">hellow1</div>
              <div class="block" v-else>hellow2</div>
            </transition>  
        </div>
      </div>
      <br>
      <button @click="isShow =! isShow">Toggle</button>
      <h2>transition-group</h2>
      <p>transition-group 透過ARRAY判斷元素</p>
      <transition-group name="list" class="number-list" tag="ul">
          <li v-for="(item,index) in carousels" :key="index" class="item">{{index}}</li>
      </transition-group>  
      <p>{{carousels}}</p>
      <br>
      <button @click="add">add</button>
      <button @click="delet">delet</button>
      <br />
      <br />
      <hr />
      <a href="https://book.vue.tw/CH2/2-5-transitions.html">transition</a>
    </div>
</template>
<style>
.div-flex{
  display: flex;
}
.wrap {
  display: block;
  width: 150px;
  height: 100px;
  overflow: hidden;
  margin-right: 1.5rem;
}
.block {
  display: block;
  width: 150px;
  height: 100px;
  padding: 20px 0;
  text-align: center;
  line-height: 1.75;
  background-color: #0f0;
}
.v-leave-active,
.v-enter-active,
.slide-leave-active,
.slide-enter-active{
  transition: opacity 0.75s;
}
.v-enter-from,
.v-leave-to,
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from ,
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
/**/ 
.number-list {
  overflow: hidden;
  padding: 0;
}
.number-list li{
  display: block;
  float: left;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background-color: #f00;
  color: #fff;
  margin-right: 1rem;
  margin-left: 0;
}
.list-enter-active,
.list-leave-active,
.list-move {
  transition: opacity 0.7s, transform 0.7s;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
<script>
export default {
  data() {
    return {
      isShow: true,
      carousels: [1,2,3]
    };
  },
  mounted() {
  },
  methods: {
    delet(){
      console.log('delet');
      this.carousels.pop()
    },
    add(){
      const randomNumber = Math.ceil(Math.random() * 100) + 1;
      this.carousels.push(randomNumber)
    },
  },
};
</script>
