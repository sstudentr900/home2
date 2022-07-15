
```php
    //counters
    Schema::create('counters', function (Blueprint $table) {
        $table->id(); //id=>bigint(20)
        $table->string('title', 255);
        $table->integer('sort')->nullable();
        $table->boolean('pub')->nullable()->default(1);
        $table->timestamps();
    });

    //counter_translations
    Schema::create('counter_translations', function (Blueprint $table) {
        $table->id(); //id=>bigint(20)
        $table->unsignedBigInteger('counter_id'); //bigint(20)
        //將counter_id關聯到counters這table的id,須注意外鍵ID格式必須相同
        //onDelete('cascade')、onUpdate('cascade')這兩個參數是為了在刪除或新增users內的資料，可以自動更改groups的資料。
        //當你要刪除users內的資料，若是不加上onDelete('cascade')這個參數，會因為有groups關聯著，SQL會報錯誤，而無法刪除。
        $table->foreign('counter_id')->references('id')->on('counters')->onDelete('cascade')->onUpdate('cascade');
    });
```


## phpMyAdmin 設定外鍵,須注意外鍵ID格式必須相同
![](https://imgur.com/s4rDKAX.png)<br>
![](https://imgur.com/zENINov.png)<br>


---
[Add Foreign Key](https://www.magutti.com/blog/add-foreign-key-references-in-laravel-7-migration)<br>
[解釋外鍵](https://b-l-u-e-b-e-r-r-y.github.io/post/ForeignKey/)<br>
