## 引入套件
```php
    use Illuminate\Support\Facades\Log;
```

## 使用
level嚴重程度的級別,從低到高為:debug、info、notice、warning、error、critical、alert、emergency.
```php
    Log::info("Store New Blog Post: id = $post->id");
    //取得目前使用過的SQL語法
    Log::notice(print_r(DB::getQueryLog(), true));
```

## 錯誤訊息顯示
config/app.php設定檔的debug選項決定了是否向使用者顯示錯誤資訊
```php
    'debug' => (bool) env('APP_DEBUG', true)
```


## 設定Logging
config/logging.php
```php
    'default' => env('LOG_CHANNEL', 'stack'),
    //stack 都寫在同一個檔案中
    //daily 每天不同的Log檔案

    'daily' => [
        'driver' => 'daily',
        'path' => storage_path('logs/laravel.log'),//存的位置
        'level' => 'debug', //記錄大於或等於指定嚴重級別的所有級別的錯誤
        'days' => 14, //預設保留14天份的日誌檔
    ],
```

## log位置
storage/logs/laravel.log 
![Imgur](https://i.imgur.com/bXfnpQD.png)<br>
![Imgur](https://i.imgur.com/xEJwA5a.png)




----
[紀錄檔](https://ithelp.ithome.com.tw/articles/10227332)<br>
[Laravel記錄Log](https://dotblogs.com.tw/SmallFish/2020/10/09/074012)<br>
[Laravel記錄Log](https://ithelp.ithome.com.tw/articles/10253415)<br>