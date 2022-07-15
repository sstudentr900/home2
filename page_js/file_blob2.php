<?php
    //https://my.oschina.net/sallency/blog/3014652
    //https://www.cnblogs.com/52fhy/p/5213483.html
    // 圖片返回二进制流数据
    // header( "Content-type: image/jpeg");
    $file_path = __DIR__ . '\img\slide01.jpg';
    // 取得圖片大小
    $file_size = filesize($file_path);
    // 取得二進制
    $oct_data = fread(fopen($file_path, "r"), $file_size);
    // print_r($oct_data);
    echo $oct_data;
?>