## middleware(中介層) 
這功能非常適合做一些登入驗證，或是log之類的工作


## 新增middleware
```php
    php artisan make:middleware fileName
```

## 自訂登入的判斷
app/Http/Middleware/BaAdminMiddleware.php
```php
    namespace App\Http\Middleware;
    use Closure;
    class BaAdminMiddleware
    {
        public function handle($request, Closure $next)
        {
            //預設不允許存取
            $is_allow = false;

            //取得會員編號
            $user_id = session()->get('user_id');
            
            if(!is_null($user_id))
            {
                //已登入，允許存取
                $is_allow = true;
            }

            if(!$is_allow)
            {
                //若不允許存取，重新導向至首頁
                return redirect()->to('/');
            }

            return $next($request);
        }
    }

```

## 註冊middleware
app/Http/Middleware/kernel.php 
```php
    namespace App\Http;
    use Illuminate\Foundation\Http\Kernel as HttpKernel;
    class Kernel extends HttpKernel
    {
        //應用程式共用中介層
        //所有的請求都會經過這些中介層的處理.
        protected $middleware = [
            //省略
        ];

  
        //路由中介層群組
        //所有的Web路由請求都會經過web的中介層群組處理,
        //所有的API路由請求都會經過api的中介層群組處理.
        protected $middlewareGroups = [
            //省略
        ];


        //應用程式中介層
        //分別指定不同的名稱給中介層類別
        protected $routeMiddleware = [
            'auth.admin' => \App\Http\Middleware\BaAdminMiddleware::class,
        ];
    }
```

routes/web.php 加入中間層做登入判斷
```php
    Route::group(['middleware'=>['auth.admin']], function(){
        //後台管員
        Route::get('url', [Controller::class,'funcitonName']);
    })

    //單個
    Route::middleware('tokenAuth')->get('user/{email}', 'api\UserController@show');
```    


----
[建立中介層](https://www.dotblogs.com.tw/SmallFish/2021/04/22/065459)<br>