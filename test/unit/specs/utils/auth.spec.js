import * as auth from '@/utils/auth'

describe('utils auth', () => {

  it('getToken()', () => {
    expect(auth.getToken()).toBe(undefined)
  })

  it('getToken()', () => {
    auth.setToken('abc')
    const cookies = document.cookie.split(';').filter(cookie => {
      return cookie.split('=')[0] === 'JWToken'
    })
    expect(cookies[0].split('=')[1]).toBe('abc')
  })

  it('removeToken()', () => {
    document.cookie = 'JWToken=abc'
    auth.removeToken()
    const cookies = document.cookie.split(';').filter(cookie => {
      return cookie.split('=')[0] === 'JWToken'
    })
    expect(cookies.length).toBe(0)
  })
})
