<template>
    <div>
        <h2> mockjs模拟AJAX数据</h2>
        <pre>
        # 安装
        npm install mockjs
        </pre>
        <p>再項目中src夾創建mock文件夾</p>
        <p>新增banner.json文件,要格式化</p>
        <pre>
            //banner.json
            //圖片要放在public 打包在dist文件
            [
                {
                    "id": "1",
                    "imgUrl": "banner1.jpg"
                },
                {
                    "id": "2",
                    "imgUrl": "banner2.jpg"
                },
                {
                    "id": "3",
                    "imgUrl": "banner3.jpg"
                },
                {
                    "id": "4",
                    "imgUrl": "banner4.jpg"
                }
            ]
        </pre>

        <h2>創建mockServe.js</h2>
        <pre>
        //引入mockjs
        import Mock from 'mockjs';

        //把JSON數據引入
        //webpack 默認圖片 json數據所以不用對外爆露
        import banner from './banner.json';
        
        //使用mockjs模拟数据 第一個請求網址 第二個請求數據
        Mock.mock('/mock/banner',{code:200,data:banner});
        </pre>

        <h2>在main.js 引入mockServe.js</h2>
        <pre>
            import '@/mock/mockServe';
        </pre>

        <h2>api/index.js</h2>
        <pre>
            import requests from './request'; //引入封裝
            import mockrequests from './mockAjax';  //引入mockAjax

            export const reqCategoryList = () => requests({ url: '/api', method: 'get' });
            //沒有值要給空對象
            export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});
            //mock get
            export const reqCateBanner = () => mockrequests.get('/banner');
        </pre>

        <h2>在store 引入 api</h2>
        <pre>
        import { reqCateBanner } from '@/api';
        const state = {
            slide: [],
        }
        const mutations = {
            slideMu(state, list) {
                state.slide = list
            },
        }
        const actions = {
            async slide({ commit }) {
                let result = await reqCateBanner();
                if (result.data.code == 200) {
                    commit('slideMu', result.data.data)
                }
            },
        }
        const getters = {}
        export default {
            namespaced: true,
            state,
            mutations,
            actions,
            getters,
        }
        </pre>

        <h2>在script 引入 api</h2>
        <pre>
        import { reqCateBanner } from '@/api';
        export default {
            data(){
                    return{
                }
            },
            mounted(){
                reqCateBanner().then(function(response){
                    console.log(response)
                })
            },
        }
        </pre>
        <br>
        <br>
        <br>
        <a href="https://www.youtube.com/watch?v=Nrdn7nGzNSA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=32">mockjs模拟数据</a>
    </div>
</template>

<script>
    //引用API
    import {
        reqCateBanner
    } from '@/api';
    export default {
        data() {
            return {}
        },
        mounted() {
            reqCateBanner().then(function(response) {
                console.log(response)
            })
        },
        computed: {},
    }
</script>