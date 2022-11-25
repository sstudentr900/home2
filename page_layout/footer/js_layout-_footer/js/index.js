function btntop(){
    var timer;
    var istop = true;
    window.onscroll = function(){
        if(!istop){
            clearInterval(timer);
        }
        istop = false;
    }
    timer = setInterval(function(){
        var ostop = document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(-ostop/6);
        document.documentElement.scrollTop = document.body.scrollTop = ostop+ispeed;
        istop = true;
        //console.log(ostop-ispeed);
        //console.log(document.documentElement.scrollTop);
        if(ostop == 0){
            clearInterval(timer);
        }
    },30);
}