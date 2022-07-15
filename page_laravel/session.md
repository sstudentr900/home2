## Session的設定
所有session的設定都放在config/session.php這個設定檔案內,
```php
    'driver' => env('SESSION_DRIVER', 'file'),
```

## 登入的判斷
```php
    if(session()->has('user_id'))
```

## 登入記錄
```php
    session()->put('user_id', $User->id);
```

## 取的ID
```php
    session()->get('user_id')
```

## 登出的動作
```php
    //清除Session
    session()->forget('user_id');
```