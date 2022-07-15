



## 新增controller
```php
    php artisan make:controller SignupController 
```

## SignupController.php
app/Http/Controllers/SignupController.php
```php
    <?php
    namespace App\Http\Controllers;
    use Illuminate\Http\Request;
    //需引入Validator
    use Validator;

    class SignupController extends Controller
    {
        //1.
        // public function signup()
        // {
        //     //接收輸入資料
        //     $input = request()->all();
        //     //驗證規則
        //     $rules = [
        //         //帳號(E-mail)
        //         'account' => [
        //             'required',
        //             'max:50',
        //             'email',
        //         ],
        //         //密碼
        //         'password' => [
        //             'required',
        //             'min:5',
        //         ],
        //         //密碼驗證
        //         'password_confirm' => [
        //             'required',
        //             'same:password',
        //             'min:5'
        //         ],
        //     ];

        //     //驗證資料
        //     $validator = Validator::make($input, $rules);

        //     if($validator->fails())
        //     {
        //         //資料驗證錯誤
        //         //withInput 顯示輸入的值
        //         return redirect('signup')->withErrors($validator)->withInput();
        //     }
        //     exit;
        // }


        //2.自動重定向
        // public function signup(Request $request)
        // {
        //     Validator::make($request->all(), [
        //         'account' => 'required|max:50|email',
        //         'password' => 'required|min:5',
        //         'password_confirm' => 'required|same:password|min:5',
        //     ])->validate();
        //     exit;
        // }


        //3.等同上面
        public function signup(Request $request)
        {
            $validate = $request->validate([
                'account' => 'required|max:50|email',
                'password' => 'required|min:5',
                'password_confirm' => 'required|same:password|min:5',
            ]);
            exit;
        }
    }
```

## route
routes/web.php
```php
    use App\Http\Controllers\SignupController;
    Route::view('signup', 'signup');
    Route::post('signup', [SignupController::class,'signup']);
``` 


## view
resources/views/signup.blade.php
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form id="form1" method="post" action="">
        <!-- 自動產生 csrf_token 隱藏欄位-->
        {!! csrf_field() !!}
        <div class="login_form">
            <div class="login_title">註冊</div>
            <div class="login_label">帳號(必須為E-mail)</div>
            <div class="login_textbox">
                <input name="account" class="@error('account') is-invalid @enderror" type="text" placeholder="請輸入帳號" value="{{ old('account') }}"/>
                @error('account')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="login_label">密碼</div>
            <div class="login_textbox">
                <input name="password" class="@error('password') is-invalid @enderror" type="password" placeholder="請輸入密碼" value="{{ old('password') }}"/>
                @error('password')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="login_label">密碼確認</div>
            <div class="login_textbox">
                <input name="password_confirm" class="@error('password_confirm') is-invalid @enderror" type="password" placeholder="請確認密碼" value="{{ old('password_confirm') }}"/>
                @error('password_confirm')
                    <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="login_error">
                <!-- 錯誤訊息模板元件 -->
                @include('layout.ValidatorError')
            </div>
            <div class="btn_group">
                <button type="submit" class="btn btn-primary btn_login">註冊</button>
            </div>
        </div>
        </form>
    </body>
    </html>
```


## 錯誤訊息模板元件
resources/views/layout/ValidatorError.blade.php
```
    @if($errors AND count($errors))
        <ul style='color:red;'>
            @foreach($errors->all() as $err)
                <li> {{ $err }} </li>
            @endforeach
        </ul>
    @endif

```


----
[資料驗證與錯誤訊息](https://dotblogs.com.tw/SmallFish/2020/10/04/080756)<br>
[官網](https://laravel.com/docs/8.x/validation#named-error-bags)<br>