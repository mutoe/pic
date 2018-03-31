<template lang="pug">

.page
  .container
    el-row(type='flex', justify='center')
      h1 用户注册

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-alert(
          title='请注意, 在测试期间您的数据可能会出现错乱甚至丢失的情况. 如果您在测试期间遇到了任何问题, 可以在页面底部找到我的联系方式.'
          type='warning')

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-form(:model='formRegister', :rules='rules', ref='formRegister')
          el-form-item(prop='email', :error='fieldErr.email')
            el-input(v-model='formRegister.email',
                type='email',
                placeholder='Email',
                :autofocus='true',
                clearable)

          el-form-item(prop='username', :error='fieldErr.username')
            el-input(v-model='formRegister.username', placeholder='用户名', clearable)
          el-form-item(prop='password')
            el-input(v-model='formRegister.password', type='password', placeholder='密码', clearable)
          el-form-item(prop='agreement')
            el-checkbox(v-model='formRegister.agreement') 我同意

          el-form-item.buttons
            el-button.btn-register(type='primary', @click='onSubmit', :loading='btnLoading') 注册
            el-button(type='text', @click=`$router.push({ name: 'Login' })`) 已有账号, 去登陆

</template>

<script>
import { validator } from '@/utils'

// 解构待验证字段
const { email, username, password, agreement } = validator.fields

export default {
  data () {
    return {
      formRegister: {
        email: 'testuser@mutoe.com',
        username: 'testuser',
        password: '123456',
        agreement: true,
      },
      rules: { email, username, password, agreement },
      fieldErr: {},
      btnLoading: false,
    }
  },
  methods: {
    onSubmit () {
      // 表单验证
      this.$refs['formRegister'].validate(valid => {
        if (!valid) return
        const postData = Object.assign({}, this.formRegister)
        this.postForm(postData)
      })
    },
    postForm (postData) {
      this.btnLoading = true
      this.fieldErr = {}
      this.$http.post('/api/auth/register', postData)
        .then(this.onSuccess)
        .catch(this.onError)
        .finally(() => {
          this.btnLoading = false
        })
    },
    onSuccess (res) {
      const { data } = res
      this.$message.success('注册成功')
      localStorage.setItem('email', data.email)
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
      this.$router.replace('/')
    },
    onError (err) {
      console.warn(err.response)
      const { status, data } = err.response
      let message = ''
      switch (status) {
        case 500: message = '服务器出错啦'; break
        case 400:
          if (data.type === 'field_exist') {
            this.fieldErr[data.field] = data.message
          }
          message = data.message
          break
      }
      this.$message.error({
        message: `🙄 ${message}`,
        iconClass: 'none',
        customClass: 'el-message--error',
      })
    },
  },
}

</script>

<style lang="stylus" scoped>

.page
  .el-row
    margin $md 0

  .buttons
    margin-top $md

    .el-button
      margin-right $sm

    .btn-register
      width 10em
      margin-right $sm

  .el-form
    small
      color $color-text-secondary

</style>
