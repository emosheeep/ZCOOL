<template>
 <div class="all">
   <div class="top">
     <el-link :underline="false"
              v-for="(link,index) in links"
              :key="index">
       {{link}}
     </el-link>
     <div>
       <img id="weixin" src="/static/images/weixin-icon.png">
       <img src="/static/images/weibo-icon.svg">
     </div>
   </div>
   <div class="bottom">
     <div>
       <el-link :underline="false" v-for="(tip,index) in tips"
                :key="index">
         <img src="static/images/police-icon.png" v-if="index === 2">
         {{tip}}
         <i v-if="index != tips.length-1"></i>
       </el-link>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: ['移动版', '关于我们', '加入站酷', '用户协议',
        '隐私政策', '侵权申诉', '企业服务', '帮助中心', '联系我们', '中文', 'English'],
      tips: [
        '京ICP备11017824号-4', '京ICP证130164号', '京公网安备11010502000501号',
        '网络文化经营许可证 京网文[2016]6173-844号', '广播电视节目制作经营许可证（京）字第06990号',
        '营业执照', '网上有害信息举报专区', '不良信息举报电话：010-56538658', '举报邮箱 jubao@zcool.com.cn',
        '联系电话：010-56538600 Copyright © 2006-2019 ZCOOL站酷'
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    width 100%
    height 230px
    min-width 1200px
    background-color rgb(40,40,40)
  .top
    height 130px
    width 1130px
    margin 0 auto
    display flex
    justify-content space-between
    border-bottom 1px solid #333
    a
      color rgb(102,102,102)
      &:hover
        color grey
      &:nth-child(1)::before
        content url("/static/images/footer-mobile.svg")
        margin-right 5px
    div
      margin auto 0
      img
        filter grayscale(1)
        width 25px
        height 25px
        margin 0 10px
        cursor pointer
        &:hover
          filter grayscale(0)
  .bottom
    height 80px
    width 1130px
    margin 0 auto
    div
      margin 20px 0 0 0
      height 80px
      display flex
      justify-content flex-start
      flex-wrap wrap
      flex-grow 1
      a
        font-size 12px
        height 20px
        color rgb(102,102,102)
        i
          display: inline-block
          width: 1px
          height: 12px
          margin: 0 20px
          background: #666
          vertical-align: middle
        &:hover
          color grey
          border-bottom 1px solid #333
</style>
