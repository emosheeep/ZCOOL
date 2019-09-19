<template>
  <div class="all">
    <div class="list-content">
      <div class="content-header">
        <p>共推荐{{cards.length}}组创作</p>
      </div>
      <div class="content-body">
        <div class="card-item" v-for="(card,index) in cards" :key="index">
          <el-image :src="card.image" fit="cover" class="card-image">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="card-body">
            <el-link :underline="false" :title="card.title">{{card_title(index)}}<img src="/static/images/recommend.svg"></el-link>
            <p>{{card.type_info}}</p>
            <div class="card-body-data">
              <span :title="'共'+card.browse.views+'次浏览'">{{card.browse.views}}</span>
              <span :title="'共'+card.browse.comment+'条评论'">{{card.browse.comment}}</span>
              <span :title="'共'+card.browse.zan+'个赞'">{{card.browse.zan}}</span>
            </div>
<!--            浮层-->
            <div class="detail-panel" v-if="index === current"
                 @mouseover="openPanel(index)" @mouseout="closePanel">
              <el-avatar :src="card.author.avatar" :title="card.author.name"
                         :size="80"
                         style="margin-top: 10px;cursor: pointer">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-avatar>
              <p>
                {{card.author.name}}
                <img src="/static/images/honor_gogoup.svg">
                <img src="/static/images/honor_tuijian_designer.svg">
              </p>
              <p>{{card.author.home}}&nbsp;|&nbsp;{{card.author.work}}</p>
              <div id="panel-data">
                  <div>
                    <p>关注</p>
                    <el-link :underline="false">{{card.author.attention}}</el-link>
                  </div>
                  <div>
                    <p>粉丝</p>
                    <el-link :underline="false">{{card.author.fans}}</el-link>
                  </div>
              </div>
              <div class="panel-button">
                <el-button type="warning">关注</el-button>
                <el-button>私信</el-button>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div>
              <el-avatar class="avatar" :size="24" fit="cover"
                         :src="card.author.avatar"
                         :title="card.author.name"
                         @mouseover.native="openPanel(index)"
                         @mouseout.native="closePanel"
              ></el-avatar>
              <el-link :underline="false"
                       :title="card.author.name">
                {{card.author.name}}
              </el-link>
              <p :title="card.time">{{card.time}}</p>
            </div>
          </div>
        </div>
<!--        占位（space-between）-->
<!--        eslint-disable-next-line-->
        <div class="card-item" style="box-shadow: none" v-for="n in 5-cards.length%5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      current: '',
      timeoutflag: null
    }
  },
  methods: {
    openPanel (index) {
      clearTimeout(this.timeoutflag)// 结束未完成的timeout事件，防止再次打开时自动关闭
      this.current = index
    },
    closePanel () {
      // 防止事件频繁出发
      clearTimeout(this.timeoutflag) // 结束上次未完成的定时事件
      this.timeoutflag = setTimeout(() => {
        this.current = -1
      }, 700)
    }
  },
  computed: {
    // 控制字符长度,使用JavaScript闭包传参
    card_title () {
      return function (index) {
        let title = this.cards[index].title
        if (title.length > 11) {
          return title.substr(0, 11) + '...'
        } else return title
      }
    },
    cards () {
      return this.$store.state.list
    }
  }
}
</script>

<style scoped lang="stylus">
  .all
    background-color white
  .list-content
    background-color rgb(244,244,244)
  .content-header p
    font-size 14px
    color grey
    text-align left
    padding 15px 0
    margin 0 auto
    width 1130px
  .content-body
    display flex
    justify-content space-between
    flex-wrap wrap
    margin 0 auto
    width 1130px
    .card-item
      position relative
      width 210px
      height 300px
      margin-bottom 30px
      box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      border-radius 5px
      .card-image
        border-radius 5px 5px 0 0
        cursor pointer
        &:hover
          opacity 0.8
      .card-body
        padding 0 11px
        height 85px
        a
          text-align left
          font-size 14px
          display block
          &:hover
            color rgb(211,111,22)
          img
            float right
            margin-top 2px
        p:nth-child(2)
          color rgb(187,187,187)
          text-align left
          font-size  12px
        .card-body-data
          display flex
          justify-content space-between
          color rgb(187,187,187)
          font-size 14px
          // 公用样式
          same(img)
            display inline-block
            vertical-align top
            margin 2px 5px 0 0
            content url("/static/images/"+img)
          span:nth-child(1)
            &:before
              same("card-liulan.svg")
          span:nth-child(2)
            &:before
              same("card-pinglun.svg")
          span:nth-child(3)
            &:before
              same("card-zan.svg")
        .detail-panel
          width 210px
          height 252px
          display block
          position absolute
          left 0
          top 0
          background-color white
          border-radius 5px
          box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
          p:nth-child(2)
            font-size 20px
            text-align center
            font-weight bold
            width 100%
            color black
            margin 0
            cursor pointer
            img
              height 20px
              weight 20px
            &:hover
              color rgb(211,111,22)
          p:nth-child(3)
            font-size 12px
            color rgb(187,187,187)
            margin 0
          #panel-data
            display flex
            width 100%
            margin 5px auto
            div
              width 50%
              display inline-block
              p
                color grey
                font-size 13px
                margin 3px auto
              a
                font-weight bold
                text-align center
                display block
                font-size 15px
            div:nth-child(1)
              position relative
              &::after
                content ""
                width 1px
                height 30px
                border-right 1px solid grey
                position absolute
                right 0
                top 20%
          .panel-button
            button
              width 80px
              span
                &:before
                  content ""
          &::after
            content ""
            border 8px solid
            border-color white transparent transparent transparent
            position absolute
            bottom -15px
            left 29px
      .card-footer
        height 50px
        padding 0 16px
        div
          display flex
          transform translateY(50%)
          img
            cursor pointer
          span
            font-size 14px
            margin-left 10px
            &:hover
              color rgb(211,111,22)
          p
            margin 0 0 0 auto
            font-size 12px
            line-height 24px
            color rgb(187,187,187)
</style>
