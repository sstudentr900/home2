<template>
    <div>
        <h2>v-for</h2>
        <div v-for="(item,index) in list" :key='index'>
            <p>index:{{index}} -- id:{{item.id}} -- name:{{item.name}}</p>
        </div>
        <select v-model="select">
            <option v-for="item in list" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10271774">v-for 註定綁個 key</a>
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
            select: "",
            list: [
                { id: 1, name: "資料1" },
                { id: 2, name: "資料2" },
                { id: 3, name: "資料3" },
                { id: 4, name: "資料4" },
                { id: 5, name: "資料5" },
            ],
        };
    },
    methods: {
    },
}
</script>
