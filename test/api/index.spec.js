const request = require('supertest')
const app = require('../../server/index.js')

app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  await next()
})

const http = request(app.listen())

describe('test index.js', () => {
  it('should be work', async () => {
    await http.get('/')
      .expect(200)
      .expect('hello world')
  })
})

afterAll(() => {
  app.close()
})
