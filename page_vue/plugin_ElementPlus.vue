<template>
    <div>
        <h2>element</h2>
        <p>安裝全局</p>
        <pre>
            //main.js 安裝全局
            import ElementPlus from 'element-plus'
            import 'element-plus/dist/index.css';
            app.use(ElementPlus)

            //templat 引用notify(訊息通知組件)
            export default {
                methods:{
                    click(){
                        this.$notify({
                            title: '訊息通知',
                            message: '目前沒有商品可以結帳',
                            type: 'info',
                        })
                    }
                }
            }
        </pre>
        <p>本地引入</p>
        <pre>
            //main.js 安裝CSS
            import 'element-plus/dist/index.css';

            //templat 引用notify(訊息通知組件)
            import { ElNotification } from 'element-plus';
            export default {
                methods:{
                    click(){
                        ElNotification({
                            title: '訊息通知',
                            message: '目前沒有商品可以結帳',
                            type: 'info',
                        })
                    }
                }
            }
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://element-plus.org/en-US/guide/quickstart.html">官網</a>
        <a href="https://element-plus.org/en-US/component/notification.html">ElNotification</a>

    </div>
</template>
<style>
    p.color_red{
        color: red;
    }
</style>
<script>
export default {
    data() {
        return {
            clicks: 0,
            isUnclickable: false,
            is_class: false
        };
    },
    methods: {
        counter() {
            this.clicks += 1;
            if (this.clicks % 50 === 0) {
                alert(`Already ${this.clicks} clicks.`);
            }
        },
        disabled(){
            this.isUnclickable=true
        },
        is_class_fn(){
            this.is_class = true
        }
    },
}
</script>
