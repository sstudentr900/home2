$(function(){
  var $window =$(window);
  var $heard =  $('#headerContainer');
  $window.on('scroll',scroll);$window.trigger('scroll');
  function scroll(){
    console.log($('#headerTopicContainer').height() <= $(window).scrollTop());
    if($('#headerTopicContainer').height() <=$window.scrollTop()){
      $heard.css({
        'position':'fixed',
        'top':0,
        'left':0
      })
    }else{
       $heard.css({
        'position':'static',
        'top':'',
        'left':''
      })
    }
  }
  
})