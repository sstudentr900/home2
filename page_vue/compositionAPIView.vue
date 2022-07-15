<template>
    <div>
        <h2>Ref()</h2>
        <p>寫法</p>
        <pre>
            //Vue 2
            data: {
                msg: 'Hello World'
            }

            //Vue 3
            setup() {
                const msg = ref('Hello World');
                return { msg }
            }
        </pre>
        <p>範例</p>
        <pre>
            &lt;template&gt;
                &lt;div&gt;
                    &lt;p ref="msg"&gt;&lt;/p&gt;
                    &lt;button type="button" @click="changeMsg"&gt;click me&lt;/button&gt;
                &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
                import { ref } from 'vue'
                export default {
                    name: 'HelloWorld',
                    setup() {
                        let msg = ref(null);
                        const changeMsg = () => {
                            msg.value.classList.add('lalala');
                            msg.value.textContent = 'Hello World'
                        }
                        return { msg, changeMsg }
                    }
                }
            &lt;/script&gt;
        </pre>
        <br>
        <h2>ref vs reactive</h2>
        <p>Ref() 適用於需要重新分配的對象，例如數組。</p>
        <p>reactive()需要重新分配一個屬性而不是整個對象。</p>
        <hr>
        <p>參考</p>
        <a href="https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3">ref vs reactive</a>
        <br>
        <h2>Props</h2>
        <p>父組件</p>
        <pre>
            //Component
            &lt;HelloWorld title="Hello World"/&gt;

            //js
            export default {
                props: ['title'],
                setup(props) {
                    const title = props.title;
                    console.log(title); // Hello World
                }
            }
        </pre>
        <p>子組件</p>
        <pre>
            //js
            import { toRef } from 'vue'
            export default {
                props: ['title'],
                setup(props) {
                    const title = toRef(props, 'title');
                    console.log(title.value); // Hello World
                }
            }
        </pre>
        <br>
        <h2>watch、watchEffect、stop</h2>
        <pre>
            &lt;template&gt;
                &lt;div&gt;
                    &lt;input type="text" v-model="search"&gt;
                    &lt;input type="text" v-model="search2"&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
                import { ref, watch, watchEffect } from 'vue'
                export default {
                    name: 'HelloWorld',
                    setup() {
                        const search = ref('');
                        watch(search, (newValue, oldValue) => {
                            console.log('watch search', newValue, oldValue)
                        })
                        const search2 = ref('');
                        watch(search2, () => {
                            console.log('watch search2', search2.value)
                        })
                        watchEffect(() => {
                            console.log('watchEffect', search.value, search2.value)
                        })
                        return {
                            search, search2
                        }
                    }
                }
            &lt;/script&gt;
        </pre>
        <p>要停止 watch、watchEffect，如下：</p>
        <pre>
            const search = ref('');
            const stopWatch = watch(search, (newValue, oldValue) => {
                console.log('watch search', newValue, oldValue)
            })
            const stopWatchEffect = watchEffect(() => {
                console.log('watchEffect', search.value)
            })
            setTimeout(() => {
                stopWatch();
                stopWatchEffect();
            }, 5000)
        </pre>
        <br>
        <h2>生命週期</h2>
        <pre>
            import { onMounted, onUpdated } from 'vue'
                export default {
                name: 'HelloWorld',
                setup() {
                    onMounted(() => console.log('Mounted'));
                    onUpdated(() => console.log('Updated'));
                    // ...
                }
            }
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://www.letswrite.tw/vue3-composition-api/">Vue.js 3 Composition API</a>
        <a href="https://ithelp.ithome.com.tw/articles/10272253">Composition API</a>
    </div>
</template>
<script>
    import {
        inject
    } from 'vue'
    export default {
        name: 'componentsView',
        computed: {

        },
        setup() {
            const $api = inject('$api');
            $api.reqCateBanner().then(function(response) {
                console.log(response)
            })
        },
        methods: {
            getData() {
                this.$api.reqCateBanner().then(function(response) {
                    console.log(response)
                })
            },
        }

    }
</script>