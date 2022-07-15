# 顯示訊息
## html
```
<link href="iao-alert.css" rel="stylesheet" type="text/css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="iao-alert.jquery.js"></script>
<script>
    $( document ).ready(function() {
        <?PHP 
            if($result == "success")
            {
                echo('Success("修改資料成功!")');
            }
        ?>
    });
    function Success(message)
    {
        $.iaoAlert({
            type: "success",
            mode: "dark",
            msg: message,
        })
    }
</script>
```

----
[iao-alert](https://www.jqueryscript.net/other/Custom-Alert-Notification-Plugin-For-jQuery-iao-alert.html)<br>
[編輯列表頁](https://www.dotblogs.com.tw/SmallFish/2021/04/27/191205)<br>