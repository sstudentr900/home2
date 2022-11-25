$(function(){
  $('.subs').hide();
  $('.main').click(function(){
    $('.subs').slideUp();
    // $('+ul:not(:animated)',this).slideDown();
    if($('+ul',this).css('display')=='none'){
        $('+ul',this).slideDown();
    }
  }).mouseover(function(){
    $(this).addClass('rollover');
  }).mouseout(function(){
     $(this).removeClass('rollover');
  })
})