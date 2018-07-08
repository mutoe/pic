<template lang="pug">

footer.dark(:class='page')
  .container
    div
      img.logo(src='/images/logo_white.png')

    ul.copyright
      li 一个普通的图片分享平台
      li: a(@click='onMoreClick' href='javascript:;') more

</template>

<script>

// dialog 内容
let dialogHtml = `
<ul>
  <li>Coding by <a href="http://blog.mutoe.com/" target="_blank">mutoe</a>.</li>
  <li>The code is hosted on <a href="https://github.com/mutoe/pic" target="_blank">Github</a> under MIT license.</li>
  <li>Cloud computing service provided by <a href="https://www.aliyun.com/" target="_blank">Aliyun</a>.</li>
  <li><a href="mailto:mutoe@foxmail.com?body=From http://pic.mutoe.com/ footer">Send Email to me</a>.</li>
</ul>
`

export default {
  name: 'Footer',
  props: {
    page: { type: String, default: '' },
  },
  methods: {
    onMoreClick () {
      this.$msgbox({
        title: '更多信息',
        message: dialogHtml,
        dangerouslyUseHTMLString: true,
        customClass: 'info-dialog dark',
        showConfirmButton: false,
        closeOnClickModal: true,
        closeOnPressEscape: true,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>

$footer-height = 140px

footer
  height $footer-height
  background-color $color-background-dark
  color $color-white
  transition .4s

  &.index
    height 300px

    .container
      flex-direction column
      justify-content center

    .copyright
      align-items center
      flex-grow 0

.container
  height 100%
  display flex
  flex-direction row
  justify-content space-around
  align-items center

.logo
  width 400px

ul.copyright
  display flex
  flex-direction column
  justify-content center
  align-items flex-start
  flex-grow .6

  li
    margin 8px 0
    text-align center

</style>

<style lang="stylus">

.el-message-box.info-dialog.dark
  background-color rgba($color-background-dark, 0.8)

  .el-message-box__title
  .el-message-box__content
    color #fff

</style>
