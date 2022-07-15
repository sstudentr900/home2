# pagnation
app/Http/Controller/
```php
        //1.Pagnation
        $limit = 2; //顯示數量
        // $request->query("page")->?page=2
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
        // return view("url",[
        //     "posts"=>$posts,
        // ]);     


        //3.Pagnation
        $end = 9; //顯示數量
        $pageTotle = ceil(data_banews::count() / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $datas = data_banews::offset($start)->limit($end)->orderBy('sort','desc')->get();
        return view('banews', [
            "datas"=>$datas,
            "pageStare"=>$pageP,
            "pageTotle" => $pageTotle,
        ]);
```
resource/views/
```php
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

    //3.Pagnation
    <div class="page">
        <ul>
            <li>
                <a class="pre" href="{{  URL::asset('banews').'/'.($pageStare>1?$pageStare-1:1) }}"></a>
            </li>
            <li>
                <a>{{ $pageStare }} / {{ $pageTotle }}</a>
            </li>
            <li>
                <a class="next" href="{{ URL::asset('banews').'/'.($pageStare<$pageTotle?$pageStare+1:$pageTotle) }}"></a>
            </li>
        </ul>
    </div>
```

---
[Pagnation](https://ithelp.ithome.com.tw/articles/10227014)
