nav();
function nav(){
    var $mainNav = $('#mainNav');
    if(!$mainNav){
        return;
    }
    var $gotop = $('.gotop');
    var $hearderHeight = $('#header').height();
    var $mainNavLi = $mainNav.find('.gotop');
  
   function offsetTop(obj){
        return $($(obj).attr('href')).offset().top - $hearderHeight;
    }
   function SliderCss(){
        $mainNavLi.each(function(){
            if( $(window).scrollTop() > offsetTop(this) - 10){  
                $mainNavLi.removeClass('active');
               $(this).addClass('active');
            }
        })
    }
  
   $mainNavLi.on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: offsetTop(this) },600);

        //手機
        if($('#wrapper').hasClass('active')){
            hasActive();
        }
    })
   $(window).on({
        scroll: function() {
            SliderCss();
        },
        resize: function() {
            SliderCss();
        }
    });
  
    //nav(手機
    $(document).on('click','#navButton',function(){
        hasActive();
    });

}
//手機顯示
function hasActive(){
    var $nav = $('#navButton').parents('#header').find('.nav');
    if($('#wrapper').hasClass('active')){
        $('#wrapper').removeClass('active');
        $nav.css({
            'left': '100%'
        })
    }else{
        $('#wrapper').addClass('active');
        $nav.css({
            'left': 0
        })
    }
}



//第二總寫法
 function nav02(){
    var $nav = $('#mainNav');
    if(!$nav){
        return;
    }
    var $li = $nav.find('li').not(':first');

    function offsetTop(obj){
        return $($(obj).find('a').attr('href')).offset().top;
    }
    function SliderCss(){
        //營幕高度
        var windowHeight = $(window).height()/2;

        $li.each(function(i,e){

            var windowScroll = $(window).scrollTop();

            if( windowScroll > offsetTop(this)-windowHeight){
                $li.removeClass('active');
                $(this).addClass('active');
            }

            //小於系統特色移除active
            if(i==0){
                if( windowScroll < offsetTop(this)-windowHeight){
                    $li.removeClass('active');
                }
            }

        })

    }

    $(window).on({
        scroll: function() {
            SliderCss();
        },
        resize: function() {
            SliderCss();
        }
    });
    $($li).on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: offsetTop(this) },600);
    })

}