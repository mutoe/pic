const Koa = require('koa')
const middlewares = require('@/app/middlewares')
const request = require('supertest')
const router = require('@/app/routes')

const app = new Koa()

middlewares(app)
app.use(router.routes())

const http = request(app.listen())

describe('Mount the routing', () => {
  describe('POST /api/auth/register', () => {
    it('should be return 400 without payload', async () => {
      await http.post('/auth/register')
        .expect(400)
    })
    it('should be return 400 with invalid payload', async () => {
      await http.post('/auth/register')
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
