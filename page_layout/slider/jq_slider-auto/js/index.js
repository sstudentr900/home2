function banner(){
    var $banner = $('#banner');
    if(!$banner){return;}
    var _banners=[
        '<img src="https://unsplash.it/400/300?image=1084" alt=""/>',
        '<img src="https://unsplash.it/400/300?image=1083" alt=""/>',
    ];
    var _i = 0;
    setTimeout(function () {
        //callback
        var _callee = arguments.callee;
        _i = ++_i%_banners.length;
        $banner.animate({
            opacity:0
        },500,function(){
            $banner.html(_banners[_i]);
            $banner.animate({
                opacity:1
            },800,function(){
                setTimeout(_callee,1000);
            })
        })
    })
}
banner();