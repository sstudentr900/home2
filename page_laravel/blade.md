# 頁面模板(Blade)

## csrf
```php
    //1.
    @csrf

    //2.
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />

    //3.
    {!! csrf_field() !!}

    //4.
    <meta name="csrf-token" content="{{ csrf_token() }}">
```

## isset
```php
    //1.
    {{isset($variable) ? $variable : "Default Value"}}
  
    //2.
    @isset ($variable)
        {{$variable}}
    @else
        Default
    @endisset
```    

## empty
```php
    @empty($variable)
        Default
    @else
        {{$variable}}
    @endempty
```

## 迴圈
```php
    @for ($i = 0; $i < 10; $i++)
        The current value is {{ $i }}
    @endfor


    @foreach ($item as $list)
        {{$item}} <br/>
    @endforeach

    //index
    @foreach ($teams as  $team)
    {{ $loop->index }}
    @endforeach


    @forelse ($item as $list)
        <li>{{ $item }}</li>
    @empty
        <p>No item</p>
    @endforelse


    @while (true)
        <p>I'm looping forever.</p>
    @endwhile


    @foreach ($users as $user)
        @continue($user->type == 1)
            <li>{{ $user->name }}</li>
        @break($user->number == 5)
    @endforeach
```

## 判斷式
```php
    @if (judge1?)
    // Something when true
    @elseif (judge2?)
    // Something when judge2 is true
    @else
    // Other condition
    @endif
```

## 不轉譯輸出 
```php
    {!! $variable !!}
```

----
[路由&頁面模板](https://ithelp.ithome.com.tw/articles/10222061)<br>