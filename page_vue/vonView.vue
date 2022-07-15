<template>
    <div>
        <h2>「@」v-on：監聽事件</h2>
        <h4>事件修飾符</h4>
        <p>capture 以捕獲形式觸發事件</p>
        <p>stop  => stopPropagation 停止觸發上層 DOM 元素事件。</p>
        <p>prevent => preventDefault 阻擋預設行為</p>
        <p>self  => 只有觸發此 DOM 元素本身才會觸發 self 事件。</p>
        <p>once  => 此事件只觸發一次。</p>
        <p>passive => 無視 prevent 功能。</p>
        <p>capture  => 會優先觸發。</p>

        <h4>指定事件只觸發一次(@click.once)</h4>
        <span>{{ clicks }}</span><br><br>
        <button type="button" @click="clicks += 1">Click it!</button><br><br>
        <button type="button" @click.once="clicks += 1">Click it!(只會被觸發一次)</button>

        <h4>prevent 阻擋預設行為 event.preventDefault()</h4>
        <pre>
            form v-on:submit.prevent="onSubmit"
        </pre>

        <hr>


        <h2>@input事件是实时监控的，每次输入都会调用</h2>
        <p>@keyup.enter需要点击回车键触发</p>
        <p>@change</p>
        <p>@blur</p>
        <hr>
        <p> 一般在元件內的input使用v-model</p>
        <input type="text" v-model="inputText" />
        <p>@input監聽表單元素的即時變化 </p>
        <input type="text" :value="inputText"  @input="inputText = $event.target.value" /> 
        <p> @change監聽值改變 </p>
        <input type="text" :value="inputText"  @change="inputText = $event.target.value" />
        <p>顯示輸入內容：{{ inputText }}</p>

        <hr>


        <h2>「:」v-bind：綁定 attribute</h2>
        <p>disabled: {{ isUnclickable }}</p>
        <button type="button" :disabled="isUnclickable" @click="disabled">
            Cannot click!
        </button>

        <hr>

        <h2>綁定 class</h2>
        <p :class="{color_red : is_class}">class</p>
        <button type="button" @click="is_class_fn">
            Cannot click!
        </button>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10268431">簡寫好用一直用－v-on、v-bind</a>
    </div>
</template>
<style>
    p.color_red {
        color: red;
    }
</style>
<script>
    export default {
        data() {
            return {
                clicks: 0,
                isUnclickable: false,
                is_class: false,
                inputText: '55'
            };
        },
        methods: {
            counter() {
                this.clicks += 1;
                if (this.clicks % 50 === 0) {
                    alert(`Already ${this.clicks} clicks.`);
                }
            },
            disabled() {
                this.isUnclickable = true
            },
            is_class_fn() {
                this.is_class = true
            }
        },
    }
</script>