<template>
  <div class="nav">
    <div class="left"><img class="logo" src="/static/images/logo.svg"></div>
    <div class="middle">
      <el-menu background-color="rgb(255,227,0)"
               mode="horizontal"
               text-color="black"
               menu-trigger="hover"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">同城</el-menu-item>
        <el-menu-item index="4">职位</el-menu-item>
        <el-menu-item index="5">活动</el-menu-item>
        <el-submenu index="6" :show-timeout="0" :hide-timeout="0" popper-class="things">
          <template slot="title">素材角</template>
          <el-menu-item index="6-1">图片</el-menu-item>
          <el-menu-item index="6-2">视频</el-menu-item>
          <el-menu-item index="6-3">字体</el-menu-item>
          <el-menu-item index="6-4">音乐</el-menu-item>
        </el-submenu>
        <el-submenu index="7" :show-timeout="0" :hide-timeout="0" popper-class="course">
          <template slot="title">课程</template>
          <el-menu-item index="7-1">正在热销</el-menu-item>
          <el-menu-item index="7-2">口碑好课</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="search"><div></div></div>
      <div class="upload"><div></div></div>
      <div class="loginAndRegister">
        <el-link :underline="false">登陆</el-link>
        <span>|</span>
        <el-link :underline="false">注册</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
$(function () {
  // // 滚动监听
  // window.addEventListener('scroll', function () {
  //   let t = $('body, html').scrollTop() // 目前监听的是整个body的滚动条距离
  //   if (t > 500) {
  //     $('.nav').hide()
  //   }
  // })
  // 去掉上下箭头指示
  $('.el-submenu__title').find('i').remove()
  // 控制菜单选项高亮，防止鼠标进入下拉菜单时高亮消失
  $('.things').hover(() => {
    $('.el-submenu:eq(0) .el-submenu__title').css({
      backgroundColor: 'rgb(40,40,40)',
      color: 'rgb(255,227,0)'
    })
  }, () => {
    $('.el-submenu:eq(0) .el-submenu__title').css({
      backgroundColor: 'rgb(255,227,0)',
      color: 'black'
    })
  })
  $('.course').hover(() => {
    $('.el-submenu:eq(1) .el-submenu__title').css({
      backgroundColor: 'rgb(40,40,40)',
      color: 'rgb(255,227,0)'
    })
  }, () => {
    $('.el-submenu:eq(1) .el-submenu__title').css({
      backgroundColor: 'rgb(255,227,0)',
      color: 'black'
    })
  })
})
</script>

<style lang="stylus">
  .el-menu::after
    display none
  .el-menu-item
  .el-submenu__title
    width 80px
    height 61px !important
    text-align center
    &:hover
      background-color rgb(40,40,40) !important
      color rgb(255,227,0) !important
  // 导航栏下拉菜单
  .el-menu--popup-bottom-start
    background-color white !important
    margin 0
    border-radius 0 0 5px 5px
    li
      width 100%
      height 40px !important
      text-align left
      background-color white !important
      &:hover
        background-color rgb(255,227,0) !important
        color black !important
  .el-menu--horizontal>.el-menu-item.is-active
    border 0
    color black
  .logo
    width 170px
    line-height 61px
  .nav
    position fixed
    top 0
    z-index 10
    height 61px
    width 100%
    display flex
    justify-content space-between
    background-color rgb(255,227,0)
    .left
      height 61px
      width 300px
      padding-top 15px
    .right
      display flex
      height 61px
      width 300px
      .search
        width 61px
        height 61px
        div
          width 20px
          height 20px
          transform translate(20px,20px)
          background-image url("/static/images/nav-search.svg")
        &:hover
          background-color rgb(40,40,40)
          div
            background-image url("/static/images/nav-search-hover.svg")
      .upload
        width 61px
        height 61px
        div
          width 30px
          height 20px
          transform translate(18px,20px)
          background url("/static/images/nav-upload.svg") no-repeat
        &:hover
          background-color rgb(40,40,40)
          div
            background-image url("/static/images/nav-upload-hover.svg")
      .loginAndRegister
        width 120px
        margin 0 auto
        .el-link--inner
          line-height 61px
</style>
