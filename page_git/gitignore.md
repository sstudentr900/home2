## 新增.gitignore
```
    cd > .gitignore檔案
```

## .gitignore
```
    //Library資料夾 忽略
    library/
```

## gitignore 寫法
```
glob語法
一、檔案名稱表示
    [Ll]ibrary/  資料夾Library或library
    [Ll]ibrary   檔案名Library或library
    lib.a    叫做lib.a的檔案
    .a       叫做.a的檔案
    *.a      什麼.a   例如:abc.a、ASD.a都是，只要以.a結尾
    Law*     Law什麼  例如:Lawer.a Law.obj，只要以Law開頭

二、特殊符號元
    *   可取代任意數量字元
    **  任意中間目錄，例如a/**/b；a/b/c或a/r/f/b皆符合
    [abc] 配對[]內任一字元
    [a-z] 配對[-]範圍內任一字元
    !   除了
    #   註解
    /abc 當前目錄中的abc
		abc/ abc這個資料夾下

三、官方範例
    # 忽略所有的 .a 文件
    *.a
    # 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
    !lib.a
    # 只忽略當前目錄下的 TODO 文件，而不忽略子目錄中的 subdir/TODO
    /TODO
    # 忽略整個build資料夾
    build/
    # 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt ；指忽略doc目錄的，其餘階層不管
    doc/*.txt                                                   
    # 忽略 doc/ 目錄和其所有子目錄下的 .pdf 文件
    doc/**/*.pdf
```

---
[gitignore](https://ithelp.ithome.com.tw/articles/10259552)<br>