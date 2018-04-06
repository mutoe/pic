<template lang="pug">

.page.image.read
  el-row.container(type='flex', justify='center')
    el-col.detail(:span='24')
      h1
        | {{ detail.title }}
        small.info-id.hidden-sm-and-down \#{{ imageId }}

      .image-wrap(v-if='detail.list.length', :class=`{ multi: detail.list.length > 1 }`, @click='lightboxVisible = true')
        img.image(:src='"/uploads/images/" + detail.list[0].filename')

      .description {{ detail.description }}

  el-dialog.lightbox(:visible.sync='lightboxVisible', :fullscreen='true', center, :title='detail.title')
    el-carousel(indicator-position='outsize', :autoplay='false', arrow='always')
      el-carousel-item(v-for='(image, index) in detail.list', :key='index')
        .image-wrap
          img(:src='"/uploads/images/" + image.filename')

</template>

<script>
export default {
  data () {
    return {
      imageId: this.$route.params.id,
      detail: {
        title: '',
        description: '',
        list: [],
      },
      lightboxVisible: false,
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
    },
  },
}
</script>

<style lang="stylus" scoped>

.info-id
  margin-left $sm
  color $color-text-placeholder

.detail
  .image-wrap
    display flex
    justify-content center
    margin-top $lg
    cursor pointer

    thumb-border()
      border-radius 4px
      padding $xs
      box-shadow 0 0 $sm rgba(#000, .2)
      background #fff

    .image
      z-index 1
      max-width 98vw
      width 120%
      height @width
      thumb-border()

    &.multi
      position relative

      &::before
      &::after
        content ''
        position absolute
        z-index -1
        top 0
        bottom 0
        left -10%
        width 120%
        thumb-border()

      &::before
        transform rotateZ(1deg)

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
