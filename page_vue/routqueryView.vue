<template>
    <div>
        <h2>router-link</h2>
        <p>to 路由</p>
        <img src="https://imgur.com/oNzcMgO.jpg" alt="">
        <p>name:路由的名稱,params:path的值(user/12/34)</p>
        <pre>
        //template 
        :to="{ name: 'user', params: { userId: 12, userId2: 34 }}">
        
        //router
        const router = new VueRouter({
            routes: [
                {
                    path: '/user/:userId/:userId2',
                    name: 'user', 
                }
            ]
        }
        </pre>
        <p>query為?後的值(/user/123?k=12)</p>
        <pre>
        //template
        :to="{ name: 'user', params: { userId: 123 },query:{k:12}}">
        
        //router
        const router = new VueRouter({
            routes: [
                {
                    path: '/user/:userId',
                    name: 'user', 
                }
            ]
        }
        </pre>
        <p>tag 渲染標籤</p>
        <img src="https://imgur.com/IAVhyTq.jpg" alt="">
        <p>點擊的路由產生class</p>
        <p>.router-link-exact-active 和 .router-link-active</p>
        <h2>replace(不會向history留下紀錄)</h2>
        <button type='button' @click="buttonFn">改變route</button>
        <p>search = {{searchText}}</p>
        <h2>push(可以返回上一頁)</h2>
        <p>字串形式路由</p>
        <pre>
            //url
            search/key/?k=b

            //methods
            this.$router.push(`/search/${this.keyword}?k=${this.text}`)

            //router
            {
                path: '/search/:key',
                name: 'search',
            }
        </pre>
        <button type='button' @click="pushFn">字串形式改變路由</button>
        <p>對象形式路由(不能同時放path)</p>
        <pre>
            //url
            search/key/?k=b

            //methods
            this.$router.push({
                name: 'search',
                params:{key:'key'},
                query:{k:'b'}
            })

            //router
            {
                path: '/search/:key',
                name: 'search',
            }
        </pre>
        <button type='button' @click="pushFn_object">對象形式改變路由</button>
        <h2>取得路由</h2>
        <p>取得path</p>
        <pre>
            //template
            $route.path=='/home'
        </pre>
        <p>取得params(xxx/search/key/?k=b)</p>
        <pre>
            //router
            {
                path: '/search/:key',
                name: 'search',
            }

            //template
            $route.params.keyword=> key 
        </pre>
        <p>取得query(xxx/search/key/?k=b)</p>
        <pre>
            //router
            {
                path: '/search/:key',
                name: 'search',
            }

            //template
            $route.query.k=>b
        </pre>
        <p>params給值不給值須寫成這樣</p>
        <pre>
            //methods
            this.$router.push({
                params:{key:''||undefined},
            })

            //router
            {
                //加問號是用在可傳可不傳params,否則上一頁會錯誤
                path: '/search/:key?',
            }
        </pre>
        <h2>路由傳地(props)</h2>
        <p>對象寫法</p>
        <pre>
            //router
            {
                path: '...'
                name: '...'
                props: {a:'1'}
            }

            //template
            {{a}}

            //script
            export default {
                props: ['a']
            }
        </pre>
        <p>函數寫法</p>
        <pre>
            //router
            {
                path: '...'
                name: '...'
                props: ($route)=>{
                    return {params:$route.params.key,query:$route.query.k}
                }
            }

            //template
            {{params}}

            //script
            export default {
                props: ['params','query']
            }
        </pre>
        <h2>路由訊息(meta)改變template顯示</h2>
        <pre>
            //router
            {
                path: '/home'
                name: 'home'
                meta: {show:true}
            }
            
            //template
            //判斷路徑
            v-show="$route.path=='/home'"

            //meta
            v-show="$route.meta"
        </pre>
        <h2>轉址(redirect)</h2>
        <p>將/a 轉頁到 /b</p>
        <pre>
            //router
            const router = new VueRouter({
                routes: [
                    { path: '/a', redirect: '/b' }
                ]
            })
        </pre>
        <h2>別名(alias)</h2>
        <p>和轉址差異在於，轉址是 URL 會被替換；而別名像是替路由再取另個名字，但網址列看到的 URL 不會被替換</p>
        <pre>
            const router = new VueRouter({
                routes: [
                    { path: '/a', component: A, alias: '/b' }
                ]
            })
        </pre>
        <h2>history路由模式</h2>
        <ul>
            <li>HTML 5 的 pushState() 和 replaceState() (History API)</li>
            <li>onpopstate 事件監聽</li>
        </ul>
        <pre><code>history.pushState(state [,title][,url]); // 歷史記錄中增加一條記錄<br>history.replaceState(state [,title][,url]); // 修改目前的歷史紀錄</code></pre>
        <h2>hash路由模式</h2>
        <ul>
            <li>URL 中的 # 符號，例如: https://www.example.com/#yoyoyo</li>
            <li>改變 # 後面的值，不會向 Server 發送請求，也不會刷新頁面</li>
            <li>觸發 hashchange 事件</li>
        </ul>
        <h2>Navigation Guards</h2>
        <p>beforeRouteLeave 離開路由(元件)</p>
        <p>beforeEach 進入新的路由前(全域)</p>
        <pre>
            //router.js (全域)
            router.beforeEach((to, from, next) => {
                if(token){
                    有登入
                }else{
                    沒有登入
                }
            })
        </pre>
        <p>beforeEnter 進入新的路由前</p>
        <pre>
            //router.js
            {
                path: '/routerName',
                name: 'routerName',
                component: () => import ('@/views/routerName'),
                beforeEnter(to, from, next) {
                    //必須由from頁進來
                    if (from.path == '/routerName') {
                        next();
                    } else {
                        next(from.path);
                    }
                }
            },
        </pre>
        <p>beforeRouteEnter 路由尚未進入元件時</p>
        <pre>
            //template
        </pre>
        <p>beforeResolve 路由和搭配元件已被解析</p>
        <p>afterEach 路由跳轉完</p>
        <p>beforeCreate 元件建立前</p>
        <p>created 元件已建立</p>
        <p>beforeMount 掛載前</p>
        <p>mounted 掛載完成</p>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10279602">路由搜查隊</a>
        <a href="https://ithelp.ithome.com.tw/articles/10278056"> Vue Router</a>
        <a href="https://www.youtube.com/watch?v=QENGUJK9ecc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=8"> 路由传递参数</a>
    </div>
</template>

<script>
    export default {
        beforeRouteEnter(to, from, next) {
            // console.log(12)
            next((vm) => {
                if (to.query.search) {
                    vm.searchText = to.query.search;
                }
            });
        },
        data() {
            return {
                searchText: '',
                urlText: ''
            };
        },
        components: {},
        computed: {},
        methods: {

            //對象形式
            pushFn_object() {
                //search/key/?k=b
                this.$router.push({
                    name: 'search',
                    params: {
                        key: 'key'
                    },
                    query: {
                        k: 'b'
                    }
                })
            },
            //字串形式
            pushFn() {
                this.$router.push('/search/kk?v=a')
                    // this.$router.push(`/search/kk?v=${this.key}`)
            },
            buttonFn() {
                console.log(this.$route.name)
                    //url?search=customText
                    // $router.replace 不會向 history 留下紀錄
                    // $router.push，返回上一頁
                this.$router.replace({
                    name: this.$route.name,
                    query: {
                        search: '566'
                    },
                });
            },
        }
    }
</script>