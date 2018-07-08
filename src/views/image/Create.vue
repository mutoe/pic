<template lang="pug">

.page.image.create
  section.upload-wrap.dark
    el-upload.upload(drag, multiple
        accept='image/*'
        :action='oss.host'
        :data='oss'
        :limit='upload.limit'
        :list-type='upload.listType'
        :file-list='upload.list'
        :before-upload='beforeUpload'
        :on-change='onUploadChange'
        :on-preview='handlePictureCardPreview'
        :on-success='onUploadSuccess'
        :on-error='onUploadError')
      i.el-icon-upload

    .el-upload__text
      | 将文件拖到方框内，或点击方框上传 #[br]
      | 每张图片最大 8M，支持 JPEG GIF PNG #[br]
      | 每次最多上传 {{ upload.limit }} 张, 共 30M 以下 #[br]

  el-row(type='flex', justify='center')
    el-col.form-wrap(:xl='8', :lg='10', :md='16')

      el-form(ref='form', :model='form')
        el-form-item(label='标题')
          el-input(v-model='form.title')
        el-form-item(label='配文')
          el-input(type='textarea', v-model='form.description', :autosize="{ minRows: 4}")
        el-form-item(label='公开范围')
          el-radio-group(v-model='form.scope', size='small')
            el-radio-button(label='all') 公开
            el-radio-button(label='friends', disabled) 仅好友(尚未开放好友功能)

        el-form-item.declare
          | 以下作品禁止投稿。请在投稿之前进行确认
          ul
            li 含有法律规定禁止公开传播的内容.
            li 含有露骨、诱惑、教唆等内容的图片或文字.
            li 散布谣言、广告、诽谤等内容的图片或文字.
          | 违反作品投稿利用规则的用户，将会被停止投稿作品公开，停止账号使用。 #[br]
          //- | TimeImage 使⽤条款 #[br]

        el-form-item(size='large', style='text-align: center;')
          el-button.submit(type='primary', @click='submit') 投 稿

  el-dialog(:visible.sync='dialog.visible')
    template(slot='title') {{ dialog.title }}
    img(:alt='dialog.title', :src='dialog.imageUrl')

</template>

<script>
export default {
  data () {
    return {
      oss: {
        key: '',
        dirPath: '',
        OSSAccessKeyId: '',
        policy: '',
        Signature: '',
        host: '',
        success_action_status: 200,
        callback: '',
      },
      upload: {
        accept: '',
        limit: 100,
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
        scope: 'all',
      },
    }
  },
  mounted () {
    // 请求 oss 签名
    this.ossSign()
  },
  methods: {
    // 请求 oss 签名
    ossSign () {
      this.$http.get('/api/auth/ossSign')
        .then(res => Object.assign(this.oss, res.data))
        .catch(this.onError)
    },

    // 上传前检查
    beforeUpload (file) {
      if (file.type.split('/')[0] !== 'image') {
        this.$message.error('文件类型错误')
        return false
      }
      if (file.size > 8 * 1024 * 1024) {
        this.$message.error('单个文件超过 8 M')
        return false
      }

      // 生成文件名
      const fileExt = file.name.split('.').pop()
      const randomString = (new Date().getTime() + Math.random()).toString(36).replace(/\./, '')

      this.oss.key = this.oss.dirPath + randomString + '.' + fileExt
      return true
    },

    onUploadSuccess (res, file, fileList) {
      const filePath = res.result.filename
      file.path = filePath
      file.filename = filePath.split('/').pop()
    },
    onUploadError (err, file, fileist) {
      console.warn(err)
      this.$message.error('出错了')
    },

    // 更新文件列表
    onUploadChange (file, fileList) {
      this.upload.list = fileList
    },

    // 预览
    handlePictureCardPreview (file) {
      this.dialog.imageUrl = this.oss.host + file.path
      this.dialog.title = file.name
      this.dialog.visible = true
    },

    // 提交表单
    submit () {
      if (this.upload.list.length === 0) return this.$message.error('请至少上传一张图片')
      const postData = Object.assign({}, this.form, { list: this.upload.list })
      this.$http.post('/api/image', postData)
        .then(this.onSubmitSuccess)
        .catch(this.onError)
    },
    onSubmitSuccess (res) {
      const { image } = res.data
      this.$message.success(`创建成功, 即将跳转...`)
      setTimeout(() => {
        this.$router.push({ name: 'ImageRead', params: { id: image._id } })
      }, 1200)
    },
    onError (err) {
      console.warn(err)
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
