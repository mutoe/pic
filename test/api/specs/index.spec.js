const request = require('supertest')
const app = require('@/index.js')

app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  await next()
})

const http = request(app.listen())

describe('App server', () => {
  it('should be work normally', () => {
    http.get('/')
      .expect(200)
      .expect('hello world')
  })
})

afterAll(() => {
  app.close()
})
