# 清除緩存




## 清除config緩存
```
    php artisan config:cache
    php artisan config:clear
    php artisan optimize:clear //清除所有的緩存
```
[](https://stackoverflow.com/questions/41521837/laravel-5-3-clear-config-cache-in-shared-hosting)


## 清除 env 文件的緩存並重新加載它
```
    php artisan view:clear
```

## 修改.env後必須重開
```
    php artisan serve
```


https://stackoverflow.com/questions/32423034/reloading-env-variables-without-restarting-server-laravel-5-shared-hosting



# error

## Q:laravel框架中提示错误：file_put_contents(/): failed to open stream: Permission denied
A: 清除config緩存=>php artisan optimize:clear

