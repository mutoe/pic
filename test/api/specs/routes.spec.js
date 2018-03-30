const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const request = require('supertest')
const router = require('@/app/routes')

const app = new Koa()

app.use(BodyParser())
app.use(router.routes())

const http = request(app.listen())

describe('Mount the routing', () => {
  describe('POST /auth/register', () => {
    it('should be return 400 without payload', async () => {
      await http.post('/api/auth/register')
        .expect(400)
    })
    it('should be return 400 with invalid payload', async () => {
      await http.post('/api/auth/register')
        .send({ username: 'mutoe' })
        .then(res => {
          expect(res.status).toBe(400)
        })
    })
  })
})

afterAll(() => {
  app.close()
})
