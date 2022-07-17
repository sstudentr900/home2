function getSearch(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let page = params.get('page');
    let pageUrl = search.split('&')[0];
    let class1 = params.get('class1');
    let class2 = params.get('class2');
    let class3 = params.get('class3');
    if(!page){
        page = 'program';
        history.pushState('', '' ,'?page=program');
    }
    return{
        class3:class3,
        class2:class2,
        class1:class1,
        pageUrl:pageUrl,
        search:search,
        page:page
    }
}
function creatFooterHtml(className){
    let obj = document.querySelector(className);
    let index_footers= document.querySelectorAll('.index_footer');
    if(index_footers.length){
        index_footers.forEach(el=>{
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
function creatMainHtml(url,obj){
    //about
    //page_js/XXX
    return fetch(url+'.html').then(response => {
        if(response.ok) return response.text();
    }).then(function(oldText) {
        let text = oldText;
        // console.log(text.includes('<body id="program">'))
        if(text.includes('<body id="program">')){
            text = oldText.split('<body id="program">')[1].split("</body>")[0];
        }
        let main = document.querySelector(obj);
        main.innerHTML='';
        main.insertAdjacentHTML('afterbegin', text);
    })
}
function pageStudyMain(){
    let class1 = getSearch().class1
    let class2 = getSearch().class2
    let class3 = getSearch().class3
    let url = 'page_js/xml_fetch';
    if(class1&&class2&&!class3){
        url = class1+'/'+class2;
    }
    if(class1&&class2&&class3){
        url = class1+'/'+class2+'/'+class3;
    }
    if(url){
        creatMainHtml(url,'.page_study .main').then(()=>{
            Prism.highlightAll();//ajax後執行Prism
            creatFooterHtml('.page_study .main')
        })
    }
}
function pageStudyLeftNav(obj){
    let pageUrl = getSearch().search
    let linkUrl = obj.getAttribute('data-url');
    if(linkUrl==pageUrl){
        obj.classList.add('active')
        //class1 open
        obj.closest('details').open=true;
        //class2 open
        let class3 = getSearch().class3
        if(class3){
            obj.closest('details').parentElement.parentElement.parentElement.open=true;
            // el.parentElement.nodeName;//Li
        }
    }
}
function pageMain(){
    let url = getSearch().page
    creatMainHtml(url,'.index_main').then(()=>{
        if(url!='study')creatFooterHtml('.index_main')
        if(url=='study')pageNav('.page_study .nav a',pageStudyLeftNav,pageStudyMain)
    })
} 
function pageTopNav(obj){
    let pageUrl = getSearch().pageUrl;
    let linkUrl = obj.getAttribute('data-url').split('&')[0];
    // console.log(pageUrl,linkUrl)
    if(linkUrl==pageUrl){
        obj.classList.add('active')
    }

}
function pageNav(obj,navActiveFn,mainFn,ifClick=true){
    let links = document.querySelectorAll(obj);

    //navActiveFn
    links.forEach((el)=>{
        el.classList.remove('active'); 
        navActiveFn(el)
    })


    //mainHtml f5 
    mainFn()


    //nav click
    if(ifClick){
        links.forEach((el)=>{
            el.addEventListener('click',function(){
                //history
                let linkUrl = this.getAttribute('data-url');
                history.pushState('', '' ,linkUrl)

                //nav active
                links.forEach((el)=>{
                    el.classList.remove('active');
                })
                this.classList.add('active')

                //chageHtml
                mainFn()
            })
        })
    }
}
function styleToggle(){
    //style
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


    //top nav
    pageNav('.index_top [data-url]',pageTopNav,pageMain)
    
    //上下頁
    window.onpopstate = function(event) {
        // console.log('onpopstate',document.location,event);
        pageNav('.index_top [data-url]',pageTopNav,pageMain,false)
    };
}
// window.onload=function(){
    styleToggle()
// }
