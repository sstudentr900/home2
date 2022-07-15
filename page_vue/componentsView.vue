<template>
    <div>
        <h2>components</h2>
        <h4>註冊全局組件</h4>
        <pre>
            //main.js
            import fileName from fileUrl
            //第一個參數:全局組件名稱,第二個參數:組件
            vue.component(fileName.name,fileName)

            //template
            //直接打名稱即可調用
            fileName
        </pre>
        <br>
        <h2>全局引用(globalProperties)</h2>
        <pre>
            //main.js
            import * as api from '@/api'; //全域API
            const app = createApp(App);
            //全域寫法
            app.config.globalProperties.$api = api;

            //template
            this.$api.apiName().then(function(response) {
                console.log(response)
            })
        </pre>
        <button @click="getData">getData</button>
        <br>
        <h2>全局引用(provide/inject)</h2>
        <pre>
            //main.js
            import * as api from '@/api'; //全域API
            const app = createApp(App);
            //全域寫法
            app.provide('$api', api);

            //template
            setup() {
                const $api = inject('$api');
                $api.apiName().then(function(response) {
                    console.log(response)
                })
            },
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=3pDNY4fLZGc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=13">全局组件</a>
        <a href="https://stackoverflow.com/questions/65184107/how-to-use-vue-prototype-or-global-variable-in-vue-3">全域配置</a>
        <a href="https://v3.cn.vuejs.org/guide/migration/global-api.html#vue-prototype-%E6%9B%BF%E6%8D%A2%E4%B8%BA-config-globalproperties">全局 API</a>
    </div>
</template>
<script>
    import {
        inject
    } from 'vue'
    export default {
        name: 'componentsView',
        computed: {

        },
        setup() {
            const $api = inject('$api');
            $api.reqCateBanner().then(function(response) {
                console.log(response)
            })
        },
        methods: {
            getData() {
                this.$api.reqCateBanner().then(function(response) {
                    console.log(response)
                })
            },
        }

    }
</script>