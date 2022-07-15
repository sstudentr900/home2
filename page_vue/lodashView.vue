<template>
    <div>
        <h2>lodash/throttle 节流</h2>
        <input type="text" v-model="text" @change="methodName">
        <p>{{text}}</p>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=XGLK0iJaV7E&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=25">节流</a>
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