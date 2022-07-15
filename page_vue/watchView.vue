<template>
    <div>
      <h2>watch</h2>  
      <pre>
        watch:{
          //監聽數據
          slideData:{
            immediate:true,//不須數據改變立即監聽
            handler:function(){
                console.log('監聽數據')
            }
          }
        }
      </pre>
      <p>nextTick監聽v-for完執行</p>
      <pre>
        watch:{
          slideData:{
            handler:function(){
              //監聽v-for完執行
              this.$nextTick(()=>{})
            }
          }
        }
      </pre>
      <br>
      <br>
      <a href="https://www.youtube.com/watch?v=3F_xRWa39pM&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=39">官網</a>
    </div>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      slideData:''
    };
  },
  mounted() {
  },
  watch:{
    slideData:{
      immediate:true,//不須數據改變直接執行
      handler:function(){
        console.log('slideData')
      }
    }
  },
  // computed:{
  // },
  // methods: {
  // }
};
</script>
