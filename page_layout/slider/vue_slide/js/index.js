//設定展示作品資料
var works = [
  {
    title: "海象樂園",
    description: "趴在冰層上的懶惰動物",
    cover: "https://unsplash.it/400/300?image=1084"
  },
  {
    title: "搭船遊去",
    description: "不會游泳只好搭船",
    cover: "https://unsplash.it/400/300?image=1083"
  },
  {
    title: "老年學鋼琴",
    description: "學習永遠不嫌晚！",
    cover: "https://unsplash.it/400/300?image=1082"
  },
  {
    title: "高樓的一隅",
    description: "繁複的幾何線條構築",
    cover: "https://unsplash.it/400/300?image=1081"
  },
  {
    title: "草莓來襲",
    description: "聽見果農的艱辛",
    cover: "https://unsplash.it/400/300?image=1080"
  },
  {
    title: "探索宇宙",
    description: "看見光的速度與殘影",
    cover: "https://unsplash.it/400/300?image=1079"
  }
];
    
var vm = new Vue({
  el: "#app",
  data: {
    now_index: 0,
    works: works,
    //左右margin+cover大小ㄐ
    span: 930
  },
  computed: {
    computed_left(){
      return {
        //左距離＝偏移負的單格距離＊現在正在瀏覽的index
        "left": (-this.span*this.now_index)+"px"
      };
    }
  },
  methods:{
    
    bg_css(url){
      return {"background-image":"url("+url+")"}
    },
    delta(d){
      // (原本的id+變化+總長）% 總長
      // (0 + (-1) + 5) % 5 = 4
      this.now_index=(this.now_index+d+this.works.length)%this.works.length;
    }
  }
});