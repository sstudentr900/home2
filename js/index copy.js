function creatFooterHtml(className){
    let obj = document.querySelector(className);
    let index_footers= document.querySelectorAll('.index_footer');
    if(index_footers.length){
        index_footers.forEach(el=>{
            console.log(el)
            el.remove();
        })
    }
    let html =`
    <div class="index_footer">
        <div class="text">
            <a data-page="program">程式作品</a>．<a href="https://www.flickr.com/photos/116599343@N04/sets">設計作品</a>．<a data-page="study">學習文章</a>．<a data-page="about">個人資料</a>
        </div>
        <div class="text">
            © 2022 Shelter Rain
        </div>
    </div>`;
    obj.insertAdjacentHTML('beforeend', html);
}
function styleToggle(){
    let body = document.querySelector('body')
    if(!localStorage.getItem('style')){
        body.classList.add('dark')
        localStorage.setItem('style','dark')
    }else if(localStorage.getItem('style')=='white'){
        body.classList.remove('dark')
    }else if(localStorage.getItem('style')=='dark'){
        body.classList.add('dark')
    }
    let darkButton = document.querySelector('.index_top [data-dark]');
    darkButton.addEventListener('click',function(){
        if(body.classList.contains('dark')){
            body.classList.remove('dark')
            localStorage.setItem('style','white')
        }else{
            body.classList.add('dark')
            localStorage.setItem('style','dark')
        }
    })
}
function linkClickActive(obj,url){
    return new Promise((resolve,reject)=>{
        let links = document.querySelectorAll(obj);
        links.forEach((el)=>{
            el.classList.remove('active')
        })
        links.forEach((el)=>{
            let page = el.getAttribute('href')
            if(url==page){
                el.classList.add('active')
                resolve(el)
            }
        })
    })
}
function getPageHtml(nowPage,obj){
    return new Promise((resolve,reject)=>{
        fetch(nowPage+'.html').then(response => {
            return response.text()
        }).then(function(html) {
            // let main = document.querySelector(obj);
            // main.innerHTML='';
            // main.insertAdjacentHTML('afterbegin', html);
            resolve(html)
        });
    })
}
function creatMainHtml(url,obj){
    return fetch(url+'.html').then(response => {
        if(response.ok) return response.text();
        else location='?page=program'
    }).then(function(html) {
        let main = document.querySelector(obj);
        main.innerHTML='';
        main.insertAdjacentHTML('afterbegin', html);
    })
}
function pageStudyFn(search,params){
    let obj = '.page_study .main';
    let url = '';
    let class1 = params.get('class1');
    let class2 = params.get('class2');
    let class3 = params.get('class3');
    // let class4 = params.get('class4');
    // console.log(class1,class2,class3,class4)
    if(class1&&class2&&!class3){
        url = class1+'/'+class2;
    }
    if(class1&&class2&&class3){
        url = class1+'/'+class2+'/'+class3;
    }
    // console.log(url)
    if(url){
        creatMainHtml(url,obj).then(()=>{
            creatFooterHtml('.page_study .content')//
            Prism.highlightAll();//ajax後執行Prism
        })
    }
    //left nav open
    linkClickActive('.page_study a',search).then((el)=>{
        el.closest('details').open=true;
        if(class3){
            el.closest('details').parentElement.parentElement.parentElement.open=true;
            // el.parentElement.nodeName;//Li
        }
    })
}
//1.
// window.onload=function(){
//     let search = window.location.search;
//     let params = new URLSearchParams(search);
//     let page = params.get('page');
//     creatMainHtml(page,'.index_main').then(()=>{
//         linkClickActive('.index_top .nav a',search.split('&')[0]).then(styleToggle());
//         if(page!='study')creatFooterHtml('body');
//         // study
//         if(page=='study')pageStudyFn(search,params)
//     });
// }
//2.
// window.onload=function(){
//     let search = window.location.search;
//     let params = new URLSearchParams(search);
//     let page = params.get('page');
//     // styleToggle() //top linkClickActive
//     creatMainHtml(page,'.index_main').then(()=>{
//         linkClickActive('.index_top .nav a',search.split('&')[0]);
//         if(page!='study')creatFooterHtml('body');
//         // study
//         if(page=='study')pageStudyFn(search,params)
//     });
// }

function pageStudyFn2(){
    let links = document.querySelectorAll('.page_study .nav a');
    links.forEach((el)=>{
        let dataUrl = el.getAttribute('data-url');
        if(dataUrl==window.location.search){
            el.classList.add('active')
        }
        el.addEventListener('click',function(){
            links.forEach((el)=>{
                el.classList.remove('active');
            })
            el.classList.add('active')
            history.pushState('', '' ,dataUrl)
            let search = window.location.search;
            let params = new URLSearchParams(search);
            let class1 = params.get('class1');
            let class2 = params.get('class2');
            let class3 = params.get('class3');
            let url = '';
            if(class1&&class2&&!class3){
                url = class1+'/'+class2;
            }
            if(class1&&class2&&class3){
                url = class1+'/'+class2+'/'+class3;
            }
            creatMainHtml2(url,'.page_study .main').then(()=>{
                Prism.highlightAll();//ajax後執行Prism
            })
        })
    })
}
function linkClickActive2(obj,page){
    return new Promise((resolve,reject)=>{
        let links = document.querySelectorAll(obj);
        links.forEach((el)=>{
            console.log(el)
            let dataUrl = el.getAttribute('data-url');
            if(!dataUrl)return;
            let url = dataUrl.split('=')[1]
            // let search = window.location.search;
            // let params = new URLSearchParams(search);
            // let page = params.get('page');
            console.log(dataUrl,page,dataUrl==page)
            if(url==page){
                el.classList.add('active')
            }
            el.addEventListener('click',function(){
                links.forEach((el)=>{
                    el.classList.remove('active');
                })
                el.classList.add('active')
                history.pushState('', '' ,dataUrl)
                let page = dataUrl.split('=')[1]
                creatMainHtml2(page,'.index_main').then(()=>{
                    if(page=='study')pageStudyFn2()
                })
                // resolve(el)
                // console.log(url,page,url==page)
                // if(url==page){
                //     el.classList.add('active')
                //     resolve(el)
                // }
            })
        })
    })
}
function creatMainHtml2(url,obj){
    //about
    //page_js/XXX
    return fetch(url+'.html').then(response => {
        if(response.ok) return response.text();
    }).then(function(html) {
        let main = document.querySelector(obj);
        main.innerHTML='';
        main.insertAdjacentHTML('afterbegin', html);
    })
}
let search = window.location.search;
let params = new URLSearchParams(search);
let page = params.get('page');
if(!page){
    page = 'program';
    history.pushState('', '' ,'?page=program');
}
styleToggle()//top linkClickActive
creatMainHtml2(page,'.index_main')
linkClickActive2('.index_top .nav a',page)