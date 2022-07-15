# 路由(Route)

## 目前有哪些 route
```
    php artisan route:list
```

## URL 
```php
    //Blade
    <a href="{{ URL::asset('url')}}"></a>    //url

    //web
    Route::get('url', [controllerName::class,'functionName']);
```

## route 需要 name
```php
    //Blade
    {{ route('routeName',['id'=>$post->id]) }}    //url/idValue

    //web
    Route::get('url/{id}', [controllerName::class,'functionName'])->name('routeName');
```

## route未命名的值會變成?
```php
    //Blade
    {{route('routeName',['id'=>$post->id,'sex'=>'m'])}}    //url/idValue?sex=m


    //web
    Route::get('url/{id}', [controllerName::class,'functionName'])->name('routeName');
```


## 路由取值
檔案位置routes/web.php
```php
    //http://localhost/hello-world
    Route::any('/hello-world', function () {
        return '<h1>Hello, World</h1>';
    });


    //取得?後
    //http://localhost/hello?name=daniel
    Route::get('/hello', function (Request $request) {
        //Hello,daniel
        return '<h1>Hello,'.$request->query('name').'</h1>';
    });


    //1.取得post
    Route::post('/hello', function (Request $request) {
          $name = $request->input('name')
    });


    //2.取得post
    use Illuminate\Http\Request;  //接收資料
    Route::post('/hello', function () {
          $input = request()->all();
    });


    //取得/後
    //http://localhost/hello/daniel
    Route::get('/hello/{name}', function ($name) {
        //$name=daniel,
        //Hello,daniel
        return '<h1>Hello, '.$name.'</h1>';
    });


    //? 路徑的值是可選
    //http://localhost/hello/daniel or http://localhost/hello
    Route::get('/hello/{name?}', function ($name) {
        //Hello,daniel
        //Hello
        return '<h1>Hello, '.$name.'</h1>';
    });
```

## 路由分組與前綴
```php
    //1.
    Route::prefix('admin')->group(function () {
        Route::get('users', function () {
            // Matches The "/admin/users" URL
        });
    });
    //2.
    Route::group(['prefix'=>'admin'],function(){
        Route::get('users', function () {
            // Matches The "/admin/users" URL
        });
    });

```

## 正則匹配(where)
```php
     Route::get('/number/{number}', function ($number) {
        return $number;
    })->where(["number"=>'[0-9]+']);
```

## 重定向(redirect)
```php
    //1.
    Route::get('redirect', function() {
        //http://localhost/hello3
        return redirect()->route('hello3');
    });
    //2.
    Route::get('redirect', function() {
        //http://localhost/hello3
        return redirect('hello3');
    });
    //3.
    Route::redirect("redirect",'hello3');

```

## 重定向傳直(redirect)
```php
    //save session=>hello3/
    return redirect('hello3')->with('valueName', 'value'); //

    //傳到路由=>hello3/{valueName}
    return redirect()->route('hello3',['valueName'=>'value']);

    //傳到控制器
    return redirect()->action('App\Http\Controllers\HomeController@index', ['valueName'=>'value']);
```

## 傳直(view)
```php
    return view('URL', ["name" => 'value']);
```

## error 404(fallback)
```php
    //1.
    if(false){
        return redirect('/');
    }

    //2.
    if(false){
        abort(404);
    }
```

## 頁面(view) 
```php
    Route::get('/hello/{name}', function ($name) {
        return view("hello-name", [
            "name" => $name,
        ]);
    });
    //同上
    Route::view('/hello/{name}', 'hello-name', ["name"=>"World"]);
```

## 路由DELETE
```php
    //web
    Route::DELETE('url', [ControllerName::class,'functionName']);

    //blade 需有delete
    @method('delete')
```

## 取得路由
https://linuxhint.com/laravel-how-to-get-current-route-name/
```php
    explode("/",Request()->path())[0];
    //routerName/5=>routerName
```