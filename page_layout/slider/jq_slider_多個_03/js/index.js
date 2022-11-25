 function slide02(){
    var $slide = $('#slide02');
    var $li = $slide.find('li');
    var $ul = $slide.find('ul');
    var liL = $li.length;
    var slideW= 0,showLi= 0,ulW= 0,showPoint= 0,id= 0;
    $li.eq(0).find('img').on('load',function(){
        init();
    })
    function init(){
        var showLiH=0,liH=0,liW=0,imgH=0,imgW=0,imgPro=0;
        var lg = window.matchMedia('(min-width: 1000px)');
        var md = window.matchMedia('(min-width: 760px)');
        var sm = window.matchMedia('(min-width: 600px)');
        if(lg.matches){
            showLi= 6;
        }else if(md.matches){
            showLi= 4;
        }else if(sm.matches){
            showLi= 2;
        }

        imgH= $('#slide02').find('li').eq(0).find('img').height();
        imgW= $('#slide02').find('li').eq(0).find('img').width();
        imgPro = imgW/imgH;
        slideW = $slide.width();
        showLiH = showLi/2;
        showPoint = Math.ceil(liL/showLi);
        liW = parseInt(slideW/showLiH);
        liH = parseInt(liW/imgPro);

        //UL
        ulW = (liW*showLiH*showPoint);
        $ul.css({
            'width': ulW,
            'marginLeft': 0,
            'height': liH*2
        });

        //li
        var leftN= 0,q= 0,topN = 0;
        $li.each(function(i){
            if(i%showLi==0 && i!=0) {
                q ++;
            }
            for(var j=0; j<showLiH; j++){
                if(i%showLiH == j){
                    leftN = liW*j + q * slideW;
                    topN = liH;
                }
                if(i%showLi == j){
                    topN = 0;
                }
            }

//                    if(i%6 == 0 || i%6 == 1 || i%6 == 2){//0,1,2,6,7,8
//                        topN = 0;
//                        console.log('i'+i)
//                    }else{
//                        topN = liH;
//                    }
//                    if(i%3 == 0){      //0, 3, 6, 9, 12
//                        leftN = 0;
//                    }else if(i%3 == 1){ //1, 4, 7, 10, 13
//                        leftN = liW*1;
//                    }else if(i%3 == 2){ //2, 5, 8, 11, 14
//                        leftN = liW*2;
//                    }

            $li.eq(i).css({
                'width': liW,
                'top': topN,
                'left': leftN,
                'height': liH
            });
        })

        //Point
        $slide.find('.point').remove();
        for(var m=0; m<showPoint; m++){
            var active;
            if(m == 0){
                active=' active';
            }else{
                active='';
            }
            $slide.find('.points').append('<div class="point'+ active +'" data-id="'+ m +'"></div>');

            //click
            $slide.find('.point:last').on('click',function(){
                id = $(this).data('id');
                move();
            })
        }
    }
    function move(){
        var dis = id * slideW;
        //最後一個
        if(id == showPoint -1){
            dis = ulW-slideW;
        }

        $ul.animate({
            marginLeft : -dis+"px"
        },500);

        //active
        $slide.find('.point').removeClass('active').eq(id).addClass('active');
    }
    $(window).resize(function(){
        init();
    })

}
  slide02();