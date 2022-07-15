<template>
    <div>
        <h2>nprogress 進度條</h2>
        <p>npm安裝</p>
        <pre>
            npm install nprogress
        </pre>
        <p>package.js 可以查到安裝</p>
        <p>在request引用 nprogress</p>
        <pre>
            // 進度條
            import nprogress from "nprogress";
            //console.log(nprogress)
            // 進度條樣式
            import "nprogress/nprogress.css";


            //請求之前 攔截器可以檢測
            requests.interceptors.request.use(
                function(config) {
                    //進度條開始動
                    nprogress.start();
                },
            );
            //請求成功失敗
            requests.interceptors.response.use(
                function(response) {
                    //進度條結束
                    nprogress.done();
                },
            );
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=B_weIItFtTI&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=17&ab_channel=%E5%B0%9A%E7%A1%85%E8%B0%B7IT%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1">進度條</a>
    </div>
</template>
<script>
    //內建throttle(幾秒後執行) 引入lodash/throttle 
    import throttle from "lodash/throttle";
    export default {
        data() {
            return {
                text: ''
            };
        },
        mounted() {

        },
        methods: {
            methodName: throttle(function() {
                console.log(' //執行')
            }, 1000)
        },
    }
</script>