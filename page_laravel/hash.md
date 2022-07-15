## Hash 引用
```php
    use Hash;
    //or
    use Illuminate\Support\Facades\Hash;
```

## Hash 加密
```php
    Hash::make($input['password']);
    hash_hmac('ripemd160', 'The quick brown fox jumped over the lazy dog.', 'secret');
```


## Hash 解密
```php
    Hash::check($input['password'], $User->password)
```




## hash_hma 加密
```php
    hash_hmac($customStr1, $password, $customStr1);
```

## hash_hma 解密
```php
    if (hash_equals($hashed_expected, $hashed_value)) {
        echo "hashes match!";
    }
```