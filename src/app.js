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
        change(value){
            console.log(value)
        },
    }
})

