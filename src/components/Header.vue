<template lang="pug">

header
  .topic
    .blur

  .nav
    .container
      div.left
        a.noline(href='/').logo
          img(src="/static/images/logo_400x90.png", alt="时光·印象", title="返回首页")

        a.noline(href='#') 分类

      div.right
        a.noline(href='#') 注册
        a.noline(href='#') 登陆
        a.noline.danger(href='#') 贴图

</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="stylus" scoped>
// 本站导航栏
$nav-height = 42px
$header-height = 720px

header
  position relative
  height $header-height

.nav
  height $nav-height
  background rgba(#fff, 0)
  box-shadow 0 1px 2px rgba(#000, 0)
  font-size 12px
  transition 0.5s

  &:hover
    background rgba(#fff, .4)
    box-shadow 0 1px 2px rgba(#000, 0.1)

    a.danger
      color #fff
      background-color rgb($color-danger)

  .container
    width 1200px
    margin 0 auto
    display flex
    justify-content space-between

    > div
      display flex
      margin 0
      padding 0
      list-style none
      height 100%

      a
      span
        display inline-block
        height $nav-height
        line-height @height
        padding 0 16px
        text-decoration none

      a
        transition .3s

        &:hover:not(.logo)
          background-color rgba(#fff, 0.8)

        &.logo img
          width 200px

.topic
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  z-index -1
  background center 0 / cover no-repeat
  background-image url('/static/images/user_banner.jpg')

  .blur
    position absolute
    height $nav-height
    width 100%
    filter blur(4px)
    background-image @background-image
    background-position center -10px

</style>
