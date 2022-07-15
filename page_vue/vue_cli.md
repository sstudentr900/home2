## Store
```js
//Store index.js
export default new Vuex.Store({
    state: {
        bookList: {},
    },
    //mutation 將資料直送並賦值給 state
    mutations: {
        bookList(state, books) {
            state.bookList = books;
        },
    },
    //action 發送 API 後將資料以 commit 呼叫 mutation
    actions: {
        async fetchBookList(context) {
            //get Date
            const books = await GET();
            //將資料以 commit 呼叫 mutation
            context.commit("bookList", books);
        },
    },
    //getters 取得 state 資料
    getters: {
        allBooks: (state) => state.bookList.list,
    },
})
```
## 在元件內的 computed取用 getters 的資料
```js
computed: {
    books() {
        return this.$store.getters["allBooks"];
    },
},
```


## 在router beforeEnter取用的資料
```.js
{
    path: "/book",
    component: MainPage,
    //beforeEnter 進入每個路由之前
    beforeEnter: async (to, from, next) => {
        //執行 Store actions
        await store.dispatch("fetchBookList");
        next();
    },
},
```


---
[Vuex、Route](https://ithelp.ithome.com.tw/articles/10278272)<br>