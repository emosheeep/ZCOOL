<template>
  <div>
    <Navbar></Navbar>
    <div class="background">
      <div class="bgImg"></div>
    </div>
    <div class="absolute-panel">
      <div class="information">
        <div class="no-use">
          <div class="data-wraper" style="color: white">
            <div class="data-wraper-box">
              <div class="left">
                <div class="first">
                  <p>人气</p>
                  <el-link :underline="false">{{user.number.popularity}}</el-link>
                </div>
                <div class="second">
                  <p>积分</p>
                  <el-link :underline="false">{{user.number.integration}}</el-link>
                </div>
              </div>
              <div class="right">
                <div class="first">
                  <p>粉丝</p>
                  <el-link :underline="false">{{user.number.fans}}</el-link>
                </div>
                <div class="second">
                  <p>关注</p>
                  <el-link :underline="false">{{user.number.attention}}</el-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <el-avatar class="avatar" :size="120" fit="contain" :src="user.basic.avatar"></el-avatar>
          <div class="nick-name">
            <p>{{user.basic.name}}</p>
            <img src="/static/images/honor_gogoup.svg">
            <img src="/static/images/honor_tuijian_designer.svg">
          </div>
          <p style="font-size: 12px; color: grey">{{user.basic.home}}|{{user.basic.work}}k</p>
          <p style="font-size: 15px">{{user.basic.description}}</p>
          <div class="button-group">
            <el-button type="warning">关注</el-button>
            <el-button>私信</el-button>
          </div>
          <div class="list-nav">
            <div class="list-item" v-for="(item,index) in items" :key="index">
              <a @click.prevent="currentTabComponent = item.name">{{item.title}}</a>
            </div>
          </div>
        </div>
      </div>
      <!--引用组件-->
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
      <data></data>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
$(() => {

})
export default {
  name: 'index',
  data () {
    return {
      currentTabComponent: 'homePage',
      items: [
        {
          title: '首页',
          name: 'homePage'
        }, {
          title: '推荐',
          name: 'recommend'
        }, {
          title: '资料',
          name: 'data'
        }, {
          title: '收藏',
          name: 'collection'
        }, {
          title: '生活',
          name: 'life'
        }, {
          title: '创作历程',
          name: 'process'
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    homePage: () => import('./homePage.vue'),
    Data: () => import('./Data.vue'),
    Footer: () => import('@/components/Footer.vue')
  }
}
</script>

<style lang="stylus">
  .background
    position fixed
    top 61px
    text-align center
    width 100%
    height 344px
    .bgImg
      height 100%
      background-image url("/static/images/background.jpg")
      background-position-x 50%
      overflow-x hidden
  .absolute-panel
    position absolute
    top 61px
    width 100%
    .information
      .no-use
        background transparent !important
        height 344px
        position relative
        .data-wraper
          height 75px
          width 100%
          position absolute
          bottom 0
          .data-wraper-box
            width 80%
            height 100%
            margin 0 auto
            display flex
            justify-content space-between
            .left,.right
              width 40%
              height 52px
              display flex
              justify-content space-between
              p
                color grey
                font-size 13px
                margin 3px auto
              a
                display block
                font-size 25px
              div
                width 50%
              .first
                position relative
                &:after
                  content ""
                  width 1px
                  height 32px
                  background rgba(255, 255, 255, 0.5)
                  position absolute
                  right 0
                  top 25%
      .content
        background-color white
        height 274px
        position relative
        padding-top 60px
        .avatar
          // 和 :size属性保持一致
          border-radius 120px
          border 4px solid white
          position absolute
          top -60px
          transform translateX(-50%)
        .nick-name
          text-align center
          p
            display inline
            font-size 25px
            margin 0
          img
            width 18px
            height 18px
            transform translateY(-20%)
            margin 0 4px
        .button-group button
          width 120px
  .list-nav
    display flex
    justify-content space-between
    width 40%
    height 50px
    margin 15px auto 0 auto
    color grey
    line-height 50px
    .list-item a
      font-size 16px
      display inline-block
      cursor pointer
      height 50px
      &:hover
        border-bottom black 2px solid
        color black
</style>
