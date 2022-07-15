<template>
    <div>
        <h1>I18n</h1>
        <div class="nav">
            <span @click="selectLanguage('en')"> {{ $t("language.en") }}</span> |
            <span @click="selectLanguage('zh')"> {{ $t("language.zh") }}</span>
        </div>
        <br>
        <br>
        <p>{{ $t("message") }}</p>
        <ul>
            <li v-for="(item,index) in navList" :key="index">
                <p>index: {{ index }}  —— id: {{ item.id }} —— item: {{ $t(item.item) }} —— name: {{ item.name }}</p>
            </li>
        </ul>
        <br>
        <br>
        <a href="https://ithelp.ithome.com.tw/articles/10280803">Vue I18n</a>
    </div>
</template>
<style scoped>
    .nav{
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .nav span{
        cursor: pointer;
        font-size: 18px;
        padding: 0 10px;
    }

</style>
<script>
export default {
    data() {
        return {
            navList: [
                { id: 1, item: "navItem.all", name: "All" },
                { id: 2, item: "navItem.30off", name: "Discount30" },
                { id: 3, item: "navItem.50off", name: "Discount50" },
                { id: 4, item: "navItem.ithelp", name: "Ithelp" },
            ],
        };
    },
    methods: {
        selectLanguage(language) {
            this.$i18n.locale = language;
            localStorage.setItem("locale", language);
        },
    },
}
</script>
