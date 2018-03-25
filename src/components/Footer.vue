<template lang="pug">

footer
  .container
    el-row
      el-col(:md='4')
        h1 天佑青春 激荡年华

    el-row
      el-col(:lg='8', :md='12', align='center')
        p.
          Copyright 2015 TianYou Network Studio. All Right Reserved .
          #[i.fa.fa-weibo]
          #[a(href='#') @木头] asdfas

</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style lang="stylus" scoped>

// 通用页脚
.footer
  bottom 0
  margin-top 48px
  padding 36px 16px
  width 100%
  background-color #1B1C1D
  color #CCE2FF
  line-height 28px
  transition all 0.2s ease 0s

  p
  a
    font-size 13px

  .container
    margin 10px auto
    max-width 1140px

    .slogan
      margin-top 24px
      margin-bottom 48px
      text-align center
      letter-spacing 2px
      font-weight 200

  hr
    margin-top 20px
    margin-bottom 20px
    border-width 1px 0 0
    border-style solid none none
    border-color #E5E5E5 -moz-use-text-color -moz-use-text-color
    -moz-border-top-colors none
    -moz-border-right-colors none
    -moz-border-bottom-colors none
    -moz-border-left-colors none

  .copyright
    margin-top 16px
    padding-left 4em

  .subscrib_us
    margin-top 16px
    padding-left 4em
    line-height 1.53846

  .qrcode
    text-align center

    img
      height 100px

</style>
