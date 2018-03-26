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
            el-button.btn-login(type='primary', @click='onSubmit') 登 陆
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
        email: '',
        password: '',
        remember: false,
      },
      rules: { email, password },
    }
  },
  methods: {
    onSubmit () {
      console.log(this.formLogin)

      // validate 方法返回一个 Promise 对象
      let valid = this.$refs['formLogin'].validate()
      valid.then(() => {
        // post data
        this.$message('数据验证通过, 准备 post')
      }).catch(e => e)
    },
  },
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
