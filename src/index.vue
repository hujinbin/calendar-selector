<template>
  <div class="box">
    <section class="date">
      <div class="head">
        <div class="prev" @click="prev">上一月</div>
        <div class="tomon" @click="currentMonth">
          <span class="year">{{year}}</span>年
          <span class="month">{{month}}</span>月
        </div>
        <div class="next" @click="next">下一月</div>
      </div>
      <ol>
        <li>周日</li>
        <li>周一</li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
      </ol>
      <ul>
        <li
          v-for="(item, index) in timeList"
          :key="index"
          class="data-date"
          @click="checkTime(item)"
          :class="`${item.state === 'before' ? 'no_date' : (item.time === time ? 'act_date':'data-date')}`"
        >
          <span>{{item.day}}</span>
          <i>{{item.calendar}}</i>
        </li>
        <!-- <li v-for="(item, index) in timeList"
                                          :key="index"
                                          class="data-date"
                                          @click="checkTime(item)"
                                          :class="`${item.state === 'before' ? 'no_date' : (item.state === 'today' ? 'act_date':'data-date')}`">
                                            <span>{{item.day}}</span>
                                             <i>{{item.calendar}}</i>
        </li>-->
      </ul>
    </section>
  </div>
</template>

<script>
//定义全局变量
let CalendarData = new Array(100);
let madd = new Array(12);
let tgString = "甲乙丙丁戊己庚辛壬癸";
let dzString = "子丑寅卯辰巳午未申酉戌亥";
let numString = "一二三四五六七八九十";
let monString = "正二三四五六七八九十冬腊";
let weekString = "日一二三四五六";
let sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
let cYear, cMonth, cDay, TheDate;
CalendarData = new Array(
  0xa4b,
  0x5164b,
  0x6a5,
  0x6d4,
  0x415b5,
  0x2b6,
  0x957,
  0x2092f,
  0x497,
  0x60c96,
  0xd4a,
  0xea5,
  0x50da9,
  0x5ad,
  0x2b6,
  0x3126e,
  0x92e,
  0x7192d,
  0xc95,
  0xd4a,
  0x61b4a,
  0xb55,
  0x56a,
  0x4155b,
  0x25d,
  0x92d,
  0x2192b,
  0xa95,
  0x71695,
  0x6ca,
  0xb55,
  0x50ab5,
  0x4da,
  0xa5b,
  0x30a57,
  0x52b,
  0x8152a,
  0xe95,
  0x6aa,
  0x615aa,
  0xab5,
  0x4b6,
  0x414ae,
  0xa57,
  0x526,
  0x31d26,
  0xd95,
  0x70b55,
  0x56a,
  0x96d,
  0x5095d,
  0x4ad,
  0xa4d,
  0x41a4d,
  0xd25,
  0x81aa5,
  0xb54,
  0xb6a,
  0x612da,
  0x95b,
  0x49b,
  0x41497,
  0xa4b,
  0xa164b,
  0x6a5,
  0x6d4,
  0x615b4,
  0xab6,
  0x957,
  0x5092f,
  0x497,
  0x64b,
  0x30d4a,
  0xea5,
  0x80d65,
  0x5ac,
  0xab6,
  0x5126d,
  0x92e,
  0xc96,
  0x41a95,
  0xd4a,
  0xda5,
  0x20b55,
  0x56a,
  0x7155b,
  0x25d,
  0x92d,
  0x5192b,
  0xa95,
  0xb4a,
  0x416aa,
  0xad5,
  0x90ab5,
  0x4ba,
  0xa5b,
  0x60a57,
  0x52b,
  0xa93,
  0x40e95
);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

function GetBit(m, n) {
  return (m >> n) & 1;
}
//农历转换
function e2c() {
  TheDate =
    arguments.length != 3
      ? new Date()
      : new Date(arguments[0], arguments[1], arguments[2]);
  var total, m, n, k;
  var isEnd = false;
  var tmp = TheDate.getYear();
  if (tmp < 1900) {
    tmp += 1900;
  }
  total =
    (tmp - 1921) * 365 +
    Math.floor((tmp - 1921) / 4) +
    madd[TheDate.getMonth()] +
    TheDate.getDate() -
    38;

  if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
    total++;
  }
  for (m = 0; ; m++) {
    k = CalendarData[m] < 0xfff ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true;
        break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cYear = 1921 + m;
  cMonth = k - n + 1;
  cDay = total;
  if (k == 12) {
    if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth = 1 - cMonth;
    }
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth--;
    }
  }
}

function GetcDateString() {
  var tmp = "";
  if (cMonth < 1) {
    tmp += "(闰)";
    tmp += monString.charAt(-cMonth - 1);
  } else {
    tmp += monString.charAt(cMonth - 1);
  }
  tmp += "月";
  tmp += cDay < 11 ? "初" : cDay < 20 ? "十" : cDay < 30 ? "廿" : "三十";
  if (cDay % 10 != 0 || cDay == 10) {
    tmp += numString.charAt((cDay - 1) % 10);
  }
  return tmp;
}

function GetLunarDay(solarYear, solarMonth, solarDay) {
  if (solarYear < 1921 || solarYear > 2020) {
    return "";
  } else {
    solarMonth = parseInt(solarMonth) > 0 ? solarMonth - 1 : 11;
    e2c(solarYear, solarMonth, solarDay);
    const yueSting = solarMonth < 10 ? "0" + String(solarMonth) : solarMonth;
    const si = solarDay < 10 ? "0" + String(solarDay) : solarDay;
    let calendar = "";
    if (yueSting + "-" + si == "01-01") {
      calendar = "元旦";
    } else if (yueSting + "-" + si == "02-14") {
      calendar = "情人节";
    } else if (yueSting + "-" + si == "03-08") {
      calendar = "妇女节";
    } else if (yueSting + "-" + si == "04-01") {
      calendar = "愚人节";
    } else if (yueSting + "-" + si == "05-01") {
      calendar = "劳动节";
    } else if (yueSting + "-" + si == "06-01") {
      calendar = "儿童节";
    } else if (yueSting + "-" + si == "07-01") {
      calendar = "建党节";
    } else if (yueSting + "-" + si == "08-01") {
      calendar = "建军节";
    } else if (yueSting + "-" + si == "09-10") {
      calendar = "教师节";
    } else if (yueSting + "-" + si == "10-01") {
      calendar = "国庆节";
    } else if (yueSting + "-" + si == "11-11") {
      calendar = "光棍节";
    } else if (yueSting + "-" + si == "12-24") {
      calendar = "平安夜";
    } else if (yueSting + "-" + si == "12-25") {
      calendar = "圣诞节";
    } else {
      calendar = GetcDateString();
    }
    return calendar;
  }
}
export default {
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      year: "", //当前年份
      month: "", //当前月份
      day: "", //当前几号
      timeList: [], //日历数组
      time: "", //选中的值，
      curtimeList: [] //多选时选中的值，
    };
  },
  created() {
    const date = new Date(); //定义一个日期对象；
    this.year = date.getFullYear(); //获取当前年份；
    this.month = date.getMonth() + 1; //获取当前月份；
    this.day =
      date.getDate() < 10 ? "0" + String(date.getDate()) : date.getDate(); //获取当前日期；
    const time = new Date(this.year, this.month - 1, this.day).getTime();
    this.time = this.value ? this.value : time;
    this.init();
  },
  methods: {
    // 初始化
    init() {
      //    计算本月1号是周几；
      const week = new Date(this.year + "-" + this.month + "-1").getDay();

      //计算本月有多少天；
      const days = new Date(this.year, this.month, 0).getDate();
      //计算上月有多少天；
      var dayw = new Date(this.year, this.month - 1, 0).getDate();
      let dayList = [];
      for (var i = 1; i <= days; i++) {
        const month = this.month - 1;
        var time = new Date(this.year, month, i).getTime(); //获取当前时间时间戳
        var yueSting = this.month < 10 ? "0" + String(this.month) : this.month;
        const calendar = GetLunarDay(this.year, yueSting, i);
        //获取当前日期的时间戳；
        const ym = new Date().getFullYear();
        const mm = new Date().getMonth();
        const dm = new Date().getDate();
        const td_time = new Date(ym, mm, dm).getTime();
        let state = "";
        if (time > td_time) {
          state = "after";
        } else if (time == td_time) {
          state = "today";
        } else {
          state = "before"; //不可选
        }
        dayList.push({
          day: i, //展示日子
          time: time, //时间戳
          state: state, //状态
          calendar: calendar //节日农历
        });
      }
      //计算前面空格键；
      let lastMonth = [];
      for (var j = dayw - week + 1; j <= dayw; j++) {
        const month = this.month - 2;
        var time = new Date(this.year, month, i).getTime(); //获取当前时间时间戳
        const lMonth = this.month - 1;
        var yueSting = lMonth < 10 ? "0" + String(lMonth) : lMonth;
        const calendar = GetLunarDay(this.year, yueSting, j);
        lastMonth.push({
          state: "before", //状态
          day: j,
          calendar: calendar,
          time: time
        });
      }
      dayList = [...lastMonth, ...dayList];
      //计算后面空格键；
      for (var x = 1; x < 36 - days - week; x++) {
        var time = new Date(this.year, this.month, x).getTime(); //获取当前时间时间戳
        const Month = this.month + 1;
        var yueSting = Month < 10 ? "0" + String(Month) : Month;
        const calendar = GetLunarDay(this.year, yueSting, x);
        dayList.push({
          state: "before", //状态
          day: x,
          calendar: calendar,
          time: time,
        });
      }
      this.timeList = dayList;
    },
    // 选择当前时间触发
    checkTime(item) {
      if (item.state !== "before") {
        this.time = item.time;
        this.$emit("change", item.time);
      }
    },
    // 上个月
    prev() {
      if (this.month == 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
      this.init();
    },
    // 下个月
    next() {
      if (this.month == 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
      this.init();
    },
    // 返回本月
    currentMonth() {
      const date = new Date(); //定义一个日期对象；
      this.year = date.getFullYear(); //获取当前年份；
      this.month = date.getMonth() + 1; //获取当前月份；
      this.day =
        date.getDate() < 10 ? "0" + String(date.getDate()) : date.getDate(); //获取当前日期；
      this.init();
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.head {
  width: 100%;
  height: 4.5rem;
  cursor: pointer;
}
.head .prev,
.head .next {
  width: 20%;
  text-align: center;
  float: left;
  line-height: 4.5rem;
  font-size: 1.6rem;
}
.head .tomon {
  width: 60%;
  float: left;
  text-align: center;
  line-height: 4.5rem;
  font-size: 1.6rem;
  color: #00a3e0;
}
.date ol {
  width: 100%;
  height: 4rem;
  background: #005bac;
  padding: 0;
  margin: 0;
}
.date ol li {
  display: block;
  float: left;
  width: 14.2857%;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  border: none;
  padding: 0;
  line-height: 4rem;
  height: 4rem;
}
.date ul {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.date ul li {
  display: block;
  width: 14.2857%;
  height: 4.5rem;
  text-align: center;
  font-size: 1.6rem;
  background: #fff;
  position: relative;
  cursor: pointer;
}
.date ul li i {
  font-size: 10px;
  position: absolute;
  right: 0;
  bottom: 0.3rem;
  display: block;
  height: 15px;
  line-height: 15px;
  width: 100%;
  text-align: center;
  color: #e35925;
}
.date ul li span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 4.5rem;
  text-align: center;
}
.date ul .no_date {
  background: #fafafa;
  color: #999;
  line-height: 4.5rem;
  cursor: default;
}
.date ul .act_wk {
  color: #e35925;
}
.date ul .act_date {
  background: #ff6600;
  color: #fff;
}
.date ul .act_ds {
  background: #005bac;
  color: #fff;
}
</style>