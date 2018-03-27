const config = require('../../server/config')

describe('server config', () => {
  describe('port', () => {
    const port = config.port

    it('should be a number', () => {
      expect(typeof port).toBe('number')
      expect(Number.isInteger(port)).toBe(true)
    })

    it('should be in a valid range', () => {
      expect(port > 1024).toBe(true)
      expect(port < 65535).toBe(true)
    })
  })
})
