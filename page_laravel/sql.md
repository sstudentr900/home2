## basis
* data::select('id','name')         //顯示那些
* data::where('id','1')             //查詢
* data::orderBy('id','desc')        //排序
* data::offset(0)                   //從哪里开始
* data::limit(10)                   //查询多少数据
* data::skip(0)                     //從哪里开始
* data::take(10)                    //查询多少数据
* data::count()                     //數量


## 讀取(Read)
* all() 讀取全部資料
* find() 輸入primary key 讀取該資料
* where() where用法就比較需要注意了，他跟原生sql語法差不多用法，裏面都是放置判斷式，不同點於find()是，他後面需要加上first()或是get(),例如：
```php
    //1.
    Users::find('1');

    //2.
    Users::where('id','1')->first();
```

## 新增(Create)
```php
    //1.
    $user = new Users;   
    $user->title = "Default Title";
    $user->content = "Example Content";
    $user->save();

    //2.
    Users::create(['title'=>'Default Title' , 'content'=>'Example Content']);
```

## 更新(Update)
```php
    //1.
    $user = Users::find(2);
    $user->title = "New Title";
    $user->update();

    //2.
    Users::find('2')->update(['title'=>'New Title']);

    //3.更新特定欄位
    Users::where('id', 1)
    ->where('destination', 'San Diego')
    ->update(['delayed' => 1]);
```

## 刪除(Update)
```php
    //1.
    Users::find('2')->delete();

    //2.
    Users::destroy('2');
```

## 判斷有無值
```php
$data = data_bacarousel::where('release','y')->get();
if(count($data)){
     abort(404);
}
```

## 列印Eloquent SQL語法
```php
    //引入
    use Illuminate\Support\Facades\DB;

    //啟用紀錄SQL語法
    DB::enableQueryLog();

    //使用SQL
    dataName::create($input);

    //取得目前使用過的SQL語法
    Log::notice(print_r(DB::getQueryLog(), true));
```

---
[laravel Eloquent](https://ithelp.ithome.com.tw/articles/10246143)<br>
