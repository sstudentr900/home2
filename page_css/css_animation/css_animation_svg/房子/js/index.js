var vm = new Vue({
  el: "#app",
  data: {
    scene_door: "",
    scene_temple: "",
    active: true
  },
  mounted: function(){
    var vobj=this;
    $.get("https://awiclass.monoame.com/api/command.php?type=get&name=scene_door.svg",function(res){  Vue.set(vobj,"scene_door",res);
    },"text");
  }
});