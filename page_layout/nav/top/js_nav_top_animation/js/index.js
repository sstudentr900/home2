//拉霸不會滾動
function unmouseeheel(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
}
function fadeIn(el,n,s,fn){
    var start = window.performance.now();
    var icur = Math.round(el.style.opacity) || 0;
    var speed = n-icur;
    (function tick(){
        var now =  window.performance.now() - start;
        //等速
        el.style.opacity = icur + ((now / s).toFixed(2)) * speed;
        if(now < s){
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 24);
        }else{
           if(fn){
               fn();
           }
        }
    })();
}
function randomChar() {
    var pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    var arr = pool.split('');
    return arr[Math.floor(Math.random()*arr.length)]
}
function shuffleLetters (obj) {
    if(obj.getAttribute('animated')){
        return true;
    }
    obj.setAttribute('animated','true');
    var str = obj.textContent.split(''),
        len = str.length;
    obj.textContent ='';
    obj.style.opacity = '1';
    (function shuffle(start){
        if(start>len){
            obj.setAttribute('animated','');
            return;
        }
        var strCopy = str.slice(0); // Fresh copy of the string
        for(var i=Math.max(start,0);i<len;i++){
            if( i < start+5){
                strCopy[i] = randomChar();
            }else{
                strCopy[i] = "";
            }
            // console.log('i '+ i);
            // console.log('start '+ start);
            // console.log('start+5 '+ (start*1+5*1));
            // console.log('letters '+ letters[i]);
            // console.log('strCopy '+ strCopy[letters[i]]);
        }
        // console.log(start+'次的循環 '+ strCopy.join(""));

        obj.textContent = strCopy.join("");
        setTimeout(function(){
            shuffle(start+1);
        },1000/30);
    })(-5);
}
function menuActive() {
    var gotoObj = document.querySelectorAll('.indexHeader .menuopen .goto');
    var fromTop = document.documentElement.scrollTop||document.body.scrollTop;
    for(var i=0; i<gotoObj.length;i++){
        gotoObj[i].classList.remove('active');
        var id = document.getElementById(gotoObj[i].getAttribute('href').slice(1));
        if(id.offsetTop < fromTop+10 && id.offsetTop+id.offsetHeight> fromTop){
            gotoObj[i].classList.add('active');
        }
    }
}
function menufn(obj) {
    var menuopen = obj.nextElementSibling;
    var linkAll = menuopen.querySelectorAll('a');
    var content = menuopen.querySelectorAll('.content')[0];
    init();
    function init() {
        for(var i=0;i<linkAll.length;i++){
            linkAll[i].style.opacity = '';
        }
        content.style.opacity ='0';
        document.addEventListener('mousewheel', unmouseeheel);
    }
    if(obj.classList.contains('active')){
        obj.classList.remove('active');
        init();
        fadeIn(menuopen,0,300,function(){
            menuopen.style.visibility = 'hidden';
            document.removeEventListener('mousewheel', unmouseeheel);
        });
    }else{
        menuopen.style.visibility = 'visible';
        fadeIn(menuopen,1,500,function() {
            obj.classList.add('active');
            content.style.opacity = '1';
            setTimeout(function(){
                //文字動畫
                (function time(i) {
                    if(i>linkAll.length-1){
                        return;
                    }
                    setTimeout(function(){
                        shuffleLetters(linkAll[i]);
                        time(i+1);
                    }, 100);
                })(0);
            }, 300);
        });
    }
}
function menu(argument) {
    document.querySelectorAll('.menu')[0].addEventListener('click',function(){
        menufn(this);
    });
}
window.onload=function() {
  menu();
}
document.addEventListener('scroll', function () {
    menuActive();
})