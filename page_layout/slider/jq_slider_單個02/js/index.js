//slider(JQ)
function showslider(){
    var slideshow = document.getElementById('slideshow');
    if(!slideshow){
        return;
    }
    var lis = slideshow.querySelectorAll('li');
    var lisHeight = lis[0].offsetHeight;
    var liLength = lis.length;
    var ul = slideshow.querySelector('ul');
    var slideIndex = 0;

    showslidesinit();
    function showslidesinit(){
       //liWidth
       for(var i=0; i<liLength; i++){
            lis[i].style.left = (100*i)+'%';
       }
        //ulWidth
        ul.style.height = lisHeight+'px';
        //dotDiv
        var dotDiv = document.createElement('div');
        dotDiv.className='dotdiv';
        //prev
        var prev = document.createElement('a');
        prev.className='prev';
        //prev.setAttribute('href','javascript:now(-1);');
        prev.setAttribute('href','javascript:;');
        prev.onclick = function(){
            now(-1);
        };

        prev.innerHTML = '&#10094';
        dotDiv.appendChild(prev);
        //next
        var next = document.createElement('a');
        next.className='next';
        //next.setAttribute('href','javascript:now(1);');
        next.setAttribute('href','javascript:;');
        next.onclick = function(){
            now(1);
        };
        next.innerHTML = '&#10095;';
        dotDiv.appendChild(next);

        //dot
        for (var i = 0; i < liLength; i++) {
            var dot = document.createElement('span');
            dot.className = 'dot text-one';
            dot.index=i;
            dot.onclick = function(){
                showSlides(this.index);
            };
            dot.innerHTML = 'PANTONEVIEW Home + Interiors 2018';
            dotDiv.appendChild(dot)
        }
        slideshow.appendChild(dotDiv);
        showSlides(slideIndex);
    }
    function now(n){
        var now = (slideIndex+n+liLength)%liLength;
        showSlides(now);
    }
    function showSlides(n) {
        //當前Index
        slideIndex = n;
        //ul move
        ul.style.transform = 'translateX(-'+(100*n)+'%)';
        //dot
        var dots = slideshow.querySelectorAll('.dot');

        for(var i=0;i<dots.length;i++){
            dots[i].className = 'dot text-one';
        }
        dots[n].className += " active";
    }
    window.onresize = function() {
        lisHeight = lis[0].offsetHeight;
        ul.style.height = lisHeight+'px';
    };
}
window.onload=function(){
    showslider();
}

//slider(js)
// window.onresize = function() {
//     new sliderInits('slideshow');
// };
// window.onload=function(){
//     new sliderInits('slideshow');
// }
// function sliderInits(id){
//     this.slideshow = document.getElementById(id);
//     if(!this.slideshow) return;
//     this.lis = this.slideshow.querySelectorAll('li');
//     this.lisHeight = this.lis[0].offsetHeight;
//     this.liLength = this.lis.length;
//     this.ul = this.slideshow.querySelector('ul');
//     this.slideIndex = 0;
//     var _this=this;
//     //liLeft
//     for(var i=0; i<this.liLength; i++){
//         this.lis[i].style.left = (100*i)+'%';
//     }
//     //ulHeight
//     this.ul.style.height = this.lisHeight+'px';
//     //dotDiv
//     var dotDiv = document.createElement('div');
//     dotDiv.className='dotdiv';
//     //prev
//     var prev = document.createElement('a');
//     prev.className='prev';
//     //prev.setAttribute('href','javascript:sliderNow(-1);');
//     prev.setAttribute('href','javascript:;');
//     prev.innerHTML = '&#10094';
//     prev.onclick = function(){
//         _this.sliderNow(-1);
//     };
//     dotDiv.appendChild(prev);
//     //next
//     var next = document.createElement('a');
//     next.className='next';
//     //next.setAttribute('href','javascript:sliderNow(1);');
//     next.setAttribute('href','javascript:;');
//     next.innerHTML = '&#10095;';
//     next.onclick = function(){
//         _this.sliderNow(1);
//     };
//     dotDiv.appendChild(next);

//     //dot
//     if(!this.slideshow.querySelector('.dotdiv')){
//         for (var i = 0; i < this.liLength; i++) {
//             var dot = document.createElement('span');
//             dot.className = 'dot text-one';
//             //dot.setAttribute('onclick','sliderMove('+ i +')');
//             dot.innerHTML = 'PANTONEVIEW Home + Interiors 2018';
//             dot.index = i;
//             dot.onclick = function(){
//                 _this.sliderMove(this.index);
//             };
//             dotDiv.appendChild(dot)
//         }
//         this.slideshow.appendChild(dotDiv);
//     }

//     this.sliderMove(this.slideIndex);
// }
// sliderInits.prototype.sliderMove=function(n){
//     //當前Index
//     this.slideIndex = n;
//     //ul move
//     this.ul.style.transform = 'translateX(-'+(100*n)+'%)';
//     //dot
//     var dots = this.slideshow.querySelectorAll('.dot');
//     for(var i=0;i<dots.length;i++){
//         dots[i].className = 'dot text-one';
//     }
//     dots[n].className += " active";
// }
// sliderInits.prototype.sliderNow= function(n){
//     var now = (this.slideIndex+n+this.liLength)% this.liLength;
//     this.sliderMove(now);
// }