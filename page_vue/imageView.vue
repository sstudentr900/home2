<template>
    <div>
        <h2>images</h2>
        <p>assets</p>
        <p>Webpack 編譯 減少額外的網絡請求</p>
        <pre>
            //assets 基本寫法
            img src="@/assets/home.png"
            img src="../../assets/home.png"

            //assets require 帶入值
            img :src="require(`@/assets/${image}.svg`)"
        </pre>
        <p>public</p>
        <p>需要使用絕對路徑</p>
        <pre>
            //放在public/img/i01.jpg"
            img src="img/i01.jpg" 
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://stackoverflow.com/questions/47313165/how-to-reference-static-assets-within-vue-javascript">vue assets</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {},
    }
</script>