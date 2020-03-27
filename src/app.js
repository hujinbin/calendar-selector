import Vue from 'vue'
import index from './index'

Vue.component('Calendar',index)

new Vue({
    el:'#app',
    data(){
        return{
                
        }
    },
    methods:{
        // 时间单个选择
        change(value){
            console.log(value)
        },
        // 时间多选
        multChange(){

        },
    }
})

