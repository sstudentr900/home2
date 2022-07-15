//https://ithelp.ithome.com.tw/articles/10222749
//https://mropengate.blogspot.com/2017/12/dom-debounce-throttle.html
//https://jinlong.github.io/2016/04/24/Debouncing-and-Throttling-Explained-Through-Examples/

//https://ithelp.ithome.com.tw/articles/10205963?sc=iThelpR
function debouncd(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args); //不立即執行則是隔waitms後執行
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args); //立即執行後再隔20ms
    };
}

//https://www.freecodecamp.org/news/javascript-debounce-example/
function debounce2(func, timeout = 300) {
    let timer;

    // return (...args) => {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
    // };

    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(context, args);
        }, timeout);
    }

    // return function(){
    //     if (!timer) {
    //         func(); 
    //     }
    //     clearTimeout(timer);
    //     timer = setTimeout(function(){ 
    //         timer = undefined; 
    //     }, timeout);    
    // }
}


//https://juejin.cn/post/6844903760334946312#heading-6
function throttle(callback, wait = 300) {
    let timerId = null;

    // 是否是第一次执行
    let firstInvoke = true;

    function throttled() {
        let context = this;
        let args = arguments;

        // 如果是第一次触发，直接执行
        if (firstInvoke) {
            callback.apply(context, args);
            firstInvoke = false;
            return;
        }

        // 如果定时器已存在，直接返回。        
        if (timerId) {
            return;
        }

        timerId = setTimeout(function() {
            // 注意这里 将 clearTimeout 放到 内部来执行了
            clearTimeout(timerId);
            timerId = null;
            callback.apply(context, args);
        }, wait);
    }

    // 返回一个闭包
    return throttled;
}


function checkSlide1(e) {
    console.log('1')
        // console.log(e)
}

function checkSlide2(e) {
    console.log('2')
        // console.log(e)
}
document.addEventListener('scroll', throttle(checkSlide2));
document.addEventListener('scroll', checkSlide1);