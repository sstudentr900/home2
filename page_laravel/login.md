## 登入頁
```php
    public function login(Request $request)
    {
        $password = $request->password;
        $email = $request->email;
        $dbUser = Users::where('email', $email)->first();

        #判斷帳號是否存在
        if (!$dbUser) {
            return response()->json(['status' => false, 'error' => 'email or password false'], 400);
        }
        
        #判斷密碼是否正確、給亂數token        
        $dbPassword = $dbUser->password;
        if (password_verify($password, $dbPassword)) {
            #避免token重複
            do {
                $token = Str::random(15);
                $tokenCheck = Users::where('remember_token', $token)->first();
                if (isset($tokenCheck)) {
                    $sameToken = true;
                } else {
                    $sameToken = false;
                }
            } while ($sameToken);

            $dbUser->update(['remember_token' => $token]);
            return response()->json(['status' => true, 'login_data' => ['userToken' => $token]], 200);
        } else {
            return response()->json(['status' => false, 'error' => 'email or password false'], 400);
        }
    }
```

----
[登入api](https://ithelp.ithome.com.tw/articles/10249294)<br>




## 登入token驗證(middleware 驗證內容)
```php
    namespace App\Http\Middleware;
    use Closure;
    use App\Users;
    use Carbon\Carbon;
    class TokenMiddlewar
    {
        public function handle($request, Closure $next)
        {
            $token = $request->header('userToken');
            $userData = Users::where('remember_token', $token)->first();
            #將User資訊合併進去request，傳到後端
            $request->merge(['userData' => $userData]);
            if (isset($userData->remember_token)) {
                #判斷token是否過期
                //將userData中的更新時間加上1天當作token的時效(登入取得token時update_at會刷新)，若是取得token時間+一天已小於現在時間就回傳錯誤401。
                $tokenTime = $userData->updated_at->addDays(1);
                if ($tokenTime < Carbon::now()) {
                    return response()->json(['status' => false, 'error' => 'token out time'], 401);
                }
                return $next($request);
            } else {
                return response()->json(['status' => false, 'error' => 'token false'], 401);
            }
        }
    }
```

----
[laravel 登入token驗證](https://ithelp.ithome.com.tw/articles/10251252)<br>