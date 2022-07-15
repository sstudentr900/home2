# 認識Laravel-Mix

## JavaScript 和 CSS 編譯設定
webpack.mix.js 文件中可以看到以下設定<br>
js('JS檔案位置', '存在公用位置')<br>
styles(['CSS檔案位置且合併'], '存在公用位置')
```
    mix.js('resources/js/fnapp.js', 'public/js')
        .js('resources/js/baapp.js', 'public/js')
        .styles([
            'resources/css/default.css',
            'resources/css/fndefault.css',
        ],'public/css/fnapp.css')
        .styles([
            'resources/css/default.css',
            'resources/css/badefault.css',
        ],'public/css/baapp.css');
```

## JavaScript 和 CSS 輸出
dev 用在開發環境<br>
production 輸出的代碼會被壓縮 
```php
    $ npm run dev
    // 或者
    $ npm run production
```

----
[認識Laravel-Mix](https://dotblogs.com.tw/SmallFish/2020/09/23/074631)<br>
[處理Laravel-Mix的錯誤](https://dotblogs.com.tw/SmallFish/2020/09/30/073103)<br><br><br>


## browser-sync 自動更新瀏覽器

1.在根目錄找到 webpack.mix.js 檔案
```php
    mix.browserSync({
        proxy: 'localhost:8000',
        //open: false, // 當執行時是否要開啟瀏覽器
    });
```
![Imgur](https://imgur.com/t0Fu64b.png)

2.開cmder跑serve
```php
    php artisan serve
```
![Imgur](https://imgur.com/RD9Zp41.png)

3.在開cmder跑watch
```npm
    npm run watch
```

4.npm錯誤
```npm
    npm install
```

----
[browser-sync 自動更新瀏覽器](https://ithelp.ithome.com.tw/articles/10206875)<br>




