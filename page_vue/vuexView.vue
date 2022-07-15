<template>
    <div>
        <h2>Vuex</h2>
        <img src="https://vuex.vuejs.org/vuex.png" alt="">
        <p>主要以四個核心概念——State、Getters、Mutations、Actions——所組成， Modules 可再進行模組化</p>
        <pre>
            //store
            import { createStore } from 'vuex'
            export default createStore({
                state: {
                    bookList:''
                },
                mutations: {
                    //mutation 將資料直送並賦值給 state
                    bookList(state, books) {
                        // console.log(books)
                        state.bookList = books;
                    },
                },
                actions: {
                    //action 發送 API 後將資料以 commit 呼叫 mutation
                    async fetchBookList (context) {
                        const books = await GET();
                        context.commit('bookList', 'books') 
                    }
                },
                getters: {
                    //透過 getters 取得 state 資料
                    //網路不給力[] 先給空數據才不會undefined
                    bookList: (state) => state.bookList || [],
                },
                modules: {
                }
            })

            //在元件內的 computed 
            export default {
                mounted(){
                    //dispatch 呼叫 action
                    this.$store.dispatch("fetchBookList");
                },
                computed: {
                    books() {
                        //用 getters 取得 state 資料
                        return this.$store.getters["bookList"];
                    },
                },
            }
        </pre>
        <p>{{count}}</p>
        <button @click='count_add'>add</button>
        
        <h2>路由 beforeEnter 發送 API</h2>
        <p>將導覽項目路由規劃成巢狀結構，直接在父層路由發送 API。</p>
        <pre>
            {
                path: "/urlName",
                component: urlName,
                beforeEnter: async (to, from, next) => {
                    //dispatch 呼叫 action
                    await store.dispatch("fetchBookList");
                    next();
                },
            },
        </pre>

        
        <h2>state</h2>
        <pre>
            //className 分類別名
            //stateName state名
            //script 引入
            import {mapState} from "vuex";

            //1.
            bindName() {
                return this.$store.state.className.stateName;
            },//computed
            <tageName :items="stateName"></tageName>        //template 使用data

            //2.
            ...mapState({
                bindName: state => state.className.stateName,
            }),//computed

            //3.
            ...mapState('className',{
                bindName: state => state.stateName,
            }),//computed

            //4.
            ...mapState('className',["stateName"]),//computed
        </pre>

        <h2>Mutaitions</h2>
        <p>commit 呼叫 mutation 的方法。</p>
        <pre>
             //script 引入
            import {mapMutations} from 'vuex'

            //className       類名
            //mutationsName   mutations名
            //fnctionName     fnction名

            //1.
            ...mapMutations('className',{fnctionName:'mutationsName'});//methods
            this.fnctionName(this.yourValue);//templates 使用

            //2.
            ...mapMutations('className',['mutationsName']);//methods
            this.mutationsName(this.yourValue);//templates 使用

            //3.
            this.$store.commit('className/mutationsName');//methods
        </pre>

        <h2>Actions</h2>
        <p>dispatch 呼叫 action 的方法</p>
        <p>這邊可以做非同步處理，例如 AJAX</p>
        <pre>
            //1.
            this.$store.dispatch('className/actionsName')   //mounted 執行非同步
            ...mapState('className', ['stateName'])         //computed 取得data
            <tageName :items="stateName"></tageName>        //template 使用

            //2.
            ...mapActions([
                "increment", // 將 `this.increment()` 映射為 `this.$store.dispatch('increment')`

                // `mapActions` 也支持载荷：
                "incrementBy" // 將 `this.incrementBy(amount)` 映射為 `this.$store.dispatch('incrementBy', amount)`
            ]),//methods

            //3.
            ...mapActions({
                add: "increment" // 將 `this.add()` 映射為 `this.$store.dispatch('increment')`
            })//methods
        </pre>
        <p>組合 actions</p>
        <pre>
            //Promise
            actions: {
                actionA ({ commit }) {
                    return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('someMutation')
                        resolve()
                    }, 1000)
                    })
                }
            }

            //then
            actions: {
                // ...
                actionB ({ dispatch, commit }) {
                    return dispatch('actionA').then(() => {
                        commit('someOtherMutation')
                    })
                }
            }

            //async
            actions: {
                async actionA ({ commit }) {
                    commit('gotData', await getData())
                },
                async actionB ({ dispatch, commit }) {
                    await dispatch('actionA') // 等待 actionA 完成
                    commit('gotOtherData', await getOtherData())
                }
            }
        </pre>

        <h2>getters</h2>
        <p>getters對state優化取值</p>
        <pre>
            //script 引入
            import {mapGetters} from "vuex";

            //無className寫法
            //1.
            getterName() {
                return this.$store.getters["getterName"];
            },//computed
            //2.
            ...mapGetters(['getterName']),//computed


            //有className寫法
            //1.
            getterName() {
                return this.$store.getters["className/getterName"];
            },//computed
            //2.
            ...mapGetters('className',{
                bindName: 'getterName',
            }),//computed
            //3.
            ...mapGetters('className',['getterName','getterName2'])
        </pre>
        <p>getters裡的stateName要有預設不然filter會報錯</p>
        <pre>
            //store
            const state = {
                stateName: []
            }
            const getters = {
                //1.
                getterName(state) {
                    return state.stateName.filter((item, index, array) => index > 3)
                },

                //2.
                getterName(state) {
                    return state.homeProductList.filter(function(item, index, array){
                        return index > 3
                    })
                },
            }

            //script
            computed: {
                ...mapGetters('className',['getterName'])
            }
        </pre>
        <p>{{books}}</p>


        <h2>areas()取不到mapState.districts</h2>
        <pre>
            computed: {
                ...mapState('register', ["districts"]),
                areas() {
                    if (Object.keys(this.districts).length === 0) {
                        return [];
                    } else {
                        return this.districts;
                    }

                },
            },
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=0rr2EtM44bA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=18"> vuex模块式开发</a>
        <a href="https://medium.com/itsems-frontend/vue-vuex4-modules-ddb3eec6b834"> Vuex 是什麼</a>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from "vuex";
    export default {
        mounted() {
            this.$store.dispatch("fetchBookList");
        },
        computed: {
            books() {
                console.log('books')
                    //大倉
                return this.$store.getters["bookList"];
            },

            //取得小倉home
            // count() {
            //     return this.$store.state.test.count;
            // },
            // ...mapState({
            //     count: state => state.test.count,
            // }),
            // ...mapState('test',{
            //     count: state => state.count,
            // }),
            ...mapState('test', ["count"]),

            //
            ...mapGetters(['bookList'])
        },
        methods: {
            count_add() {
                //呼叫 home active
                this.$store.dispatch("test/count_add");
            },
        }
    }
</script>