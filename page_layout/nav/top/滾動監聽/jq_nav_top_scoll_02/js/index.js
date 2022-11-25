 /*nav*/
function nav(topmap){
    var href,scrollItems,offsettop,
    nav = $('#nav'),
    navheight = nav.outerHeight()- 1,
    navItems = nav.find('.navitem').find('a');
    var isTop=true;
    var timer=null;

    navItems.click(function(e){
        var navlinkthis = $(this);
        navlinkfn(navlinkthis);
        e.preventDefault();
    });
    //console.log(navItems);
    scrollItems = navItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+navheight+20;

        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        navItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");

        //捲軸底
        var $BodyHeight = $(document).height();//判斷整體網頁的高度
        var $ViewportHeight=$(window).height();//判斷所見範圍的高度
        var $ScrollTop=$(this).scrollTop();//偵測目前捲軸頂點
        if($BodyHeight==($ViewportHeight+$ScrollTop)){
            navItems.parent().removeClass("active").eq(-1).addClass("active");
            clearInterval(timer);
        }

        //google地圖
        if(!topmap.height()==0){
            starmove(topmap,0);
            return false;
        }

        //停止動畫
        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;

    });

    function navlinkfn(obj){
      $('#nav-trigger').prop("checked", false);
        href = obj.attr('href');
        offsettop= $(href).offset().top - navheight;
      
        //setInterval
        clearInterval(timer);
        timer = setInterval(function(){
            var scollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var itarget = scollTop-offsettop;
            var ispeed = itarget<0?Math.ceil(-itarget/8):Math.floor(-itarget/8);
            if(Math.abs(scollTop-offsettop)<1){
                clearInterval(timer);
                document.documentElement.scrollTop=document.body.scrollTop = offsettop;
            }else{
                isTop=true;
                document.documentElement.scrollTop=document.body.scrollTop = scollTop+ispeed;
            }
        },50);
      
      //requestAnimationFrame
    //   var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    //   var timer = null;
    //   var isScroll = true;
    //   cancelAnimationFrame(timer);
    //   timer = requestAnimationFrame(Animation);
    //   function Animation(){
    //         var number = 8;
    //         var scollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //         var offsetTop = document.getElementById(self.getAttribute('href').slice(1)).offsetTop;
    //         var itarget = scollTop-offsetTop;
    //         var ispeed = itarget<0?Math.ceil(-itarget/number):Math.floor(-itarget/number);
    //         if(Math.abs(itarget)<1){
    //             document.documentElement.scrollTop=document.body.scrollTop = offsetTop;
    //         }else{
    //             document.documentElement.scrollTop=document.body.scrollTop = scollTop+ispeed;
    //             timer = requestAnimationFrame(Animation);
    //         }
    //     };  
      
    }
    //判斷是否有滾動
    // document.addEventListener("wheel",function (ev) {
    //     cancelAnimationFrame(timer);
    // });
  
}
//google地圖
function starmove(obj,target){
    if(!obj.height()==0){
        target=0;
    }else{
        target=450;
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var icur = parseInt(obj.height());
        var speed = (target-icur)/8;
        speed = speed > 0?Math.ceil(speed):Math.floor(speed);
        if(icur==target){
        clearInterval(obj.timer);
        }else{
        var k =icur+speed
        obj.height(k);
        }
    },30);
}
$(document).ready(function() {
    var topmap =  $('#topmapout');
    nav(topmap);
    //google地圖
    $('#navtopmap').click(function(e){
        if(!topmap.height()==0){
        starmove(topmap,0);
        }else{
        starmove(topmap,450);
        }
    });
});