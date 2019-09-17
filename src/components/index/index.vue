<template>
  <div v-if="user.number"> <!--防止渲染错误（未获得数据就加载）--->
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
          <div class="list-nav"> <!--组件导航栏-->
            <div class="list-item"
                 :class="{active: index === currentNavItem}"
                 v-for="(item,index) in items"
                 :key="index">
              <a @click.prevent="changeModule(index,item.name)">{{item.title}}</a>
            </div>
          </div>
        </div>
      </div>
      <!--引用组件-->
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      currentTabComponent: 'homePage',
      currentNavItem: 0,
      items: [
        {
          title: '首页',
          name: 'homePage'
        }, {
          title: '推荐',
          name: 'Recommend'
        }, {
          title: '资料',
          name: 'Data'
        }, {
          title: '收藏',
          name: 'Collection'
        }, {
          title: '生活',
          name: 'Life'
        }, {
          title: '创作历程',
          name: 'Progress'
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    changeModule (index, ComponentName) {
      this.currentNavItem = index
      this.currentTabComponent = ComponentName
    }
  },
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Footer: () => import('@/components/Footer.vue'),
    homePage: () => import('./homePage.vue'),
    Data: () => import('./Data.vue'),
    Collection: () => import('./Collection.vue'),
    Life: () => import('./Life.vue'),
    Recommend: () => import('./Recommend.vue'),
    Progress: () => import('./Progress.vue')
  }
}
</script>

<style scoped lang="stylus">
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
  .active
    border-bottom black 2px solid
    color black
</style>
