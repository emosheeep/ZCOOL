<template>
  <div class="page">
    <div class="page-header">
      <a href="#" :class="{active: show}" @click.prevent="show=true">TA创建的</a>
      &nbsp;|&nbsp;
      <a href="#" :class="{active: !show}" @click.prevent="show=false">TA关注的</a>
    </div>
    <div class="page-body">
        <el-card shadow="always" v-if="show" class="creation">
          <el-image fit="cover" src="/static/images/null-page-draw.png"></el-image>
          <p>TA没有创建任何收藏夹</p>
        </el-card>
        <el-card shadow="always" v-if="!show" class="attention">
          <el-image fit="cover" src="/static/images/null-page-draw.png"></el-image>
          <p>TA没有关注任何收藏夹</p>
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collection',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped lang="stylus">
  .page
    background-color rgb(244,244,244)
    height 400px
    padding-top 20px
  .page-body
    background-color white
    width 1130px
    height 250px
    margin 0 auto
  .page-header
    text-align left
    width 1130px
    margin 0px auto 20px auto
    a
      color grey
      text-decoration none
  .creation,.attention
    border-radius 5px
  .active
    color black !important
</style>
