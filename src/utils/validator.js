
// 字段
export const fields = {
  email: [
    { required: true, message: '请输入 Email 地址', trigger: 'blur' },
    { type: 'email', message: '这不是一个有效的 Email 地址', trigger: 'blur' }
  ],

  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { pattern: /^[0-9a-z_-]+$/i, message: '用户名只允许含有 数字、字母、"-" 和 "_"' },
    { min: 5, max: 16, message: '用户名长度需要在 5 到 16 个字符' }
  ],

  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度需要在 6-16 字符' },
    { validator (rule, value, callback) {
      if (value.match(/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/)) callback()
      else callback(new Error('密码中有非法字符'))
    } }
  ],

  agreement: [
    { required: true, type: 'boolean', message: '请同意' },
    { validator (rule, value, callback) {
      if (value === true) callback()
      else callback(new Error('请勾选我同意'))
    } }
  ]
}
