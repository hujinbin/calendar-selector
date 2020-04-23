import Vue from 'vue'
import calendar from '../src/index'

describe('calendar.vue', () => {
  it('calendar是否存在',()=>{
    expect(calendar).to.be.ok;
  })
  it('calendar初始化是否默认选中当前时间', () => {
    const Constructor = Vue.extend(calendar)
    const vm = new Constructor().$mount()
    const date = new Date(); 
    const day = date.getDate() < 10 ? "0" + String(date.getDate()) : date.getDate(); //获取当前日期；
    expect(vm.$el.querySelector('.date .act_date span').textContent)
      .to.equal(day)
  })
})