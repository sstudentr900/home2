## 建立控制器(Controller)
建立controller檔，加了--resource或--api後，他會在內容中幫你生成restful api 風格的function
```php
    artisan make:controller Blog/PostController --resource
```

## Controller
app/Http/Controller/Blog/PostController.php
```php
    <?php
    namespace App\Http\Controllers\Blog;  //檔案位置
    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use App\Models\blog;
    use Illuminate\Support\Facades\Log;
    use App\Http\Controllers\Blog\PostController;

    class PostController extends Controller
    {
        public function index(Request $request)
        {
            //1.Pagnation
            $limit = 2; //顯示數量
            $page = $request->query("page")?$request->query("page"):1;
            $offset = ($page - 1) * $limit;

            $posts = blog::orderBy('id','ASC')
                        ->offset($offset)
                        ->limit($limit)
                        ->get();
            $total_pages = ceil(blog::count() / $limit);        
            return view("blog/index",[
                "posts"=>$posts,
                "page"=>$page,
                "total_pages" => $total_pages,
            ]);  

            //2.Pagnation
            // $posts = blog::paginate(2);  
            // return view("blog/index",[
            //     "posts"=>$posts,
            // ]);     
            
        }

        public function create()
        {
            return view('blog/edit',[
                'title' => '未命名文章',
                'content' => '',
                'type' => 'create,'
            ]);
        }

        public function store(Request $request)
        {
            $title = $request->input("title");
            $content = $request->input("content");

            $post = new blog;
            $post->title = $title;
            $post->content = $content;
            $post->save();

            Log::info("Store New Blog Post: id = $post->id");

            return redirect()->action([PostController::class,'show'], ['id' => $post->id]);
        }

        public function show($id)
        {
            $post = blog::find($id);

            if(! $post){
                abort(404);
            }

            $content = $post->content;

            return view("blog.post", [
                "title" => $post->title,
                "content" => $content,
            ]);
        }

        public function edit($id)
        {
            $post = blog::find($id);

            return view('blog/edit',[
                'id' => $id,
                'title' => $post->title,
                'content' => $post->content,
                'type' => 'edit',
            ]);
        }

        public function update(Request $request, $id)
        {
            $post = blog::find($id);

            if(! $post){
                abort(403);
            }

            $title = $request->input("title", "未命名文章");
            $content = $request->input("content");

            $post->title = $title;
            $post->content = $content;

            $post->update();

            Log::info("Update Blog Post, the id is $id");

            return redirect()->action([PostController::class,'show'], ['id' => $id]);
        }

        public function destroy($id)
        {
            $post = blog::find($id);

            if(! $post){
                abort(403);
            }

            $post->delete();

            Log::info("Delete Blog Post, the id is $id");

            return redirect()->action([PostController::class,'index']);
        }
    }
```


# 建立路由(Route)
routes/web.php
```php
    <?php
    use Illuminate\Support\Facades\Route;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\App;
    //引入檔案
    use App\Http\Controllers\Blog\PostController;
    Route::group(['prefix' => 'blog',
        'as' => 'blog/',
        'namespace' => 'Blog', ],
        function(){
            //顯示全部
            Route::get('/post', [PostController::class,'index'])->name('index');
            //新增
            Route::get('/post/create', [PostController::class,'create'])->name('create');
            //儲存
            Route::POST('/post', [PostController::class,'store'])->name('store');
            //顯示單個
            Route::get('/post/{id}', [PostController::class,'show'])->name('show');
            //編輯
            Route::get('/post/{id}/edit', [PostController::class,'edit'])->name('edit');
            Route::PATCH('/post/{id}', [PostController::class,'update'])->name('update');
            //刪除
            Route::DELETE('/post/{id}', [PostController::class,'destroy'])->name('destroy');
        }
    );
```


# 建立頁面模板(views)
resource/views/blog/base.blade.php
```php
    <!doctype html>
    <html lang="zh-Hant-TW">
        <head>
            <meta charset="UTF-8"/>
            <title>@yield("titile", "Example  Blog of Laravel Tutorial")</title>
        </head>
        <body>
            @section('body')
            @endsection
        </body>
    </html>
```
resource/views/blog/edit.blade.php
```php
    @extends("base")

    @section('title', '編輯文章')

    @section('body')
        <form method="post" action="{{($type=="edit") ?
                        route("blog/update", ["id"=>$id]) :
                        route("blog/store")}}">
            @csrf
            @method(($type=="edit")? "patch" : "post")

            <label for="title">標題：</label>
            <input name="title" type="text" value="{{$title}}" id="title" name="title"/>
            <br/>
            <label for="content">內容：</label>
            <textarea cols="30" id="content" name="content" rows="10">{{$content}}</textarea>
            <br/>
            <input name="" type="submit" value="儲存"/>
        </form>
    @endsection
```
resource/views/blog/index.blade.php
```php
    @extends("base")

    @section('title', '網誌文章')

    @section('body')
        <div class="container">
            <a href="{{route('blog/create')}}"><input class="btn btn-primary" name="" type="button" value="新增文章"/></a>
            <ul>
                @foreach ($posts as $post)
                    <li>
                        <a href="{{route('blog/show',['id'=>$post->id])}}">{{ $post->title }}</a>
                        <a href="{{route('blog/edit',['id'=>$post->id])}}">修改</a>
                        <form class="form-inline"
                            action="{{route('blog/destroy',['id'=>$post->id])}}"
                            method="post">
                            @csrf
                            @method('delete')
                            <input class="btn btn-danger" type="submit" value="刪除"/>
                        </form>
                    </li>
                @endforeach
            </ul>
        </div>

        //1.Pagnation
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="?page={{$page-1<0?$page-1:1}}" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                @for($i=1; $i <= $total_pages; $i++)
                    <li class="page-item"><a class="page-link" href="?page={{$i}}">{{$i}}</a></li>
                @endfor
                <li class="page-item">
                    <a class="page-link" href="?page={{$page+1<$total_pages?$page+1:$total_pages}}" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>

        //2.Pagnation
        {{--{{ $posts->links() }}--}}
    @endsection
```
resource/views/blog/post.blade.php
```php
   @extends("base")

    @section('title', $title)

    @section('body')
        <h1>{{$title}}</h1><br>
        {{$content}}
    @endsection
```


---
[CRUD ＆ RESTful](https://ithelp.ithome.com.tw/articles/10225876)<br>
