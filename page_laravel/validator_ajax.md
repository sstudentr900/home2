
# 表單驗證

## route
routes/web.php
```php
    use Illuminate\Http\Request;
    use Illuminate\Validation\Validator;
    Route::view('home', 'home');
    Route::post('home', function(){
        $validate = $request->validate([
            'text' => 'required|max:5',
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->All(); //顯示全部錯誤
            return response()->json(['status' => false, 'error' => $error], 400);
        }
    })->name('checkfrom');
``` 
