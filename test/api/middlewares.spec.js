const Koa = require('koa')
const Router = require('koa-router')
const request = require('supertest')
const middlewares = require('../../server/middlewares')

const app = new Koa()
const router = new Router()

middlewares(app)

router.get('/', (ctx, next) => {
  ctx.body = 'hello world'
})
router.post('/', (ctx, next) => {
  const payload = ctx.request.body
  if (Object.keys(payload).length === 0) ctx.throw(400)
  ctx.body = payload
})
app.use(router.routes())

const http = request(app.listen())

describe('Mount the middlewares', () => {
  it('should work normally', async () => {
    await http.get('/')
      .expect('hello world')
  })

  it('mounted the koa-bodyparser middleware', async () => {
    const payload = { foo: 'bar' }
    await http.post('/')
      .send(payload)
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(payload)
      })
  })

  it('should be return header with "X-Powered-By" field', async () => {
    await http.get('/')
      .then(res => {
        expect(res.header['x-powered-by']).toBe('Koa2')
      })
  })
})

afterAll(() => {
  app.close()
})
