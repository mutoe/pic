<template lang="pug">

.page
  .container
    el-row(type='flex', justify='center')
      h1 用户登陆

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-form(:model='formLogin', :rules='rules', ref='formLogin')
          el-form-item(prop='email')
            el-input(v-model='formLogin.email', type='email', placeholder='Email', clearable)
          el-form-item(prop='password')
            el-input(v-model='formLogin.password', type='password', placeholder='密码', clearable)
          el-form-item
            el-checkbox(v-model='formLogin.remember') 记住我 #[small 请不要再公用电脑勾选此选项]

          el-form-item.buttons
            el-button.btn-login(type='primary', @click='onSubmit', :loading='btnLoading') 登 陆
            el-button(type='text', @click=`$router.push({ name: 'Register' })`) 去注册
            //- el-button(type='text', @click=`$router.push({ name: 'ResetPassword' })`) 忘记密码 ?

</template>

<script>
import { validator } from '@/utils'

// 解构待验证字段
const { email, password } = validator.fields

export default {
  data () {
    return {
      formLogin: {
        email: 'testuser@mutoe.com',
        password: '123456',
        remember: false
      },
      rules: { email, password },
      btnLoading: false
    }
  },
  methods: {
    onSubmit () {
      this.$refs['formLogin'].validate(valid => {
        if (!valid) return
        const postData = Object.assign({}, this.formLogin)
        this.postForm(postData)
      })
    },
    postForm (postData) {
      this.btnLoading = true
      this.$http.post('/api/auth/login', postData)
        .then(this.onSuccess)
        .catch(this.onError)
        .finally(() => {
          this.btnLoading = false
        })
    },
    onSuccess (res) {
      const { email, token } = res.data
      this.$store.dispatch('Login', { email, token })
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      this.$router.replace('/')
      this.$message.success({
        message: `😙 登陆成功`,
        iconClass: 'none',
        customClass: 'el-message--success'
      })
    },
    onError (err) {
      console.warn(err.response)
      const { status, data } = err.response
      let message = ''
      switch (status) {
        case 500: message = '服务器出错啦'; break
        case 400: message = data.message; break
      }
      this.$message.error({
        message: `🙄 ${message}`,
        iconClass: 'none',
        customClass: 'el-message--error'
      })
    }
  }
}

</script>

<style lang="stylus" scoped>

.page

  .el-row
    margin $md 0

  .buttons
    .el-button
      margin-right $sm

    .btn-login
      width 10em

  .el-form
    small
      color $color-text-secondary

</style>
