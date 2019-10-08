<template>	
                             <div class="box">
                                 <section class="date">
                                     <div class="head">
                                         <div class="prev">上一月</div>
                                         <div class="tomon"><span class="year">{{year}}</span>年 <span class="month">{{month}}</span>月</div>
                                         <div class="next">下一月</div>
                                     </div>
                                     <ol><li>周日</li><li>周一</li><li>周二</li><li>周三</li><li>周四</li><li>周五</li><li>周六</li></ol>
                                     <ul>
                                         <li v-for="(item, index) in timeList"
                                          :key="index"
                                          class="data-date"
                                          :class="`${item.state === 'before' ? 'no_date' : (item.state === 'today' ? 'act_date':'data-date')}`">
                                            <span>{{item.day}}</span>
                                             <i>{{item.calendar}}</i>
                                         </li>
                                         <!-- <li class="no_date act_wk">
                                             <span>17</span>
                                             <i>圣诞节</i>
                                        </li>
                                         <li class="no_date">
                                             <span>17</span>
                                             <i>圣诞节</i>
                                        </li>
                                         <li class="data-date">
                                             <span>17</span>
                                             <i>圣诞节</i>
                                        </li>
                                         <li class="act_date">
                                             <span>17</span>
                                             <i>圣诞节</i>
                                        </li> -->
                                     </ul>
                                 </section>
                                </div>
                           

</template>

<script>
export default {
    data(){
        return{
          year:'', 
          month:'',
          day:'',
          timeList:[],
        }
    },
    created(){
           const date=new Date();            //定义一个日期对象；
      this.year=date.getFullYear();    //获取当前年份；
      this.month=date.getMonth()+1;    //获取当前月份；
      this.day=date.getDate()<10?'0'+String(date.getDate()):date.getDate();         //获取当前日期；
      this.init()
       const n930=new Date(2019,10,30).getTime()
        const n1001=new Date(2019,11,1).getTime()
    const today=new Date().getTime()
    //    console.log(n7 - today)
    //     console.log(n7)
    //    console.log(today)
    //    console.log('日志')
    const timeOut=2*24*60*60*1000;
    // console.log(timeOut)
    // console.log((n7 - today)<timeOut)
    const n32=new Date(2019,11,2).getTime()
      console.log(new Date(2019,9,31))
       console.log(new Date(2019,10,1))
        const mm=new Date().getMonth()+1;
       console.log(mm)
 console.log(n1001 - n930)
  console.log(n1001)
   console.log(n930)
    },
    methods:{
        // 初始化
        init(){
          //    计算本月1号是周几；
         const week=new Date(this.year+'-'+this.month+'-1').getDay();

          //计算本月有多少天；
         const days=new Date(this.year,this.month,0).getDate();
        //计算上月有多少天；
          var dayw=new Date(this.year,this.month-1,0).getDate();
           let dayList=[]
           for(var i=1;i<=days;i++){
        var time=new Date(this.year,this.month,i).getTime();
        var yueSting=this.month<10 ? '0'+String(this.month):this.month
        var si=i<10?'0'+String(i):i
        let calendar=''
        if(yueSting+'-'+i =='01-01'){
              calendar='元旦'
        }else if(yueSting+'-'+i =='02-14'){
             calendar='情人节'
        }else if(yueSting+'-'+i =='03-08'){
              calendar='妇女节'
        }else if(yueSting+'-'+i =='04-01'){
              calendar='愚人节'
        }else if(yueSting+'-'+i =='05-01'){
              calendar='劳动节'
        }else if(yueSting+'-'+i =='06-01'){
              calendar='儿童节'
        }else if(yueSting+'-'+i =='07-01'){
              calendar='建党节'
        }else if(yueSting+'-'+i =='08-01'){
              calendar='建军节'
        }else if(yueSting+'-'+i =='09-10'){
              calendar='教师节'
        }else if(yueSting+'-'+i =='10-01'){
             calendar='国庆节'
        }else if(yueSting+'-'+i =='11-11'){
              calendar='光棍节'
        }else if(yueSting+'-'+i =='12-24'){
             calendar='平安夜'
        }else if(yueSting+'-'+i =='12-25'){
           calendar='圣诞节'
        }else{
            calendar=''
        }
        //获取当前日期的时间戳；
         const ym=new Date().getFullYear();
        const mm=new Date().getMonth();
    const dm=new Date().getDate();
    const td_time=new Date(ym,mm,dm).getTime();
    let state= ''
         if(time > td_time){
            state='after'
         }else if(time == td_time){
            state='today'
         }else{
            state='before'  //不可选
         }
        dayList.push({
            day:i, //展示日子
            time:time, //时间戳
            state:state,  //状态
            calendar:calendar //节日农历
        })
    }
   //计算前面空格键；
   let lastMonth = []
    for(var j=dayw-week+1;j<=dayw;j++){
        lastMonth.push({
            state:'before',  //状态
            day:j,calendar:''
            })
    }
    dayList = [...lastMonth,...dayList]

//计算后面空格键；
    for(var x=1;x<36-days-week;x++){
         dayList.push({
              state:'before',  //状态
             day:x,calendar:''})
    }
    this.timeList=dayList;
        },
    },
}
</script>

<style scoped>
.box{width: 100%;height: 100%;}
.head{width: 100%;height:4.5rem;cursor: pointer;}
.head .prev,.head .next{width: 20%;text-align: center;float: left;line-height: 4.5rem;font-size:1.6rem;}
.head .tomon{width: 60%;float: left;text-align: center;line-height: 4.5rem;font-size: 1.6rem;color: #00a3e0;}
.date ol{width: 100%;height: 4rem;background: #005bac;padding: 0;margin:0;}
.date ol li{display:block;float: left;width: 14.2857%;text-align: center;font-size: 1.6rem;color: #fff;border: none;padding: 0;line-height: 4rem;height: 4rem;}
.date ul{margin:0;padding:0;width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;}
.date ul li{display: block;width: 14.2857%;height: 4.5rem;text-align: center;font-size: 1.6rem;background: #fff;position: relative;}
.date ul li i{font-size: 10px;position: absolute;right: 0;bottom:0.3rem;display:block;height: 15px;line-height: 15px;width: 100%;text-align: center;color: #e35925;}
.date ul li span{display: block;width: 100%;height: 100%;line-height: 4.5rem;text-align: center;}
.date ul .no_date{background: #fafafa;color: #999;line-height:4.5rem;}
.date ul .act_wk{color: #e35925;}
.date ul .act_date{background: #ff6600;color: #fff;}
.date ul .act_ds{background: #005bac;color: #fff;}
</style>