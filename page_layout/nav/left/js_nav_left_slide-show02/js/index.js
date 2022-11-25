function leftNav(){
    var leftNav = $('#leftNav');
    if(!leftNav){
        return;
    }
    leftNav.find('li').eq(0).find('ul').slideDown();
    leftNav.find('>li').click(function(){
        if(!$(this).hasClass('active')){
            leftNav.find('>li').removeClass('active').end().find('li>ul').slideUp();
            $(this).addClass('active').find('ul').slideDown();
        }
    })
}
leftNav();