<template>
    <div>
        <h2>v-if VS v-show</h2>
        <div v-if="isShelf">
            <p>v-if:true</p>
        </div>
        <div v-else>
            <p>v-if:false</p>
        </div>
        <div v-show="isShelf">
            <p>v-show:true</p>
        </div>
        <button @click="isShelf = true">顯示</button>
        <button @click="isShelf = false">不顯示</button>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10280380">v-if</a>
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
            isShelf: true,
        };
    },
    methods: {
    },
}
</script>
