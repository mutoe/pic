<template lang="pug">

.page.image.create
  section.upload-wrap.dark
    el-upload.upload(drag, multiple
        :action='upload.url'
        :headers='upload.headers'
        :list-type='upload.listType'
        :file-list='upload.list'
        :on-change='onUploadChange'
        :on-preview='handlePictureCardPreview'
        :on-success='onUploadSuccess'
        :on-error='onUploadError')
      i.el-icon-upload

    .el-upload__text
      | 将文件拖到方框内，或点击方框上传 #[br]
      | 每张图片最大 8M，支持 JPEG GIF PNG #[br]
      | 每次最多上传 100 张, 共 30M 以下 #[br]

  el-row(type='flex', justify='center')
    el-col.form-wrap(:xl='8', :lg='10', :md='16')

      el-form(ref='form', :model='form')
        el-form-item(label='标题')
          el-input(v-model='form.title')
        el-form-item(label='配文')
          el-input(type='textarea', v-model='form.description', :autosize="{ minRows: 4}")
        el-form-item(label='公开范围')
          el-radio-group(v-model='form.scope', size='small')
            el-radio-button(:label='0') 公开
            el-radio-button(:label='1', disabled) 仅好友(尚未开放好友功能)

        el-form-item.declare
          | 以下作品禁止投稿。请在投稿之前进行确认
          ul
            li 含有法律规定禁止公开传播的内容.
            li 含有露骨、诱惑、教唆等内容的图片或文字.
            li 散布谣言、广告、诽谤等内容的图片或文字.
          | 违反作品投稿利用规则的用户，将会被停止投稿作品公开，停止账号使用。 #[br]
          //- | TimeImage 使⽤条款 #[br]

        el-form-item(size='large', style='text-align: center;')
          el-button.submit(type='primary') 投 稿

  el-dialog(:visible.sync='dialog.visible')
    template(slot='title') {{ dialog.title }}
    img(alt='', :src='dialog.imageUrl')

</template>

<script>
export default {
  data () {
    return {
      upload: {
        url: '/api/image/upload',
        headers: {
          'Authorization': `Bearer ${this.$store.getters.token}`,
        },
        list: [],
        listType: 'picture-card',
      },
      dialog: {
        imageUrl: '',
        title: '',
        visible: false,
      },
      form: {
        title: '',
        description: '',
        scope: 0,
      },
    }
  },
  methods: {
    onUploadChange (file, fileList) {
      this.upload.list = fileList
    },
    handlePictureCardPreview (file) {
      this.dialog.imageUrl = file.url
      this.dialog.title = file.name
      this.dialog.visible = true
    },
    onUploadSuccess (res, file, fileList) {
      file.filename = res.filename
      console.log(this.upload.list)
    },
    onUploadError (err, file, fileist) {
      console.warn(err)
      this.$message.error('出错了')
    },
  },
}
</script>

<style lang="stylus" scoped>

.page
  margin-top 0

.upload-wrap
  background-color #434343
  padding $xs

.upload
  text-align center

.el-icon-upload
  color #fff
  margin 0

.el-upload__text
  color #fff
  font-size .8em
  line-height 1.5
  text-align center
  margin-top $xs

.form-wrap
  margin-top $md

.declare
  padding $xs $sm
  border 1px solid $color-warning
  border-radius 4px

  ul
    list-style-type circle
    margin-left 1.4em

.submit
  width 10em

</style>

<style lang="stylus">

.page.image.create

  .el-upload
  .el-upload-dragger
    width 100%

  .el-upload-dragger
    display flex
    justify-content center
    align-items center
    background-color transparent
    border none

  .el-upload--picture-card
    width inherit
    background transparent

    .el-upload-dragger
      flex-direction column
      width 150px
      height @width

      .el-upload__text
        display none

  .el-dialog__body
    text-align center

  .declare
    > .el-form-item__content
      line-height 1.8
      font-size .8em

  .el-upload-list--picture-card
    .el-upload-list__item-thumbnail
      width auto
      height auto

</style>
