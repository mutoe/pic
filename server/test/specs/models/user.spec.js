const UserModel = require('@/app/models/user')

describe('Model user', () => {
  const user = new UserModel({
    email: 'hello@test.com',
    username: 'hello',
    password: '123456',
  })

  it('should encrypt the password', () => {
    expect(user.password).not.toBe('123456')
  })
})
