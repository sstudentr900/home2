## 安裝郵件插件
```php
    composer require guzzlehttp/guzzle
```

## 郵件相關設定
郵件的設定放在config/mail.php檔案中
```php
    'smtp' => [
        'transport' => 'smtp',
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'encryption' => 'tls',
        'username' => 'gmail得信箱',
        'password' => 'gmail的應用程式密碼',
        'timeout' => null,
        'auth_mode' => null,
    ],
     'from' => [
        'address' => '寄件人信箱',
        'name' => '寄件人名稱',
    ],

```


## contriller
```php
    use Mail; 
    // Mail::send('view_url', ['view_id' => view_value ], function($mail) use ('外部資料傳入'){
    Mail::send('email_password', ['name' => $User['name'],'href' => $href ], function($mail) use ($User){
        //收件人
        $mail->to($User['account']);
        //信箱標題
        $mail->subject('台灣財務金融學會【修改密碼通知】!!');
    });
```

## 頁面設計 view
```php
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <p>{{ $name }} 您好，</p>
            <br>
            <div style="background-color:#f2f2f2;vertical-align:top;padding:20px 25px">
                <p>請點選「重設密碼」按鈕來完成重設密碼。</p>
                <div style="padding:10px 25px;text-align:center">
                    <a href="{{ $href }}" style="display:inline-block;background:#ec6f11;color:#ffffff;text-decoration:none;text-transform:none;padding:10px 60px;border-radius:3px" target="_blank">重設密碼</a>
                </div>
            </div>
            <p>若無法點選按鈕請連此網址：</p>
            <a href="{{ $href }}" style="color:#ec6f11" target="_blank">{{ $href }}</a>
            <br>
            <br>
            <small>
                謝謝您<br>台灣財務金融學會敬上
            </small>
        </body>
    </html>
```


----
[Gmail設定](https://www.dotblogs.com.tw/SmallFish/2021/04/17/123034)<br>
[Gmail設定](https://www.dotblogs.com.tw/SmallFish/2021/04/18/074822)<br>
[Gmail設定](https://webkul.com/blog/user-guide-to-set-up-gmail-smtp-configuration/)<br>
[Gmail設定](https://ithelp.ithome.com.tw/articles/10252073)<br>