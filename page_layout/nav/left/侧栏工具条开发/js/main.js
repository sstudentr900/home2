/**
 * Created by SONY on 2016/5/21.
 */
requirejs.config({
    paths:{
        jquery:'jquery-2.2.4.min'
    }
});
//01
//requirejs(['jquery'],function($){
//    $('#backtop').on('click',move);
//    $(window).on('scroll',function(){
//        checkposition($(window).height());
//
//    });
//    checkposition($(window).height());
//    function go(){
//        $('html,body').scrollTop(0);
//    }
//    function move(){
//        $('html,body').animate({
//            scrollTop:0
//        },800)
//
//    }
//    function checkposition(pos){
//        if($(window).scrollTop() > pos){
//            $('#backtop').fadeIn();
//        }else{
//            $('#backtop').fadeOut();
//        }
//    }
//})
//02
requirejs(['jquery','scrollto'],function($,scrollto){
    var scroll = new scrollto.ScrollTo({
        dest:0,
        speed:600
    });
    $('#backtop').on('click', $.proxy(scroll.move,scroll));
    $(window).on('scroll',function(){
        checkposition($(window).height());

    });
    function checkposition(pos){
        if($(window).scrollTop() > pos){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    }
})

