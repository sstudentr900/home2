<template>
    <div>
        <h2>生命週期</h2>
        
        <ol>
            <li>
                created：實例已創建，完成初始化資料
                <ul>
                    <li>已配置選項 data 、computed、methods、watch</li>
                    <li>HTML 尚未被渲染，尚未生成 DOM，因此若直接操作 DOM 節點會找不到元素</li>
                </ul>
            </li>
            <br>
            <li>
                mounted：實例已掛載，完成編譯 template 內容
                <ul>
                    <li>HTML 已渲染至頁面上，此時可找到 DOM 節點並加以操作</li>
                </ul>
            </li>
            <br>
            <li>
                Updates 資料被更新
            </li>
            <br>
            <li>
                Destruction 元件摧毀
            </li>
        </ol>
        <h2>Composition API</h2>
        <pre>
            import { onMounted } from 'vue'
        </pre>
        <br>
        <h2>nextTick </h2>
        <p>
            messages: {{ messages }}
        </p>
        <p>
            scrollHeight: {{ scrollHeight }} <br>
            DOM 實際的 scrollHeight: {{ realScrollHeight }}
        </p>
        <div class="messages">
            <div v-for="m in messages">{{ m }}</div>
        </div>
        <input type="text" placeholder="輸入任意文字後按下 enter 鍵" v-model.trim="msg" @keydown.enter="addToMessages">
        <br>
        <br>
        <br>
        <a href="https://book.vue.tw/CH1/1-7-lifecycle.html">生命週期</a>
    </div>
</template>

<script>
    //Composition API
    import {
        onMounted
    } from 'vue'
    //import {
    //  onBeforeMount,
    //  onMounted,
    //  onBeforeUpdate,
    //  onUpdated,
    //  onBeforeUnmount,
    //  onUnmounted,
    //  onActivated,
    //  onDeactivated,
    //  onErrorCaptured
    //} from "vue";

    export default {
        setup() {
            // Composition API 寫在setup()中
            // onMounted(() => {
            //     console.log('mounted in the composition api!')
            // })
            console.log('setup:Vue 實體被建立，狀態與事件都尚未初始化')
        },
        beforeCreate() {
            console.log('beforeCreate :此時我們還無法取得 data 、 prop 、 computed 等屬性')
        },
        created() {
            console.log('created:')
        },
        onMounted() {
            console.log('onMounted')
        },
        beforeMount() {
            console.log('beforeMount:Vue 實體尚未與模板 (DOM 節點) 綁定')
        },
        mounted() {
            console.log('mounted:Vue 實體尚未與模板 (DOM 節點) 綁定')
        },
        updated() {
            console.log('updated')
        },
        data: () => {
            return {
                msg: '',
                scrollHeight: 0,
                realScrollHeight: 0,
                messages: ['Hello', 'Vue.js', '好棒棒']
            }
        },
        methods: {
            addToMessages() {
                this.messages.push(this.msg);
                this.msg = '';

                this.$nextTick(() => {
                    const el = document.querySelector('.messages');
                    el.scrollTop = el.scrollHeight;
                    this.realScrollHeight = el.scrollHeight;
                    this.scrollHeight = el.scrollHeight;
                });
            }
        }
    }
</script>
<style>
    .messages {
        padding: 6px 10px;
        width: 92%;
        height: 4.5rem;
        margin-bottom: 1rem;
        overflow-y: scroll;
        border: 1px solid #ccc;
    }
</style>