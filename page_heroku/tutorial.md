## 1.確認一下 git 跟 heroku 都有順利安裝
```
git --version
heroku -v
```

## 2.建立資料夾 mkdir
```
mkdir fileName
cd fileName
```

## 3.安裝PHP
須注意編碼要`UTF-8`
```
//composer.json 
{
    "require": {
        "php": "^7|^8"
    }
}
安装依赖运行以下的命令：
```php
   composer install
```


## 4.忽略檔案.gitignore
須注意編碼要`UTF-8`
```
echo "vendor/" >　.gitignore
```

移除提交的資料
```
git rm -rf --cached .
```



## 5.Procfile 檔案是用來定義檔案從web底下開啟
須注意編碼要`UTF-8`
```
//本地index.php
echo "web: vendor/bin/heroku-php-apache2" > Procfile

//laravel
echo web: vendor/bin/heroku-php-apache2 public/ > Procfile
```


## 6.git
```
git init
git add .;git commit -m "init";
```

## 7.heroku 登入
```
heroku login
```

## 7.新增heroku
```
    //自動命名
    heroku create

    //自訂名稱
    heroku create yourAppName

    //自訂名稱
    heroku apps:create yourAppName

    //修改專案名稱
    heroku apps:rename --app [old-name] [new-name]
```

## 8.遠端與本地連結
添加远程版本库
```
    heroku git:remote -a [your app name]
```

显示所有远程仓库
```
    git remote -v
```

显示某个远程仓库的信息
```
    git remote show
```

删除和修改
```
    git remote rm name  # 删除远程仓库
    git remote rename old_name new_name  # 修改仓库名
```


## 8.git push
```
git push heroku (main查看分支)
```

查看分支 
```
    git show-ref
```
refs/heads/master => 推送到 master
refs/heads/main => 推送到 main

強制push
```
    //參數 -f 等同於 --force，表示強制的意思
    git push heroku main --force
```

## 9.open
```
heroku open
```

log(查看日誌)
```
heroku logs --tail
```

---
[教學](https://www.heroku.com/php)<br>


## 10.新增mysql
自己增加
![Imgur](https://i.imgur.com/VvCtPfx.jpg)

使用指令增加
```
    heroku addons:create cleardb:ignite
```


## 使用指令取得帳密
```
    heroku config
```

## 帳密位置
```
    CLEARDB_DATABASE_URL => mysql://[username]:[password]@[host]/[database name]?reconnect=true
    CLEARDB_DATABASE_URL: mysql://be6c96a165xxx0:c504fxxx@us-cdbr-iron-east-05.cleardb.net/heroku_e8d000339887xxx?reconnect=true
    // username: be6c96a16xxxd
    // password: c504fxxx
    // host: us-cdbr-iron-east-05.cleardb.net
    // database: heroku_e8d000339887xxx
```

## 匯入資料
db 的內容導出成 .sql 檔
![Imgur](https://imgur.com/qv74Rfr.jpg)
開啟資料庫管理工具(圖中使用 HeidiSQL )連進 ClearDB
![Imgur](https://imgur.com/by7eQCp.jpg)
點檔案－執行 SQL 檔案 
![Imgur](https://imgur.com/u9v5clg.jpg)
資料沒出來請重新開啟HeidiSQL
![Imgur](https://imgur.com/4qkEFBm.jpg)
<!-- 點擊 heroku app 右上方的 Open app 就會開啟應用
![Imgur](https://imgur.com/2qiX8mD.jpg) -->

---
[mysql教學](https://medium.com/@jedy05097952/node-js-mysql-%E9%83%A8%E7%BD%B2-heroku-f07a2d75e72f)<br>
[mysql教學](https://namepluto.com/%E5%8D%81%E5%88%86%E9%90%98%E5%B0%87-node-js-mysql-%E8%B3%87%E6%96%99%E5%BA%AB%E4%BD%88%E7%BD%B2%E5%88%B0-heroku-%E7%9A%84%E4%BF%9D%E5%A7%86%E7%B4%9A%E5%9C%96%E6%96%87%E6%95%99%E5%AD%B8/)<br>

---

## 錯誤

## PHP Parse error:  syntax error, unexpected token "::"
class FN=>class CustomFn

## Q:error: failed to push some refs 
A:遠端與本地要連結
```
    heroku git:remote -a [your app name]
```
A:php版本過舊
```
//composer.json 
{
    "require": {
        "php": "^7|^8"
    }
}
```
A:須注意編碼要`UTF-8`

## Q:access denied for user 'username'...
A: 檢查帳密可能錯誤<br>
[access denied](https://stackoverflow.com/questions/31154124/sqlstatehy000-1045-access-denied-for-user-usernamelocalhost-using-cakep)<br>



## Q:A post-autoload-dump script terminated with an errornated with an error..
A: 可能是 PHP 版本問題要7.3以上<br>
[](https://noauto-nolife.com/post/laravel-heroku-deploy-php-version-error/)
[](https://www.sejuku.net/plus/question/detail/18197)


---

## 在heroku建立laravel專案
1.指令
```php
    //LaravelBlog 檔案名稱
    //create-project 創建專案
    //--prefer-dist 當有可用的包時，從 dist 安裝。
    composer create-project --prefer-dist laravel/laravel LaravelBlog
```

2.heroku config set
```
    //heroku->settings->config Vars
    DB_HOST=us-cdbr-east-06.cleardb.net
    DB_DATABASE=heroku_d723d36659c064c
    DB_USERNAME=b35ccc613998de
    DB_PASSWORD=da2805b8
```
---
[heroku config](https://just1and0.medium.com/how-to-setup-database-on-heroku-for-your-laravel-application-6a903c2c75c7)<br>
[heroku config:set](https://dev.to/okmarq/deploying-a-laravel-application-to-heroku-with-a-mysql-database-1gi3)<br>
