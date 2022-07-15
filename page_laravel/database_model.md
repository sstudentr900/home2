## 每個model對應一個table


## 新增model(make:model)
所在位置 App/fileName.php
```php
    php artisan make:model fileName
```

同時增加 migration (--migration or -m )
```php
    php artisan make:model fileName -m
```


## mode檔
```php
    <?php

    namespace App\Module;
    //ORM檔案必須繼承
    use Illuminate\Database\Eloquent\Model;

    class data_name extends Model
    {
        //資料表名稱
        protected $table = "data_name";
        //主鍵名稱
        protected $promaryKey = 'id';
        //可變動欄位
        protected $fillable = [
            'name',
            'account',
        ]
        //隱藏參數,例如讀取使用者資料時，不會顯示"密碼"這個欄位
        protected $hidden = [
            'password', 'remember_token',
        ];
    }
```


## 測試model
跳出 ctrl+c 或輸入Exit
```php
    php artisan tinker
```

## 測試model錯誤 PHP Parse error: Syntax error, unexpected ':' on line 1
https://sleettech.com/php-error-class-not-found-in-psy-shell-code-on-line-1/
```php
    composer dump-autoload
```







----
[建立Model](https://ithelp.ithome.com.tw/articles/10225876)<br>