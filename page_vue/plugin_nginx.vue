<template>
    <div>
        <h2>nginx</h2>
        <a href="https://www.youtube.com/watch?v=AIUQCIulrkc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=112&ab_channel=%E5%B0%9A%E7%A1%85%E8%B0%B7IT%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1">nginx</a>
        <h2>nginx所在位置</h2>
        <p>etc/nginx</p>
        <h2>沒安裝,安裝在(etc/nginx)</h2>
        <pre>
            yum install nginx
        </pre>
        <h2>編輯nginx.conf去配置</h2>
        <pre>
            vim
        </pre>
        <h2>配置內容</h2>
        <pre>
            location / {
                root /root/XXX/www/XXX/dist;//檔案位置
                index index.html;//倒到index位置
            },
            location /api {
                proxy_pass http://XXX.XXX.XX;//api 位置設定
            }
        </pre>
        <h2>重新跑起來</h2>
        <p>service nginx start</p>
    </div>
</template>

<script>
</script>