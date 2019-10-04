import Vue from '../node_modules/vue'
import index from './index'

Vue.component('calendar',index)

window.addEventListener('load',()=>{
    new Vue({
        el:'#app',
        render: h => h(index)
    })
})
