const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const request = require('supertest')
const router = require('../../server/routes')

const app = new Koa()

app.use(BodyParser())
app.use(router.routes())

const http = request(app.listen())

describe('Mount the routing', () => {
  describe('POST /auth/user', () => {
    it('should be return 400 without payload', async () => {
      await http.post('/auth/user')
        .expect(400)
    })
    it('should not be return 404 or 400 with valid payload', async () => {
      await http.post('/auth/user')
        .send({ username: 'mutoe' })
        .then(res => {
          expect(res.status).not.toBe(404)
          expect(res.status).not.toBe(400)
        })
    })
  })

  describe('GET /auth/user/:user_id', () => {
    it('should be return 200 with valid param "user_id"', async () => {
      await http.get('/auth/user/123')
        .expect(200)
    })
    it('should be return 400 with param "user_id" < 0', async () => {
      await http.get('/auth/user/sdf')
        .expect(400)
    })
    it('should be return 404 without param "user_id"', async () => {
      await http.get('/auth/user')
        .expect(404)
    })
  })
})

afterAll(() => {
  app.close()
})
