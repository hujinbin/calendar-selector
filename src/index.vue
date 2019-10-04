<template>
  <div class="yuyue_left_bh">
        <div class="tit"><span>2</span>请选择日期</div>                   
						 <div class="yy_tupian">
                             <div class="box">
                                 <section class="date">
                                     <div class="head">
                                         <div class="prev">上一月</div>
                                         <div class="tomon"><span class="year"></span>年 <span class="month"></span>月</div>
                                         <div class="next">下一月</div>
                                     </div>
                                     <ol><li>周日</li><li>周一</li><li>周二</li><li>周三</li><li>周四</li><li>周五</li><li>周六</li></ol>
                                     <ul>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                         <li>日期</li>
                                     </ul>
                                 </section>
                             </div>
                         </div>
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
           for(var i=1;i<=days;i++){
        var time=new Date(this.year,this.month,i).getTime();
        let dayList=[]
        var yueSting=yue<10 ? '0'+String(yue):yue
        var si=i<10?'0'+String(i):i
        if(yueSting+'-'+i =='01-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>元旦</i></li>"
        }else if(yueSting+'-'+i =='02-14'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>情人节</i></li>"
        }else if(yueSting+'-'+i =='03-08'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>妇女节</i></li>"
        }else if(yueSting+'-'+i =='04-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>愚人节</i></li>"
        }else if(yueSting+'-'+i =='05-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>劳动节</i></li>"
        }else if(yueSting+'-'+i =='06-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>儿童节</i></li>"
        }else if(yueSting+'-'+i =='07-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>建党节</i></li>"
        }else if(yueSting+'-'+i =='08-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>建军节</i></li>"
        }else if(yueSting+'-'+i =='09-10'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>教师节</i></li>"
        }else if(yueSting+'-'+i =='10-01'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>国庆节</i></li>"
        }else if(yueSting+'-'+i =='11-11'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>光棍节</i></li>"
        }else if(yueSting+'-'+i =='12-24'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>平安夜</i></li>"
        }else if(yueSting+'-'+i =='12-25'){
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span><i>圣诞节</i></li>"
        }else{
            html+="<li data-jr="+yueSting+"-"+ i +" data-id="+time+" data-date="+ nian+"-"+yueSting+"-"+si+"><span>"+i+"</span></li>"
        }
    }
   //计算前面空格键；
    var html2='';
    for(var j=dayw-week+1;j<=dayw;j++){
        html2+="<li class='no_date'>"+j+"</li>";
    }
    $('.date ul li').eq(0).before(html2);

//计算后面空格键；
    var html3='';
    for(var x=1;x<43-days-week;x++){
        html3+="<li class='no_date'>"+x+"</li>";
    }
    $('.date ul li').eq(days+week-1).after(html3);
        },
    },
}
</script>

<style scoped>
.box{width: 100%;height: 100%;}
.head{width: 100%;height:4.5rem;cursor: pointer;}
.head .prev,.head .next{width: 20%;text-align: center;float: left;line-height: 4.5rem;font-size:1.6rem;}
.head .tomon{width: 60%;float: left;text-align: center;line-height: 4.5rem;font-size: 1.6rem;color: #00a3e0;}
.date ol{width: 100%;height: 4rem;background: #005bac;padding: 0;}
.date ol li{display:block;float: left;width: 14.2857%;text-align: center;font-size: 1.6rem;color: #fff;border: none;padding: 0;line-height: 4rem;height: 4rem;}
.date ul{width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;}
.date ul li{display: block;width: 14.2857%;height: 4.5rem;text-align: center;font-size: 1.6rem;background: #fff;position: relative;}
.date ul li i{font-size: 10px;position: absolute;right: 0;bottom:0.3rem;display:block;height: 15px;line-height: 15px;width: 100%;text-align: center;color: #e35925;}
.date ul li span{display: block;width: 100%;height: 100%;line-height: 4.5rem;text-align: center;}
.date ul .no_date{background: #fafafa;color: #999;line-height:4.5rem;}
.date ul .act_wk{color: #e35925;}
.date ul .act_date{background: #ff6600;color: #fff;}
.date ul .act_ds{background: #005bac;color: #fff;}
</style>