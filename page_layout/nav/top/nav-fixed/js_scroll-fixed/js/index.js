window.onresize =window.onload = window.onscroll = function(){
    var odiv = document.getElementById('div1');
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    var t =(document.documentElement.clientHeight-odiv.offsetHeight)/2;
    var k = scrolltop+t;
   odiv.style.top=scrolltop+t+'px';
}