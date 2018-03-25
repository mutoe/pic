<template lang="pug">

footer
  .container
    div
      img.logo(src='/static/images/logo_white.png')

    ul.copyright
      li 一个普通的图片分享平台
      li
      li
        | coding by #[a(href='//mutoe.com', title='木头的博客') mutoe]

</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style lang="stylus" scoped>

$footer-height = 300px

footer
  height $footer-height
  background-color $color-background-dark
  color $color-white

.container
  height 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

.logo
  width 400px

ul.copyright
  display flex
  margin-top 48px
  flex-direction column
  justify-content center

  li
    margin 4px
    text-align center

</style>
