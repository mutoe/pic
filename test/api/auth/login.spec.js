const request = require('supertest')
const app = require('@server/index')

afterEach(() => {
  app.close()
})

describe('Auth Module', () => {
  test('login', async () => {
    const username = 'mutoe'
    const password = '123456'
    const res = await request(app)
      .post('/auth/login')
      .send({ username, password })
    expect(res.body).toEqual({ username, password })
  })

  test('login with password', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'mutoe' })
    expect(res.body).toEqual({ username: 'mutoe' })
  })
})
