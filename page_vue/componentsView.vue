<template>
    <div>
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
        <h2>global variable in Vue(provide/inject)</h2>
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
        <h4>參考</h4>
        <ul>
            <li>
            <a href="https://stackoverflow.com/questions/65184107/how-to-use-vue-prototype-or-global-variable-in-vue-3" target="_blank">global variable</a>
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=3pDNY4fLZGc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=13" target="_blank">註冊全局組件</a>
            </li>
        </ul>
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