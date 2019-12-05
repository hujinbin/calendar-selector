
#安装
npm install --save calendar-selector

#使用

import Calendar from 'calendar-selector';
 
// 全局注册
Vue.component('Calendar', Calendar);
 
// 局部组件使用
new Vue({
  components:{Calendar}
})