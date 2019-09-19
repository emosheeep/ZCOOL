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
        <el-submenu index="6" :show-timeout="0" :hide-timeout="0" class="things" popper-class="things-dropdownMenu">
          <template slot="title">素材角</template>
          <el-menu-item index="6-1">图片</el-menu-item>
          <el-menu-item index="6-2">视频</el-menu-item>
          <el-menu-item index="6-3">字体</el-menu-item>
          <el-menu-item index="6-4">音乐</el-menu-item>
        </el-submenu>
        <el-submenu index="7" :show-timeout="0" :hide-timeout="0" class="course" popper-class="course-dropdownMenu">
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
        <div>
          <el-link :underline="false">登陆</el-link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <el-link :underline="false">注册</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
$(function () {
  // 控制菜单选项高亮，防止鼠标进入下拉菜单时高亮消失
  $('.things-dropdownMenu').hover(() => {
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
  $('.course-dropdownMenu').hover(() => {
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

<style scoped lang="stylus">
  //去除下拉菜单小箭头，穿透scoped
  .things,.course
    & >>> .el-submenu__title i
      display none
  // 去除底边框
  .el-menu::after
    display none
  // 一般菜单项
  .el-menu-item
    width 80px
    height 61px
    text-align center
    border 0
    &:hover
      background-color rgb(40,40,40) !important
      color rgb(255,227,0) !important
  // 复合菜单项
  .things,.course
    width 80px
    height 61px
    text-align center
    border 0
    &>>>.el-submenu__title:hover
      background-color rgb(40,40,40) !important
      color rgb(255,227,0) !important
  // 导航栏下拉菜单
  .things-dropdownMenu
  .course-dropdownMenu
    li
      width 100%
      height 40px
      text-align left
      background-color white !important
      &:hover
        background-color rgb(255,227,0) !important
        color black !important
  .el-menu--horizontal>>>.el-submenu__title
    border 0 !important
    height 61px
  .el-menu--horizontal>.el-menu-item.is-active
    border 0
  .logo
    width 170px
    line-height 61px
  .nav
    position fixed
    top 0
    z-index 10
    height 61px
    width 100%
    min-width 1200px
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
        div
          line-height 61px
</style>
<style lang="stylus">
  // 下拉菜单样式覆盖
  .el-menu--horizontal
    .el-menu--popup-bottom-start
      background-color white !important
      border-radius 0 0 5px 5px
      margin 0
</style>
