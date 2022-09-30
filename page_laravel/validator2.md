
# 表單驗證

## route
routes/web.php
```php
    use Illuminate\Http\Request;
    use Illuminate\Validation\Validator;
    Route::view('home', 'home');
    Route::post('home', function(Request $request){
        $validate = $request->validate([
            'text' => 'required|max:5',
        ]);
        echo "ok";
    })->name('checkfrom');
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
        <h1>home</h1>
        <form action="{{route('checkfrom')}}" method="post" enctype="multipart/form-data">
            @csrf
            <input name="text" type="text" value="{{ old('text') }}"/>
            @error('text')
              <div class="alert alert-danger">{{ $message }}</div>
            @enderror
            <br>
            <br>
            <input name="" type="submit" value="送出"/>
        </form>
    </body>
    </html>
```
