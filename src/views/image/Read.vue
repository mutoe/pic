<template lang="pug">

.page.image.read
  el-row.container(type='flex', justify='center')
    el-col.detail(:md='24', :lg='18')
      h1.title
        | {{ detail.title }}
        small.info-id.hidden-sm-and-down \#{{ imageId }}

      .image-wrap(v-if='detail.list.length', @click='lightboxVisible = true')
        .image-card(:class=`{ multi: detail.list.length > 1 }`)
          .image(:style='{backgroundImage: "url(" + $store.state.oss.uri + detail.list[0].filename + ")"}')
        img.placeholder(:src='$store.state.oss.uri + detail.list[0].filename')
      .loading(v-else, v-loading='true')

      .description {{ detail.description }}

  el-dialog.lightbox(:visible.sync='lightboxVisible', :fullscreen='true', center, :title='detail.title')
    el-carousel(indicator-position='outsize', :autoplay='false', arrow='always')
      el-carousel-item(v-for='(image, index) in detail.list', :key='index')
        .image-wrap
          img(:src='$store.state.oss.uri + image.filename')

</template>

<script>
export default {
  data () {
    return {
      imageId: this.$route.params.id,
      detail: {
        title: '',
        description: '',
        list: []
      },
      lightboxVisible: false
    }
  },
  created () {
    this.fetchInfo()
  },
  methods: {
    fetchInfo () {
      this.$http.get(`/api/image/${this.imageId}`)
        .then(res => {
          Object.assign(this.detail, res.data.image)
        })
        .catch(err => console.warn(err))
    }
  }
}
</script>

<style lang="stylus" scoped>

.title
  text-align center

  .info-id
    margin-left $sm
    color $color-text-disabled
    font-size $font-size-large

.loading
  width 100%
  height 70vh

.detail
  .image-wrap
    position relative
    display flex
    justify-content center
    margin $lg auto 0
    cursor pointer
    width 100%

    thumb-border()
      border-radius 4px
      padding $xs
      box-shadow 0 0 $sm rgba(#000, .2)
      background #fff

    img.placeholder
      visibility hidden
      max-width 98vw
      max-height 98vh
      width 100%
      height @width

    .image-card
      // visibility hidden
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      thumb-border()

      .image
        background center no-repeat
        background-size cover
        width 100%
        height 100%

      &.multi

        &::before
        &::after
          content ''
          position absolute
          z-index -1
          top 0
          bottom 0
          left 0
          right 0
          thumb-border()

        &::before
          transform rotateZ(2deg)

        &::after
          transform rotateZ(-1deg)

  .description
    font-size $font-size-middle
    color $color-text-regular
    margin-top $lg
    padding $sm
    line-height 2

</style>

<style lang="stylus">

.page.image.read
  padding $xs

  .lightbox
    .image-wrap
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center

      img
        max-width 100%
        max-height 100%

    .el-dialog
      background-color rgba(#fff, .95)

      .el-dialog__header
        padding 0

        .el-dialog__title
          position absolute
          z-index 10
          left 0
          right 0
          margin $lg
          font-size 28px
          color $color-text-regular

      .el-dialog__body
        padding 0
        height 100%

      .el-dialog__headerbtn
        font-size $xl
        z-index 11

      .el-carousel__arrow
        width 96px
        height @width * 3
        border-radius 4px
        background transparent

        &:hover
          box-shadow 0 0 10px rgba(#000, .1)

        > i
          font-size $xl
          color $color-text-secondary

  .el-carousel
    &
    .el-carousel__container
    .el-carousel__item
      height 100%

</style>
