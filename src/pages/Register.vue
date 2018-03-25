<template lang="pug">

.page
  .container
    el-row(type='flex', justify='center')
      h1 用户注册

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-alert(
          title='请注意, 在测试期间您的数据可能会出现错乱甚至丢失的情况. 如果您在测试期间遇到了任何问题, 可以联系我.'
          type='warning')

    el-row(type='flex', justify='center')
      el-col(:lg=12, :md=16, :sm=18, :xs=24)
        el-form(:model='formRegister')
          el-form-item
            el-input(v-model='formRegister.email', placeholder='Email')
          el-form-item
            el-input(v-model='formRegister.username', placeholder='用户名')
          el-form-item
            el-input(v-model='formRegister.password', placeholder='密码')
          el-form-item
            el-checkbox(v-model='formRegister.access') 我同意

          el-form-item
            el-button.btn-register(type='primary', @click='onSubmit') 注 册
            el-button(type='text', @click=`$router.push({ name: 'Login' })`) 已有账号, 去登陆

</template>

<script>
export default {
  data () {
    return {
      formRegister: {
        email: '',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit () {
      console.log(this.formRegister)
      this.$message(JSON.stringify(this.formRegister))
    },
  },
}
</script>

<style lang="stylus" scoped>

.el-row
  margin $md 0

.btn-register
  width 10em
  margin-right $sm

</style>
