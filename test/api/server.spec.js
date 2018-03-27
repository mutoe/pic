const server = require('../../server/index').listen()
const request = require('supertest')

let http = request(server)

describe('GET /', () => {
  it('should be return 200.', async () => {
    const res = await http.get('/')
    expect(res.status).toBe(200)
  })

  it('should be return correct response body.', async () => {
    const res = await http.get('/')
    expect(res.text).toBe('hello world')
  })
})

describe('GET /foo', () => {
  it('should be return 404.', async () => {
    const res = await http.get('/foo')
    expect(await res.status).toBe(404)
  })
})

describe('POST /', () => {
  it('should be return 404.', async () => {
    const res = await http.post('/')
    expect(await res.status).toBe(404)
  })
})

afterAll(() => {
  server.close()
})
