<template lang="pug">

.page
  .container
    el-row(type='flex', justify='center')
      h1 用户登陆

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-form(:model='formLogin', :rules='rules', ref='formLogin')
          el-form-item(prop='email')
            el-input(v-model='formLogin.email', placeholder='Email', clearable)
          el-form-item(prop='password')
            el-input(v-model='formLogin.password', placeholder='密码', clearable)
          el-form-item
            el-checkbox(v-model='formLogin.remember') 记住我 #[small 请不要再公用电脑勾选此选项]

          el-form-item.buttons
            el-button.btn-login(type='primary', @click='onLogin') 注 册
            el-button(type='text', @click=`$router.push({ name: 'Register' })`) 已有账号, 去登陆
            //- el-button(type='text', @click=`$router.push({ name: 'ResetPassword' })`) 忘记密码 ?

</template>

<script>
export default {
  data () {
    return {
      formLogin: {
        email: '',
        username: '',
        password: '',
        remember: false,
      },
      rules: validator,
    }
  },
  methods: {
    onLogin () {
      console.log(this.formLogin)
      this.$message(JSON.stringify(this.formLogin))
    },
  },
}

const validator = {
  email: [
    { required: true, message: '请输入电子邮件地址', trigger: 'submit' },
  ],
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
