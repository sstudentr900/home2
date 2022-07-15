## response json
通常api設計在給前端資料時會使用json格式
```php
    //controller範例：
    public function show($id)
    {
        // $tasks = Task::all();
        $tasks = Task::find($id);
        if (!$task) {
            return response()->json(['status' => false, 'error' => 'task search not found'], 400);
        }
        return response()->json(['status' => true, 'task_data' => $task], 200);
    }


    //route:
    Route::get('task/{id}',[controllerName::class,'className']);
```

## status code
* 1xx訊息
* 2xx成功
* 3xx重新導向
* 4xx客戶端錯誤
* 5xx伺服器錯誤
* 200 OK
* 201 Created
* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error


----
[設計自己的api](https://ithelp.ithome.com.tw/articles/10248242)<br>