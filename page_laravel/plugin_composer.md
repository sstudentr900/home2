

## composer安裝
```php
    composer require 套件提供者／套件名稱
    composer require 套件提供者／套件名稱:版本號
    composer require 套件提供者／套件名稱=版本號
```

---
[使用 Composer 管理 PHP 套件](http://blog.tonycube.com/2016/12/composer-php.html)<br>
[Composer 依頼管理工具介紹](https://xnote.dev/composer-introduction.html)<br>
[composer常用的一些命令\引數\說明](https://www.itread01.com/content/1541573353.html)<br>


## composer.json文件
安装完Composer后，创建一个composer.json文件。假设我们项目需要用到monolog/monolog这个日志库，那么我们可以这样配置composer.json文件：
```php
    {
        "require": {
            "monolog/monolog": "1.0.*"
        }
    }
```
配置好require后就可以安装依赖了，只需要运行以下的命令：
```php
   composer install
```


## 更新 composer
```php
    //自動升級到最新
    composer self-update 
    
    //如果要返回更新前的版本，可以
    composer self-update --rollback
    
    //刪除舊有的版本，讓目前版本的 Composer 在更新之後是唯一可用備份。
    composer self-update --clean-backups
```

## require命令
Composer会先找到合适的版本，然后更新composer.json文件，在require那添加monolog/monolog包的相关信息，再把相关的依赖下载下来进行安装，最后更新composer.lock文件并生成php的自动加载文件。
```php
    composer require monolog/monolog
```

## show命令
使用show命令可以列出项目目前所安装的包的信息
```php
    # 列出所有已经安装的包
    composer show

    # 可以通过通配符进行筛选
    composer show monolog/*

    # 显示具体某个包的信息
    composer show monolog/monolog
```

## update命令
通过update命令，可以更新项目里所有的包，或者指定的某些包。
```php
    # 更新所有依赖
    composer update

    # 更新指定的包
    composer update monolog/monolog

    # 更新指定的多个包
    composer update monolog/monolog symfony/dependency-injection

    # 还可以通过通配符匹配包
    composer update monolog/monolog symfony/*
```

## 版本约束
```php
    //require命令
    composer require monolog/monolog:1.19
    # 或者
    composer require monolog/monolog=1.19
    # 或者
    composer require monolog/monolog 1.19


    //composer.json
    {
        "require": {
            "monolog/monolog": "1.19"
        }
    }
```

## 版本约束(范围)
不指定版本号（使用 * 号）
* 一般不建议使用
* "overtrue/wechat": "*"

使用比较操作符你可以指定包的范围：>，>=，<，<=，!=
* >=1.0
* >=1.0 <2.0 
* >=1.0 <1.1 || >=1.2

波浪号~
* ~1.2相当于>=1.2 <2.0.0
* ~1会被当作~1.0对待，只能增加小版本，不能增加主版本

折音号^
* ^1.2.3相当于>=1.2.3 <2.0.0
* ^0.3会被当作>=0.3.0 <0.4.0

---
[php – composer 過舊的警告升級](http://jsnwork.kiiuo.com/archives/2402/php-composer/)<br>
[Composer进阶使用 —— 常用命令和版本约束](https://segmentfault.com/a/1190000005898222)<br>
[Composer快速入门](https://segmentfault.com/a/1190000005624202?utm_source=sf-similar-article)<br>

## error
A.The openssl extension is required for SSL/TLS protection...
B.

---
[php – composer 過舊的警告升級](https://blog.csdn.net/Luke__/article/details/79509977)<br>


