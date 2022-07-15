<template>
    <div>
        <p>@input 即時顯示輸入內容：{{ inputText }}</p>
        <label>搜尋：
            <!-- 一般在元件內的 <input> 使用 v-model -->
            <!--<input type="text" v-model="inputText" />-->

            <!-- @input監聽表單元素的即時變化 -->
            <input type="text" :value="inputText"  @input="inputText = $event.target.value" /> 

            <!-- @change監聽值改變 -->
            <!--<input type="text" :value="inputText"  @change="inputText = $event.target.value" />-->

        </label>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputText: '55'
        }
    },
    computed: {
    },
}
</script>
