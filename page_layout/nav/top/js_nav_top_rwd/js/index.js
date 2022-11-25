function navshow(){
    var navul = document.getElementById('navul');
    if(!navul) return;
    if(navul.offsetHeight){
        navul.className='list-inline';
    }else{
        navul.className='list-inline active';
    }
}