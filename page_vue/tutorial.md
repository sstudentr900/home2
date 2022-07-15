## 綁定Style

```js
    const vm = Vue.createApp({
        data() {
            return {
                text: 'Hello Vue!!',
                style: {
                    color: "#0095C0",
                    background: "#000",
                }
            }
        }
    }).mount('#app');
```
```html
    <div id="app">
        <div :style="style">{{ text }}</div>
    </div>
```
用陣列格式
```js
    const vm = Vue.createApp({
        data() {
            return {
                text: 'Hello Vue!!',
            red: {
                    color:"#0095C0",
                },
                blackbBg: {
                    background: "#000",
                }
            }
        }
    }).mount('#app');
```
```html
    <div id="app">
        <div :style="[red,black]">{{ text }}</div>
    </div>
```


## 綁定Class
```js
    const vm = Vue.createApp({
        data() {
            return {
                text: 'Hello Vue!!',
                isAcrive: true,
            }
        }
    }).mount('#app');
```
```html
    <div id="app">
        <div class="bgblue" :class="{active: isAcrive}">{{ text }}</div>
    </div>
```
使用三元運算子做更多變化：
```html
    <div id="app">
         <div class="active" :class="[ isAcrive? 'bgblue' : 'bgred' ]" @click="isAcrive = !isAcrive">{{ text }}</div>
    </div>
```


## input 文字框
```html
<div id="app">
    <input type="text" v-model="message" placeholder="input text">
    {{ message }}
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            message:'Hello Vue3',
        }
    }
});

vm.mount("#app");
```


## textarea 文字方塊
```html
<div id="app">
    <h2>{{ message }}</h2>
    <textarea v-model="message"></textarea>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            message:'hello Vue!',
        }
    }
}).mount('#app');
```


## checked 選擇框
```html
<div id="demo">
    <input type="checkbox" id="one" value="one" v-model="checked">
    <label for="one">one</label>
    <input type="checkbox" id="two" value="two" v-model="checked">
    <label for="two">two</label>
    <input type="checkbox" id="three" value="three" v-model="checked">
    <label for="three">three</label>
    <br>
    <h3>checked data:{{ checked }}</h3>
</div>
```
```js
const vm = Vue.createApp({
  data() {
    return {
       checked: [],
    }
  }
}).mount('#app');
```

## checked 單選
```html
<div id="demo">
    <input type="checkbox" id="one" value="one" v-model="checked">
    <label for="one">Click Me!</label>
    <br>
    <h3>checked data:{{ checked }}</h3>
</div>
```
```js
const vm = Vue.createApp({
  data() {
    return {
      checked: false,
    }
  }
}).mount('#demo');
```

## radio 單選框
```html
<div id="demo">
    <input type="radio" id="one" value="1" v-model="checked">
    <label for="one">one</label>
    <input type="radio" id="two" value="2" v-model="checked">
    <label for="two">two</label>
    <input type="radio" id="three" value="3" v-model="checked">
    <label for="three">three</label>
    <br>
    <h3>checked data:{{ checked }}</h3>
</div>
```
```js
const vm = Vue.createApp({
  data() {
    return {
      checked: 1,
    }
  }
}).mount('#demo');
```

## select 下拉式選單
```html
<div id="demo">
    <select v-model="selected">
        <option disabled value="">請選擇</option>
        <option>北部</option>
        <option>中部</option>
        <option>南部</option>
    </select>
    <br>
    <h3>selected:{{ selected }}</h3>
</div>
```
```js
const vm = Vue.createApp({
  data() {
    return {
      selected: '',
    }
  }
});
vm.mount('#demo');
```


## v-on
```html
<div id="app">
    <h3>{{ count }}</h3>
    <button @click="count++">Click</button>
</div>
```
```js
const vm = Vue.createApp({
  data() {
    return {
        count: 0,
    }
  }
});
vm.mount("#app");
```
methods
```html
<div id="app">
    <h3>{{ count }}</h3>
    <button @click="add">Click</button>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
});
vm.mount("#app");
```

## v-on 帶參數
```html
<div id="app">
    <h3>{{ count }}</h3>
    <button @click="add(100,$event)">Click</button>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        add(num,e) {
            this.count += num;
            console.log(num);
            console.log(this.count,e);
        }
    }
});
vm.mount("#app");
```


## v-if v-show
```html
<div id="app">
    <input type="checkbox" v-model="isShow">
    <div v-if="isShow">
        <p>v-if</p>
    </div>
    <div v-show="isShow">
        <p>v-show</p>
    </div>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            isShow: true,
        }
    }
}).mount('#app')
```


## v-else
```html
    <div id="app">
        <input type="checkbox" v-model="isShow">
        <div  v-if="isShow">A</div>
        <div  v-else>B</div>
    </div>
```
```js
    const vm = Vue.createApp({
        data() {
            return {
                isShow: true,
            }
        }
    }).mount('#app')
```

## v-else-if
```html
<div id="app">
    <input type="text" v-model="total">
    <div v-if="total === 0">0~5</div>
    <div v-else-if="total > 5 && total < 10">5~9</div>
    <div v-else="total > 10">10</div>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            total: 0,
        }
    }
}).mount('#app')
```


## v-for
迭代物件中的元素，第二個參數key是鍵值，第三個參數index是索引值。
```html
<div id="app">
    <ul>
        <li v-for="(items, key, index) in item">
            {{ items }}:{{ key }}:{{ index }}
        </li>
    </ul>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
             item: {
                one: 1,
                two: 2,
                three: 3,
            }
        }
    }
}).mount('#app')
```
遍歷陣列資料：
```html
<div id="app">
    <ul>
        <li v-for="(item, index) in arr"> 
        {{ item.name }} - {{ index }} - {{ item.id }}
        </li>
    </ul>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            arr: [
                { name: "one" ,id: "1"}, 
                { name: "two" ,id: "2"}, 
                { name: "three" ,id: "3"}
            ]
        }
    }
}).mount('#app')
```

## v-for 篩選
```html
<div id="app">
    <ul>
        <li v-for="item in filterNum">{{ item }}</li>
    </ul>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
            num: [1,2,3,4,5,6,7,8]
        }
    },
    computed: {
        filterNum() {
            return this.num.filter((itemNum)=>
                itemNum % 2 === 0
            );
        }
    }
}).mount('#app');
```


## v-for一定要加:key
```html
<div id="app">
    <ul>
        <li v-for="(item, index) in products" :key="item.price">{{ index }} - {{ item.name }} - {{ item.price}}
        <input type="text">
        </li>
    </ul>
    <button type="button" @click="reverseArray">反轉</button>
</div>
```
```js
const vm = Vue.createApp({
    data() {
        return {
        products: [
            {
            name: '上衣',
            price: 500
            },
            {
            name: '褲子',
            price: 1000
            },
            {
            name: '鞋子',
            price: 2000
            },
                    {
            name: '帽子',
            price: 2000
            },
        ]
        }
    },
    methods: {
        reverseArray() {
        this.products.reverse();
        }
    }
}).mount('#app');
```


## methods
```html
<div id='app'>
    <h3>事件觸發：</h3>
    <button @click="clickEvent('isClickEvent')">點擊事件</button>
    <h3>函式觸發：</h3>
    <button @click="callClick">其他函式觸發</button>
</div>
```
```js
const App = {
    data() {
        return {
        }
    },
    methods: {
        clickEvent(name){
        console.log(name,'點擊觸發')
        },
        callClick(){
        this.clickEvent('callClick');
        }
    }
};
Vue.createApp(App).mount('#app')
```

## 使用methods完成簡單購物車
```html
<div id='app'>
    <!--   <h3>事件觸發：</h3>
    <button @click="clickEvent('isClickEvent')">點擊事件</button>
    <h3>函式觸發：</h3>
    <button @click="callClick">其他函式觸發</button> -->
    <h3>商品列表</h3>
    <ul>
        <li v-for="item in products" :key="item.name">
        {{ item.name }} - {{ item.price }}
        <button @click="addCart(item)">加入購物車</button>
        </li>
    </ul>
    <br>
    <h3>購物車列表</h3>
    <ul>
        <li v-for="product in carts" :key="product.name">
            {{ product.name }}
        </li>
    </ul>
    <h3>總金額：</h3>
    {{ sum }}
</div>
```
```js
const App = {
  data() {
    return {
        products: [
                {
                    name: '上衣',
                    price: 300,            
                },
                {
                    name: '褲子',
                    price: 500,            
                },
                {
                    name: '鞋子',
                    price: 1500,           
                },
                {
                    name: '帽子',
                    price: 600,
                },
                ],
        carts: [],
        sum: 0,
    }
  },
  methods: {
    //methods底下的函式，建議都不要用箭頭函式  
    test:(add) => {
      console.log(this) //this變成全域 window
    },
    addCart(add) {
      this.carts.push(add);
      this.total();
    },
    total() {
      let total = 0;
      this.carts.forEach(item => {
        console.log(item.price);
        total += item.price;
      });
      this.sum = total;
    }
  }
};
Vue.createApp(App).mount('#app')
```

## computed
computed的更新條件是原始資料有變更才會更新。
```html
<div id='app'>
    <p>methods: {{ num() }}</p>
    <p>methods: {{ num() }}</p>
    <p>methods: {{ num() }}</p>
    <p>computes: {{ run }}</p>
    <p>computes: {{ run }}</p>
    <p>computes: {{ run }}</p>
</div>
```
```js
const App = {
    data() {
        return {
            count: 0,
            four: 4,
        }
    },
    methods: {
        num() {
        console.log('isMethods');
        return this.four + this.count;
        }
    },
    computed: {
        run() {
        console.log('isComputed');
        return this.four + this.count;
        }
    }
};
Vue.createApp(App).mount('#app')
```

## 搜尋
```html
<div id='app'>
  <input type="search" v-model="search">
  <ul>
    <li v-for="item in filter">
      {{ item.name }}-{{ item.price }}
    </li>
  </ul>
</div>
```
```js
const App = {
    data() {
        return {
            search: '',
            products: [
                {
                name: '上衣',
                price: 500,
                },
                {
                name: '褲子',
                price: 700,
                },
                {
                name: '鞋子',
                price: 2000,
                },
                {
                name: '襪子',
                price: 450,
                },
            ],
        }
    },
    computed: {
        filter() {
            console.log('isComputed');
            return this.products.filter(item=>
                item.name.match(this.search)
            )
        }
    }
};
Vue.createApp(App).mount('#app')
```


## getter與setter
* getter：將data資料取出到computed運算完之後渲染到畫面。
* setter：把資料(以下範例使用methods)運算完，傳回data。
```html
    <div id="app">
        <ul>
            <li v-for="product in products">
                {{ product.name }} / {{ product.price }}
                <button type="button" @click="addToCart(product)">+</button>
            </li>
        </ul>
        <h3>total 的值：{{ total }}</h3>
        <h3>Computed Getter, Setter</h3>
        computed sum 的值:
        <input type="number" v-model.number="num">
        <button type="button" @click="total = num">更新</button><br> total 的值：{{ total }}<br> computed sum 的值:：{{ sum }}
    </div>
```
```js
const App = {
    data() {
        return {
            products: [{
                name: '上衣',
                price: 500,
            }, {
                name: '褲子',
                price: 700,
            }, {
                name: '鞋子',
                price: 2000,
            }, {
                name: '襪子',
                price: 450,
            }, ],
            carts: [],
            sum: 0,
            num: 20,
        }
    },
    computed: {
        total: {
            get() {
                let total = 0;
                this.carts.forEach(item => {
                    total += item.price;
                });
                return this.sum || total;
            },
            set(val) {
                console.log('val') // num 的20
                this.sum = val; // num 的20,傳回 data 的 sum
            }
        },
    },
    methods: {
        addToCart(product) {
            this.carts.push(product);
        },
    }
};
Vue.createApp(App).mount('#app')
```

## watch監聽器
```html
    <div id="app">
        <h3>watch 監聽單一變數</h3>
        <label for="name">監聽變數：</label>
        <input type="text" id="name" v-model="tempName">
        <P>大於五個字: {{ big }}</P>
        <p>小於五個字: {{ small }}</p>
    </div>
```
```js
    const App = {
        data() {
            return {
                small: "",
                tempName: "",
            };
        },
        watch: {
            tempName(a, b) {
                console.log(a, b);
                if (a.length > 5) {
                    this.big = `文字超過${b.length}個字`;
                } else {
                    this.small = `文字未超過${a.length}個字`;
                }
            },
        }
    };
    Vue.createApp(App).mount("#app");
```


## watch與computed不同的地方
* watch監聽單一變數
* computed監聽多個變數事件,產生一個值
```html
 <div id="app">
    <label for="store">店家名稱</label>
    <input type="text" v-model="store">
    <br>
    <label for="productName">商品名稱</label>
    <input type="text" v-model="productName">
    <br>
    <label for="productPrice">商品價格</label>
    <input type="number" v-model.number="productPrice">
    <p>computed: {{ comVale }}</p>
    <p>watch: {{ watchValue }}</p>
</div>
```
```js
const App = {
    data() {
        return {
            watchValue: "",
            // 單一產品
            store: "高雄",
            productName: "褲子",
            productPrice: 500,
        };
    },
    computed: {
        comVale() {
            return `${this.store},${this.productName},${this.productPrice}`
        }
    },
    watch: {
        store() {
            this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
        productName() {
            this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
        productPrice() {
            this.watchValue = `${this.store},${this.productName},${this.productPrice}`
        },
    }
};
Vue.createApp(App).mount("#app");
```


## 使用watch監聽多個變數
* data就要改為物件
* watch裡面改為handler
* deep也要改為true
```html
<div id="app">
    <label for="store">店家名稱：</label>
    <input type="text" v-model="product.store"><br>
    <label for="productName">商品名稱：</label>
    <input type="text" v-model="product.name"><br>
    <label for="productPrice">商品價格：</label>
    <input type="number" v-model.number="product.price">
    <p>value: {{ value }}</p>
</div>
```
```js
const App = {
  data() {
    return {
      product: {
        store:"高雄",
        name: "褲子",
        price: 500,
      },
    };
  },
  watch: { 
    product: {
      handler(n, o) {
        console.log(n, o);
        this.value = `${this.product.store},${this.product.name},${this.product.price}`
      },
      deep: true,
    }
  }
};
Vue.createApp(App).mount("#app");
```


## 生命週期介紹
![Imgur](https://i.imgur.com/hFcI2tF.png)
#### 實體建立階段
* beforeCreate:Vue實體建立，狀態事件還沒初始化。
* created:資料建立完成。
* beforeMount:HTML結構準備與DOM節點綁定，尚未掛載。
* mounted:已經將DOM元素掛載到畫面上。

#### 實體更新階段
* beforeUpdate:當資料有更動，畫面更新前。
* Update:當資料有更動，畫面更新完成。

#### 銷毀階段
* beforeUnmount:Vue實體被銷毀前。
* unmounted:Vue實體被銷毀完成。
```html
<div id="app">
    <button @click="isShowing = !isShowing">
        <span v-if="isShowing">隱藏元件</span>
        <span v-else>顯示元件</span>
    </button>
    <hr>
    <lifecycle v-if="isShowing"></lifecycle>   
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
        isShowing: false
        }
    }
});
app.component('lifecycle', {
  template: `<div>
    <h4>{{ state }}</h4>
    <input type="text" class="form-control" v-model="state">
  </div>`,
  data() {
    return {
      state: 'Vue data 資料狀態'
    }
  },
  beforeCreate() {
    console.log(`beforeCreate! ${this.state}`);
  },
  created() {
    console.log(`created! ${this.state}`);
    alert(`created! ${this.state}`);
  },
  beforeMount() {
    alert(`beforeMount! ${this.state}`);
  },
  mounted() {
    alert(`mounted! ${this.state}`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate! ${this.state}`);
  },
  updated () {
    console.log(`updated! ${this.state}`);
  },
  beforeUnmount() {
    console.log(`beforeUnmount! ${this.state}`);
  },
  unmounted() {
    console.log(`unmounted! ${this.state}`);
  }
});
app.mount('#app');
```


## Vue 元件概念
```html
<div id="app">
    <h4>{{ text }}</h4>
    <con-tainer></con-tainer>  
    <area2></area2>
</div>
```
```js
const area2 = {
  data() {
    return {
      text: "根元件的子元件/區域註冊"
    };
  },
  template: `<div>
    <h4>{{ text }}</h4>
  </div>`  
}
const app = Vue.createApp({
  data() {
    return {
      text: "外部元件"
    };
  },
  components:{
    area2
  }
});
app.component("ConTainer", {
  data() {
    return {
      text: "內部元件/全域註冊"
    };
  },
  template: `<div>
    <h4>{{ text }}</h4>
  </div>`
});
app.mount("#app");
```


## 模組化

## Props值傳入元件
* props單向數據流
```html
<div id="app">
    <h4>{{ text }}</h4>
    <con-tainer :test-props="demo"></con-tainer>   
</div>
```
```js
const app = Vue.createApp({
  data() {
    return {
      text: "外部元件",
      demo: "外部元件傳遞的文字"
    };
  }
});
app.component("ConTainer", {
  props: ["testProps"],
  template: `<div>
    <h4>{{ text }}</h4><h3>{{ testProps }}<h3>
     <h3>value: {{ typeof testProps }} </h3>
    <input type="text" v-model="testProps">
  </div>`
});
app.mount("#app");
```

## props型別驗證
```html
<div id="app">
    <area-component
    :pro-a="fun" :pro-b="text"
    pro-c="num" :pro-d="num">
    </area-component>
</div>
```
```js
const areaComponent = {
    props: {
        proA: Function,
        //多個型別檢查
        proB: [String, Number],
        //必要值 物件形式可以設立多個條件
        proC: {
            type: String,
            required: true
        },
        //預設值
        proD: {
            type: Number,
            default: "hello"
        }
    },
    template: `{{ proA }} <br> {{ proB }} <br> {{ proC }} <br> {{ proD }}`
};
const app = Vue.createApp({
    data() {
        return {
        num: 500,
        text: "小明",
        boo: true,
        fun: () => {
            return "a";
        },
        test: 100
        };
    },
    components: {
        areaComponent
    }
});
app.mount("#app");
```

## emit 傳遞事件
* 定義外層接收的函式 add()
* 定義內層 $emit 觸發的函式
* 透過外層模板 @button-click="add" 來觸發外層函式
```html
<div id="app">
    {{ text }}：
    <button type="button" @click="add()">add</button>
    <button type="button" @click="dec()">dec</button>
    {{ num }}
    <br>
    <br>
    <out-text @button-click="add"></out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "外部元件",
            num: 0,
        }
    },
    methods: {
        add() {
            this.num++;
        },
        dec() {
            this.num--;
        }
    }
});
app.component("outText",{
    template: `<button @click="click">emit add</button>`,
    data() {
        return {
            text: "內部元件"
        };
    },
    methods: {
        click() {
            this.$emit('buttonClick');
        }
    }
});
app.mount("#app");
```

## emit 傳遞參數
* 將內層資料傳遞到外層元件上使用：
![Imgur](https://i.imgur.com/BVjQ2Ok.png)
```html
<div id="app">
    <h3> {{ title }} </h3>
    {{ text }}：
    <button type="button" @click="add">add</button>
    {{ num }}
    <br>
    <br>
    <out-text @button-click="add"></out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            title: "",
            text: "外部元件",
            num: 0,
        }
    },
    methods: {
        add(addtext) {
            this.num++;
            this.title = addtext;
            //addtext 沒有值傳起來就會變成 事件物件 [object PointerEvent]
        }
    }
});
app.component("outText",{
    template: `<button @click="click">emit add</button>`,
    data() {
        return {
            text: "內部元件",
            insideText: "內部元件傳遞文字"
        };
    },
    methods: {
        click() {
            this.$emit('buttonClick', this.insideText);
        }
    }
});
app.mount("#app");
```

## emits 驗證
```html
<div id="app">
    {{ text }}：{{ num }}
    <br>
    <br>
    <out-text @button-click="add"></out-text>
    <br>
    <out-text2 @button-click="add"></out-text2>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "外部 num",
            num: 0,
        }
    },
    methods: {
        add(num) {
            this.num = this.num + num;
        }
    }
});
app.component("outText",{
    template: `{{ text }}：<button @click="$emit('buttonClick', num)">emit add</button>`,
    data() {
        return {
            text: "內部元件",
            num: 3,
        };
    },
    //因為無法正確追蹤你帶入的變數內層的num，就會跳出這個警告提示，這時只要加上emits:['buttonClick']就能消除警告。
    emits: ['buttonClick']
});
  app.component("outText2",{
    template: `{{ text }}：<button @click="$emit('buttonClick', '1')">test</button>`,
    data() {
        return {
            text: "emits",
            num: 3,
        };
    },
    //驗證事件參數傳出去的值，是否符合預期的型別
    emits: {
        buttonClick: (num) => {
            if (typeof num !== 'string') {
                console.warn('buttonClick 事件參數型別須為 String')
            }
            return typeof num === 'string'
        }
    }
});
app.mount("#app");
```

## Slot
```html
<div id="app">
    <h3> {{ text }} </h3>
    <out-text>
        <p>打洞成功</p>
    </out-text>
    <out-text>
    </out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "外層元件",
            product: {
                name: "名刀不知火",
                price: 200000,
            }
        }
    }
});
app.component("outText",{
    template: `
    <div class="box">
        <h3> {{ text }} </h3>
        <div class="header">header</div>
        <div class="main">
            <slot> 預設值！</slot>
        </div>
        <div class="footer">footer</div>
    </div>
    `,
    data() {
        return {
            text: "內部元件",
            num: 3,
        };
    }
});
app.mount("#app");
```

## v-slot
* v-slot:header 同 #header
```html
<div id="app">
    <h3> {{ product.name }} </h3>
    <out-text>
        <template #header>波利卡片</template>
        <template v-slot:main>瘋兔卡片</template>
        <template v-slot:default></template>
        <template v-slot:footer>禿鷹卡片</template>
    </out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "外層元件",
            product: {
                name: "名刀不知火",
                price: 200000,
            }
        }
    }
});
app.component("outText",{
    template: `
    <div class="box">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <slot name="main"></slot>
            <div>
                <slot>未插卡！</slot>
            </div>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
    `,
    data() {
        return {
            text: "內部元件",
            num: 3,
        };
    }
});
app.mount("#app");
```

## slot作用域
slot 的內容都是由外層元件提供
```html
<div id="app">
  <h3> {{ product.name }} </h3>
  <out-text>
    <!-- 會無法顯示 -->
    <p> {{ product.name }} </p>
  </out-text>
</div>
```
```js
const app = Vue.createApp({
  data() {
    return {
      text: "外層元件",
      product: {
        name: "名刀不知火",
        price: 200000,
      }
    }
  }
});
app.component("outText",{
  template: `
  <div class="box">
  </div>
  `,
  data() {
    return {
      text: "內部元件",
      product: {
        name: "+9 獵人之弓",
        price: 100000,
      }
    };
  }
});
app.mount("#app");
```

## Slot(Props)內層傳遞給外層元件
* 內層元件定義好要傳出去的資料slot:ro="product"，:ro為自定義名稱，product為內層元件的data。
* 外層元件模板v-slot:default="roprops"接收資料，v-slot:default固定寫法，roprops為自定義名稱。
```html
<div id="app">
    <out-text>
        <template v-slot:default="roprops">
            內層元件插槽：
            {{ roprops.ro.name }}
        </template>
    </out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "外層元件",
        }
    }
});
app.component("outText",{
    template: `
        <div class="header">
            <slot :ro="product"></slot>
        </div>
    `,
    data() {
        return {
            text: "內部元件",
            product: {
                name: "名刀不知火",
                price: 200000,
                city: "普隆德拉"
            }
        };
    }
});
app.mount("#app");
```


## Slot(Props)內層傳遞給外層元件
* 先把外層元件props到子元件使用，out-text :product="product"，props: ['product']。
* 執行mounted()。
* 內層定義傳出去的資料slot :ro="product" :buy="buy"(資料是外部元件data，經由內部元件props提供)。
* 外層模板改為物件方式接收v-slot:default="{ ro, buy }"。
```html
<div id="app">
    <out-text :product="product">
        <template v-slot:default="{ ro, buy }">
            component props：{{ ro.name }} <br>
            slot props：{{ buy }}
        </template>
    </out-text>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
        text: "外層元件",
        product: {
            name: "名刀不知火",
            price: 200000,
            city: "普隆德拉",
            amount: 5,
        }
        }
    }
});
app.component("outText",{
    props: ['product'],
    template: `
        <div class="header">
            <slot :ro="product" :buy="buy"></slot>
        </div>
    `,
    data() {
        return {
            text: "內部元件",
            buy: ""
        };
    },
    created() {
        if(this.product.amount > 1 ){
            this.buy = "可購買";
        }else {
            this.buy = "無法購買";
        };
    }
});
app.mount("#app");
```

## mitt 兩個子元件，彼此需要傳遞
npm安裝：
```
npm install --save mitt
```

cdn引入：
```
<script src="https://unpkg.com/mitt/dist/mitt.umd.js"></script>
```

* 定義要傳出去的資料，emitter.emit('componentText', this.componentText);，傳遞component1裡data的componentText的值。
* 定義接收emitter.on，(data)裡就是emitter.emit傳出來的值。
```html
<div id="app">
    <h4>{{ text }}</h4>
    <con-tainer></con-tainer>
    <con-tainer2></con-tainer2>
</div>
```
```js
const emitter = mitt();
const app = Vue.createApp({
    data() {
        return {
            text: "外部元件"
        };
    }
});
app.component("ConTainer", {
    data() {
        return {
            text: "component1",
            componentText: "由元件1傳入的文字",
        };
    },
    methods: {
        click() {
            emitter.emit('componentText', this.componentText);
        }
    },
    template: `<div>
        <h4>{{ text }}</h4>
        <button @click="click">Click me!</button>
    </div>`
});
app.component("ConTainer2", {
    data() {
        return {
        text: "component2",
        componentText: ""
        };
    },
    created() {
        emitter.on('componentText', (data) => {
            this.componentText = data;
        })
    },
    template: `<div>
        <h4>{{ text }}</h4>
        <h4>{{ componentText }}</h4>
    </div>`
});
app.mount('#app');
```

## 分頁功能 v-if
```html
<div id="app">
    <button v-for="item in tab" :key="item" @click="click(item)">
        {{ item }}
    </button>
    <tab-one v-if="title === 'One'"></tab-one>
    <tab-two v-if="title === 'Two'"></tab-two>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            title: 'One',
            tab: ['One', 'Two']
        }
    },
    methods: {
        click(e){
            this.title = e;
        }
    },
});
app.component('tab-one',{
    template: `<div>one-component</div>`
});
app.component('tab-two',{
    template: `<div>two-component</div>`
});

app.mount('#app');
```

## 分頁功能 v-bind:is
```html
<div id="app">
    <button v-for="item in tabs" :key="item" @click="titleTab = item">
        {{ item }}
    </button>
    <!-- titleTab的值有變化，元件跟著切換 -->
    <component :is="tabComponent">
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            titleTab: 'One',
            tabs: ['One','Two','Three','Four','Five','six'],
        };
    },
    computed: {
        tabComponent() {
            // 轉成小寫並回傳 ，符合相對應的component名稱，就會顯示。
            return `tab-${ this.titleTab.toLowerCase() }`
        }
    }
});
app.component("tab-one", {
    template: `<div class="tab">One component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第一個子元件"
        }
    }
});
app.component("tab-two", {
    template: `<div class="tab">Tow component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第二個子元件"
        }
    }
});
app.component("tab-three", {
    template: `<div class="tab">three component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第三個子元件"
        }
    }
});
app.component("tab-four", {
    template: `<div class="tab">four component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第四個子元件"
        }
    }
});
app.component("tab-five", {
    template: `<div class="tab">five component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第五個子元件"
        }
    }
});
app.component("tab-six", {
    template: `<div class="tab">six component</div>
    <input type="text" v-model="text">`,
    data() {
        return {
            text: "第六個子元件"
        }
    }
});
app.mount("#app");
```

## provide/inject 傳值(隔山打牛)
* provide傳遞的資料
* inject接收的子元件
```html
<div id="app">
    <h2>app</h2>
     <input type="text" v-model="text">
    <list-header></list-header>
</div>
```
```js
const app = Vue.createApp({
    data() {
        return {
            text: "隔山打牛"
        };
    },
    provide() {
        return {
            provideText: this.text,
            //provide輸出的資料並不會隨著父層資料更新而改變，要透過Vue.computed()
            provideText2: Vue.computed(() => this.text)
        };
    }
});
app.component("list-header", {
    template: `
        <div v-for="i in 3">
            list-header:
            <list-main></list-main>
        </div>`,
    components: {
        "list-main": {
            template: `
            <div>
                list-main:
                <list-footer></list-footer>
            </div>`,
            components: {
                "list-footer": {
                    inject: ["provideText","provideText2"],
                    template: `
                    <div>list-footer: {{ provideText }} </div>
                    <div>list-footer-computed: {{ provideText2.value }}</div>
                    `
                }
            }
        }
    }
});

app.mount("#app");
```

## Vue CLI
1. 以Webpack為底層，幫開發者建置好開發環境。
1. 可以用多種第三方套件。
1. 可運行Sass、Bebal...等編輯工具。
1. 獨立的.Vue檔案，包含template、script、style

---
[Vue.js 從零開始](https://ithelp.ithome.com.tw/articles/10280361)<br>