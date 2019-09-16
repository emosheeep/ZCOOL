<template>
  <div class="all">
    <div class="basic-info">
      <p class="box-title">基本信息</p>
      <el-row class="data-rows">
        <el-col :span="4">用户名</el-col>
        <el-col :span="20">{{user.basic.name}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">性别</el-col>
        <el-col :span="20">{{user.basic.sex}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">签名</el-col>
        <el-col :span="20">{{user.basic.description}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">家乡</el-col>
        <el-col :span="20">{{user.basic.hometown}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">现居</el-col>
        <el-col :span="20">{{user.basic.home}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">职业</el-col>
        <el-col :span="20">{{user.basic.work}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">酷龄</el-col>
        <el-col :span="20">{{user.basic.age}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">简介</el-col>
        <el-col :span="20">{{user.basic.introduction}}</el-col>
      </el-row>
    </div>
    <div class="contact-info">
      <p class="box-title">联系方式</p>
      <el-row class="data-rows">
        <el-col :span="4">QQ</el-col>
        <el-col :span="20">{{user.contact.qq}}</el-col>
      </el-row>
      <el-row class="data-rows">
        <el-col :span="4">微信</el-col>
        <el-col :span="20">{{user.contact.vx}}</el-col>
      </el-row>
    </div>
    <div class="personal-link">
      <p class="box-title">个人链接</p>
      <el-row class="data-rows">
        <el-col :span="24">
          <el-link :underline="false"><img src="/static/images/related-weibo.png"></el-link>
          <el-link :underline="false"><img src="/static/images/dribbble.png"></el-link>
          <el-link :underline="false"><img src="/static/images/facebook.png"></el-link>
          <el-link :underline="false"><img src="/static/images/twitter.png"></el-link>
          <el-link :underline="false"><img src="/static/images/behance.png"></el-link>
          <el-link :underline="false"><img src="/static/images/personal_website.png"></el-link>
        </el-col>
      </el-row>
    </div>
    <div class="personal-equipment">
      <p class="box-title">个人装备</p>
      <el-row class="data-rows">
        <el-col :span="24">
          <el-tag type="info">Illustrator</el-tag>
        </el-col>
      </el-row>
    </div>
    <div class="personal-tag">
      <p class="box-title">个人标签</p>
      <el-row class="data-rows">
        <el-col :span="24">
          <el-tag type="info">字体</el-tag>
          <el-tag type="info">品牌</el-tag>
          <el-tag type="info">书籍装帧</el-tag>
          <el-tag type="info">平面设计</el-tag>
          <el-tag type="info">标志</el-tag>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Data',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    background-color rgb(244,244,244)
    height 1070px
    padding-top 20px
  .box-title
    text-align left
    padding 20px 40px 10px 40px
    margin 0
  .data-rows
    padding 10px 0
    div:nth-child(1)
      color grey
    div:nth-child(2)
      text-align left
  basic-style(h)
    background-color white
    width 900px
    height h
    margin 0 auto
    font-size 14px
  .basic-info
    basic-style(430px)
    border-bottom 1px solid rgb(238,238,238)
    border-radius 5px 5px 0 0
  .contact-info
    basic-style(155px)
    border-bottom 1px solid rgb(238,238,238)
  .personal-link
    basic-style(150px)
    border-bottom 1px solid rgb(238,238,238)
    .data-rows
      padding 15px 140px
      text-align left
      a
        margin 0 10px
  .personal-equipment
    basic-style(136px)
    border-bottom 1px solid rgb(238,238,238)
    .data-rows
      padding 15px 140px
      text-align left
  .personal-tag
    basic-style(136px)
    border-radius 0 0 5px 5px
    .data-rows
      padding 15px 140px
      text-align left
</style>
