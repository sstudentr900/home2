
# Eloquent ORM 
## 一對一
route
```php
    Route::get('testOne', [FnController::class,'testOne']);
```
migrations 需要在test2新增test1_id
```php
    //test1
    Schema::create('test1', function (Blueprint $table) {
        $table->increments();
        $table->string('username');
        $table->timestamps();
    });
    //test2
    Schema::create('test2', function (Blueprint $table) {
        $table->increments();
        $table->string('title', 255); 
        $table->integer('test1_id'); 
        $table->timestamps(); 
    });
```
model hasOne:去Test2裡的test1_id取得test1的ID 
```php    
    //Test1
    class Test1 extends Model
    {
        protected $table = 'test1';
        protected $primaryKey = 'id';
        protected $fillable = [
            'username'
        ];
        public function test2One()
        {
            //1對1
            return $this->hasOne('App\Test2');
        }
    }
    //Test2
    class Test2 extends Model
    {
        protected $table = 'test2';
        protected $primaryKey = 'id';
        protected $fillable=[
            'title'
        ];
    }
```
controll
```php 
    public function testOne(){
        //1對1 {}
        $userData = Test1::find(1)->test2One;
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        // {
        //     "status": true,
        //     "user_data": {
        //         "id": 1,
        //         "title": "1",
        //         "created_at": null,
        //         "updated_at": null
        //     }
        // }


        // 1對1 {{}}
        $userData = Test1::find(1);
        $userData->test2One;
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        // {
        //     "status": true,
        //     "user_data": {
        //         "id": 1,
        //         "username": "1",
        //         "created_at": null,
        //         "updated_at": null,
        //         "test2_one": {
        //             "id": 1,
        //             "title": "1",
        //             "created_at": null,
        //             "updated_at": null
        //         }
        //     }
        // }
    }
```

## 一對一（逆向）
route
```php
    Route::get('testOne', [FnController::class,'testOne']);
```
migrations 需要在test2新增test1_id
```php
    //test1
    Schema::create('test1', function (Blueprint $table) {
        $table->increments();
        $table->string('username');
        $table->timestamps();
    });
    //test2
    Schema::create('test2', function (Blueprint $table) {
        $table->increments();
        $table->string('title', 255); 
        $table->integer('test1_id'); 
        $table->timestamps(); 
    });
```
model hasOne:去Test2裡的test1_id取得test1的ID 
```php    
    //Test1
    class Test1 extends Model
    {
        protected $table = 'test1';
        protected $primaryKey = 'id';
        protected $fillable = [
            'username'
        ];
        
    }
    //Test2
    class Test2 extends Model
    {
        protected $table = 'test2';
        protected $primaryKey = 'id';
        protected $fillable=[
            'title'
        ];
        public function test1To()
        {
            //1對1（逆向）
            return $this->belongsTo('App\Test1');
        }
    }
```
controll
```php 
    public function testOne(){
        $userData = Test2::find(1);
        $userData->test1To;
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        // {
        //     "status": true,
        //     "user_data": {
        //         "id": 1,
        //         "test1_id": 1,
        //         "title": "1",
        //         "created_at": null,
        //         "updated_at": null,
        //         "test1": {
        //             "id": 1,
        //             "username": "1",
        //             "created_at": null,
        //             "updated_at": null
        //         }
        //     }
        // }
    }
```

## 一對多
route
```php
    Route::get('testOne', [FnController::class,'testOne']);
```
migrations 需要在test2新增test1_id
```php
    //test1
    Schema::create('test1', function (Blueprint $table) {
        $table->increments();
        $table->string('username');
        $table->timestamps();
    });
    //test2
    Schema::create('test2', function (Blueprint $table) {
        $table->increments();
        $table->string('title', 255); 
        $table->integer('test1_id'); 
        $table->timestamps(); 
    });
```
model hasMany:去Test2裡的test1_id取得全部test1的ID 
```php    
    //Test1
    class Test1 extends Model
    {
        protected $table = 'test1';
        protected $primaryKey = 'id';
        protected $fillable = [
            'username'
        ];
        public function test2Many()
        {
            //1對1
            return $this->hasMany('App\Test2');
        }
    }
    //Test2
    class Test2 extends Model
    {
        protected $table = 'test2';
        protected $primaryKey = 'id';
        protected $fillable=[
            'title'
        ];
    }
```
controll
```php 
    public function testOne(){
        //1對多 {[{},{}]}
        $userData = Test1::find(1);
        $userData->test2Many;
        //同上
        // $userData = Test1::where('id','1')->with('test2Many')->get();
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        // {
        //     "status": true,
        //     "user_data": {
        //         "id": 1,
        //         "username": "1",
        //         "updated_at": null,
        //         "test2_many": [
        //             {
        //                 "id": 1,
        //                 "title": "1",
        //                 "created_at": null,
        //                 "updated_at": null
        //             },
        //             {
        //                 "id": 2,
        //                 "title": "2",
        //                 "created_at": null,
        //                 "updated_at": null
        //             }
        //         ]
        //     }
        // }
        
    }
```

## 多對一
route
```php
    Route::get('testOne', [FnController::class,'testOne']);
```
migrations 
```php
    //test1
    Schema::create('test1', function (Blueprint $table) {
        $table->increments();
        $table->string('username');
        $table->timestamps();
    });
    //test2
    Schema::create('test2', function (Blueprint $table) {
        $table->increments();
        $table->string('title', 255); 
        $table->integer('test1_id'); 
        $table->timestamps(); 
    });
```
model 
```php    
    //Test1
    class Test1 extends Model
    {
        protected $table = 'test1';
        protected $primaryKey = 'id';
        protected $fillable = [
            'username'
        ];
       
    }
    //Test2
    class Test2 extends Model
    {
        protected $table = 'test2';
        protected $primaryKey = 'id';
        protected $fillable=[
            'title'
        ];
         public function test1()
        {
            //（逆向）
            return $this->belongsTo('App\Test2');
        }
    }
```
controll
```php 
    public function testOne(){
        $userData = Test2::where('test1_id','1')->with('test1')->get();
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        // {
        //     "status": true,
        //     "user_data": [
        //         {
        //             "id": 1,
        //             "test1_id": 1,
        //             "title": "1",
        //             "sort": "1",
        //             "pub": 1,
        //             "created_at": null,
        //             "updated_at": null,
        //             "test1": {
        //                 "id": 1,
        //                 "username": "1",
        //                 "phone": "0956",
        //                 "created_at": null,
        //                 "updated_at": null
        //             }
        //         },
        //         {
        //             "id": 2,
        //             "test1_id": 1,
        //             "title": "2",
        //             "sort": "2",
        //             "pub": 2,
        //             "created_at": null,
        //             "updated_at": null,
        //             "test1": {
        //                 "id": 1,
        //                 "username": "1",
        //                 "phone": "0956",
        //                 "created_at": null,
        //                 "updated_at": null
        //             }
        //         }
        //     ]
        // }
        
    }
```


## 多對多
* 樞紐表(test1_test2)要最後建立哦，否則它無法辨別test1和test2表的關係
* 命名規範為將兩個表格名稱按照字母順序，並在它們之間加上一個底線來分隔
* 樞紐表不適合使用 -m

route
```php
    Route::get('testOne', [FnController::class,'testOne']);
```
migrations  
```php
    //test1
    Schema::create('test1', function (Blueprint $table) {
        $table->increments();
        $table->string('username');
        $table->timestamps();
    });
    //test2
    Schema::create('test2', function (Blueprint $table) {
        $table->increments();
        $table->string('title', 255); 
        $table->timestamps(); 
    });
    //test1_test2 命名規定XX_XX
    Schema::create('test1_test2', function (Blueprint $table) {
        $table->increments();
        $table->integer('test1_id'); 
        $table->integer('test2_id'); 
        $table->string('days'); 
        $table->timestamps(); 
    });
```
model 
```php    
    //Test1
    class Test1 extends Model
    {
        protected $table = 'test1';
        protected $primaryKey = 'id';
        protected $fillable = [
            'username'
        ];
        public function test2ToMany()
        {
            //withPivot 連結test1_test2的days
            return $this->belongsToMany('App\Test2')->withPivot('days');
        }
    }
    //Test2
    class Test2 extends Model
    {
        protected $table = 'test2';
        protected $primaryKey = 'id';
        protected $fillable=[
            'title'
        ];
    }
```
controll
```php 
    public function testOne(){
        $userData = Test1::with('test2ToMany')->get();
        return response()->json(['status' => true, 'user_data' => $userData], 200);
        {
            "status": true,
            "user_data": [
                {
                    "id": 1, //test1
                    "username": "1",
                    "phone": "0956",
                    "created_at": null,
                    "updated_at": null,
                    "test2_to_many": [ //test2
                        { //塞選方式根據test1_test2的test1_id,test2_id
                            "id": 3, 
                            "title": "112",
                            "sort": "0",
                            "pub": 1,
                            "created_at": "2022-06-23T06:14:11.000000Z",
                            "updated_at": "2022-06-23T06:14:11.000000Z",
                            "pivot": { //test1_test2
                                "test1_id": 1, 
                                "test2_id": 3, 
                                "days": "6"
                            }
                        },
                        {
                            "id": 4,
                            "title": "xcxc",
                            "sort": "0",
                            "pub": 1,
                            "created_at": "2022-06-23T06:32:24.000000Z",
                            "updated_at": "2022-06-23T06:32:24.000000Z",
                            "pivot": {
                                "test1_id": 1,
                                "test2_id": 4,
                                "days": "9"
                            }
                        }
                    ]
                },
                {
                    "id": 2, 
                    "username": "2",
                    "phone": "655",
                    "created_at": null,
                    "updated_at": null,
                    "test2_to_many": [
                        {
                            "id": 1,
                            "title": "1",
                            "sort": "1",
                            "pub": 1,
                            "created_at": null,
                            "updated_at": null,
                            "pivot": {
                                "test1_id": 2,
                                "test2_id": 1,
                                "days": "1"
                            }
                        },
                        {
                            "id": 2,
                            "title": "2",
                            "sort": "2",
                            "pub": 2,
                            "created_at": null,
                            "updated_at": null,
                            "pivot": {
                                "test1_id": 2,
                                "test2_id": 2,
                                "days": "8"
                            }
                        }
                    ]
                }
            ]
        }
    }
```


   

---
[Eloquent ORM](https://ithelp.ithome.com.tw/articles/10224980)<br>
