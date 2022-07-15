
## 資料庫連線設定
config/database.php<br>
```php
    return [
        //設定mysql
        'default' => env('DB_CONNECTION', 'mysql'),

        'connections' => [

            'mysql' => [
                'driver' => 'mysql',
                'url' => env('DATABASE_URL'),
                'host' => env('DB_HOST', '127.0.0.1'),
                'port' => env('DB_PORT', '3306'),
                'database' => env('DB_DATABASE', 'forge'),
                'username' => env('DB_USERNAME', 'forge'),
                'password' => env('DB_PASSWORD', ''),
                'unix_socket' => env('DB_SOCKET', ''),
                'charset' => 'utf8mb4',
                'collation' => 'utf8mb4_unicode_ci',
                'prefix' => '',
                'prefix_indexes' => true,
                'strict' => true,
                'engine' => null,
                'options' => extension_loaded('pdo_mysql') ? array_filter([
                    PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
                ]) : [],
            ],
        ],
    ];
```
.env<br>
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE= databaseName
DB_USERNAME=root
DB_PASSWORD=
```
在phpMyadmin 設定databaseName


## 新增資料表(make:migration)
* 檔案位置 database/migration
* fileName  => 自訂檔案名稱
* --create  => 創建資料庫
* tableName => 創建資料庫名稱為mind
```php
    php artisan make:migration fileName --create=tableName
```

同時增加model,migration (--migration or -m )
```php
    php artisan make:model fileName -m
```

## 自動幫你將table建立好了
```php
    php artisan migrate
```

## 狀態
```php
    php artisan migrate：status
```

## 單獨migrate一個檔案
```php
    php artisan migrate --path={檔案路徑}
```

## 回上一步
```php
    php artisan migrate:rollback
```

## 執行全部down
```php
    php artisan migrate:reset
```

## reset + migrate
```php
    php artisan migrate:refresh
```

## 刪除所有資料表
```php
    php artisan migrate:fresh
```


## 創立資料表
```php
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    class CreateBlogPostTable extends Migration
    {
        public function up()
        {
            Schema::create('blog_post', function (Blueprint $table) {
                $table->charset = 'utf8mb4';
                $table->collation = 'utf8mb4_general_ci';
                $table->increments('id');                            //int(10) 主鍵
                $table->integer('user_id');                          //int(10)
                $table->id();                                        //bigint(20) 主鍵 
                $table->bigIncrements('id');                         //bigint(20) 主鍵
                $table->unsignedBigInteger('user_id');               //bigint(20) //unsigned 既為非負數，用此類型可以增加資料長度!
                $table->string('name', 50)->nullable();              //nullable->  允許為空值 ,string->varchar
                $table->string('account', 50)->unique();             //unique->  不可重複的索引
                $table->integer('type')->default(0);                 //default-> 預設值是0
                $table->string("title")->comment('標題');            //comment->  sql 標題 
                $table->enum('release', ['y', 'n'])->default('y');   //enum-> 選擇
                $table->mediumText('tinymce');                       //mediumText-> ??
                $table->char('remember_token', 100);                 //char-> ??
                $table->timestamps();                                //創建及修改日期
            });
        }

        public function down()
        {
            Schema::dropIfExists('blog_post');
        }
    }
``` 


## 清空資料表
```php
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    Schema::table('users', function (Blueprint $table) {
        $table->string('email')->nullable();
    });
``` 

## 改變資料表
```php
    <?php

    use Illuminate\Support\Facades\Schema;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Database\Migrations\Migration;

    Schema::table('users', function (Blueprint $table) {
        $table->string('name', 50)->change();
    });
```     

---
[建立資料庫Migration](https://ithelp.ithome.com.tw/articles/10223878)<br>
[資料庫連線設定](https://dotblogs.com.tw/SmallFish/2020/09/27/071934)<br>
[官網](https://laravel.com/docs/8.x/migrations#column-method-mediumText)<br>

---


