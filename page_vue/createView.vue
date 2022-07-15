<template>
    <div>
        <h2>creare</h2>
        <p>全域安裝</p>
        <pre>
            npm install -g @vue/cli
        </pre>
        <p>vue 版本</p>
        <pre>
            vue --version
        </pre>
        <p>建立專案</p>
        <pre>
            vue create project-name
        </pre>
        <p>manually select features  手動選擇</p>
        <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271YGDaVQosSX.png" alt="">
        <p>CSS Pre-processors（for Sass）</p>
        <p>Linter / Formatter （多人協作的話，最好是選起來，統一大家程式碼）</p>
        <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271JdeyRwLhCs.png" alt="">
        <p>選擇設置檔存放位置 → In dedicated config files，讓配置檔各自獨立，有需要再建立配置檔即可</p>
        <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271X4DVkbU0d8.png" alt="">
        <p>日後是否以本次選擇作為通用預設選項</p>
        <img src="https://ithelp.ithome.com.tw/upload/images/20210917/20141271istQKg2sVC.png" alt="">
        <p>啟動伺服器</p>
        <pre>
            npm run serve
        </pre>
        <p>打包</p>
        <pre>
            npm run build
        </pre>
   
        <h2>目錄</h2>
        <ol>
            <li>public : 任何靜態檔都可以放在這，不會經過 webpack 打包</li>
            <li>src : 原始檔案，大部分開發都在這異動</li>
            <li>src/assets : 存放靜態資源，例如 images、css、logo 等</li>
            <li>src/components：存放自定義的元件</li>
            <li>src/router：存放所設置的路由元件</li>
            <li>src/store：存放 Vuex 管理的狀態庫</li>
            <li>src/views：存放顯示在畫面上的路由元件
                <ul>
                    <li>將 components 裡的元件引入給 views 裡的路由元件使用，例如在 Home.vue 中就使用了 HelloWorld.vue 元件</li>
                </ul>
            </li>
            <li>src/App.vue：整個專案裡的核心主件，在此進行切換路由元件並渲染出相應頁面
                <ul>
                    <li>以巢狀結構來看，App.vue 會是第一層，其他路由元件則會列在第二層之後，因此也可考慮在此層放置所有頁面都存有的共通元件作為固定班底，例如 Header、Navbar、Footer 等</li>
                </ul>
            </li>
            <li>src/main.js：程式進入點，完成初始化 Vue instance 並掛載到 App.vue 上
                <ul>
                    <li>同時會將專案中所需的 plugins 引入至此</li>
                </ul>
            </li>
        </ol>
        <h2>vue.config.js</h2>
        <p>eslint 關閉</p>
        <pre>
            //vue.config.js
            module.exports = {
                //關閉eslint
                lintOnSave: false
            }
        </pre>
        <p>domain 設定 publicPath</p>
        <p>當路徑 https://my-vue-app.com/ 變這樣 https://github.com/alysachan830/my-vue-app/name/，就要設定 publicPath 為 /my-vue-app/name</p>
        <pre>
        //vue.config.js 設定檔
        module.exports = {
            publicPath: process.env.NODE_ENV === 'production'
            ? '/my-vue-app/name'
            : '/'
        }
        </pre>
        <a href="https://ithelp.ithome.com.tw/articles/10263296">Vue CLI 的目錄架構</a>
        <h2>style 撰寫 CSS</h2>
        <p>scoped 會讓該元件在編譯時被添加一個以「data-v-」開頭代表唯一值</p>
        <img class='max' src="https://imgur.com/Lh524gw.jpg" alt="">
        <img class='max' src="https://imgur.com/FWkXaB0.jpg" alt="">
        <h2>相對路徑 @</h2>
        <pre>
        import HelloWorld from "/src/components/HelloWorld.vue";
        import HelloWorld from "@/components/HelloWorld.vue";
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10265925">Vue 個專案先</a>
        <a href="https://ithelp.ithome.com.tw/articles/10277962">專案小幫手</a>
    </div>
</template>