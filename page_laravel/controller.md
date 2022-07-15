## 新增controller
app/Http/Controllers/Blog/PostController 檔案位置
```php
    php artisan make:controller Blog/PostController
```

--resource 這個參數表示他會在內容中幫你生成restful api
```php
    php artisan make:controller Blog/PostController --resource
```

--api 這個參數表示他會在內容中幫你生成restful api
```php
    php artisan make:controller Blog/PostController --api
```


## namespace
需填上檔案位置 namespace App\Http\Controllers\Blog
```php
    <?php

    namespace App\Http\Controllers\Blog;

    use Illuminate\Http\Request;
    use App\Http\Controllers\Controller;

    class ExamplePostController extends Controller
    {
        //
    }
```




----
[控制器(Controller)](https://ithelp.ithome.com.tw/articles/10223508)<br>