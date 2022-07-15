<template>
    <div class="box">
        <p>目前導覽項目頁面愈來愈完整，相對有愈來愈多小細節需要留意，尤其是資料量變多時，許多瀏覽時伴隨的滾動效果多少會影響使用者體驗，因此除了顧及版面資料和操作功能，UX 方面也不能輕忽。</p>
        <br>
        <br>
        <h2>導覽列置頂在視窗最上方</h2>
        <p>需求：瀏覽書單時，往下滑動便會讓導覽列相對往上而消失在視窗內</p>
        <p>不過這還算容易調整，使用定位方式 position: fixed; 就能快速解決了！</p>
        <br>
        <br>
        <h2>瀏覽到一半可以直接回到最上方</h2>
        <p>需求：當瀏覽書單資料量較多的頁面時，瀏覽到半途想要回到頁面最上方，卻得拉動滾動條或慢慢往回滾動頁面</p>
        <p>在右下角新增一個可以點擊的按鈕，一樣使用 position: fixed; 固定在視窗上，無論使用者瀏覽到任何程度都能立即點擊按鈕回到頁面最上方。</p>
        <p>單純切版的話，可以利用的href 屬性，設定 href="#" 或 href="#top" 直接連結到當前頁面的最上方。</p>
        <p>透過 JavaScript 操作時，則可使用 Web APIs 當中的 window.scrollTo() 設置滾動行為。</p>
        <br>
        <br>
        <h2>導覽列置頂在視窗最上方</h2>
        <p>需求：瀏覽書單時，往下滑動便會讓導覽列相對往上而消失在視窗內</p>
        <p>不過這還算容易調整，使用定位方式 position: fixed; 就能快速解決了！</p>
        <br>
        <br>
        <h2>導覽列置頂在視窗最上方</h2>
        <p>需求：瀏覽書單時，往下滑動便會讓導覽列相對往上而消失在視窗內</p>
        <p>不過這還算容易調整，使用定位方式 position: fixed; 就能快速解決了！</p>
        <br>
        <br>
        <h2>瀏覽到一半可以直接回到最上方</h2>
        <p>需求：當瀏覽書單資料量較多的頁面時，瀏覽到半途想要回到頁面最上方，卻得拉動滾動條或慢慢往回滾動頁面</p>
        <p>在右下角新增一個可以點擊的按鈕，一樣使用 position: fixed; 固定在視窗上，無論使用者瀏覽到任何程度都能立即點擊按鈕回到頁面最上方。</p>
        <p>單純切版的話，可以利用的href 屬性，設定 href="#" 或 href="#top" 直接連結到當前頁面的最上方。</p>
        <p>透過 JavaScript 操作時，則可使用 Web APIs 當中的 window.scrollTo() 設置滾動行為。</p>
        <br>
        <br>
        <h2>導覽列置頂在視窗最上方</h2>
        <p>需求：瀏覽書單時，往下滑動便會讓導覽列相對往上而消失在視窗內</p>
        <p>不過這還算容易調整，使用定位方式 position: fixed; 就能快速解決了！</p>
        <br>
        <br>
        <h2>切換頁面或重整頁面時，畫面回到最上方從頭開始顯示內容</h2>
        <p>需求：Day 10 曾提到 Vue.js 採用「就地更新」策略，因此會有重複使用元件的情形，再加上 SPA（Single Page Application）單頁式應用只會抽換頁面內容，因此在切換路由時，資料雖然有更新，但仍保持上一頁最後的瀏覽位置；這對使用者來說，會以為網頁出現問題，例如在 IT邦幫忙鐵人賽系列書已經瀏覽到最底部，結果切換到五折區卻還是停留在最底部，而不是頁面開頭處。</p>
        <button type='button' @click="buttonFn">scrollTo</button>
        <br>
        <br>
        <a href="https://ithelp.ithome.com.tw/articles/10280036">參考</a>
    </div>
</template>
<style scoped>
    .box{
        width: 500px;
        margin: auto;
    }
</style>
<script>
export default {
    methods: {
        buttonFn() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
    },
}
</script>
