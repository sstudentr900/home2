function showslider02(){
    var slideshow = document.getElementById('slideshow02');
    if(!slideshow){
        return;
    }
    var lis = slideshow.querySelectorAll('li');
    var liHeight;
//  var liWidth = lis[0].offsetWidth;
    var liWidth;
    var liLength = lis.length;
    var ul = slideshow.querySelector('ul');
    var SlidesNumber;

    init();

    function init(){

        //liWidth
        var slideshowW = slideshow.offsetWidth;
        var customNumber = -10;
        var lg = window.matchMedia( "(min-width: 1500px)" );
        var md = window.matchMedia( "(min-width: 992px)" );

        if (lg.matches) {
            liWidth = slideshowW/5;
            SlidesNumber = 2;
            console.log(slideshowW);
        }else if(md.matches){
            liWidth = slideshowW/3;
            SlidesNumber = 1;
        }else{
            liWidth = slideshowW;
            customNumber = +20;
        }
        liWidth = Math.floor(liWidth);
        for(var i=0; i<liLength; i++){
            lis[i].style.width = liWidth + 'px';
        }

        //ul
        ul.style.width = liWidth*liLength+'px';

        //slideshowheight
        liHeight = lis[0].offsetHeight;
        slideshow.style.height = liHeight+'px';

        $(slideshow).find('.control').remove();

        //prev
        var prev = document.createElement('div');
        prev.className='control previous';
        prev.style.marginLeft= -(liWidth/2) + customNumber + 'px';
        prev.onclick = function(){
            showSlides(-1);
        };
        slideshow.appendChild(prev);

        //next
        var next = document.createElement('div');
        next.className='control next';
        next.style.marginRight = -(liWidth/2) + customNumber + 'px';
        next.onclick = function(){
            showSlides(1);
        };
        slideshow.appendChild(next);


        showSlides(0);
    }

    function showSlides(n) {
        //ul move
        var $ul = $(ul).eq(0);
        var $liLast = $ul.find('li').last();
        var $liFirst = $ul.find('li').first();

        $ul.animate({
            left: liWidth*n + 'px'
        },200,function(){
            if(n==1){
                $liLast.prependTo($ul);
            }else if(n==-1){
                $liFirst.appendTo($ul);
            }
            $ul.css('left', '');
            active(SlidesNumber);
        });
        active(SlidesNumber);
    }

    function active(e){
        $('#slideshow02 ul li').removeClass('active').eq(e).addClass('active');
    }

    window.addEventListener('resize',function(){
        init();
    });
}
window.onload=function(){
  showslider02();
}