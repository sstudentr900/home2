//nav
$('.gotop').click(function(event){
    event.preventDefault();
    var scrollTop = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop:scrollTop},600);
});