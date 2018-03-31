import Vue from 'vue'
import Footer from '@/components/Footer'

describe('component Footer.vue', () => {
  const Constructor = Vue.extend(Footer)
  const vm = new Constructor().$mount()

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('img.logo')).not.toBeNull()
    expect(vm.$el.querySelector('.copyright a').hasAttributes('href')).toEqual(true)
  })

  it('should popup information window when click "more" button', () => {
    vm.$el.querySelector('.copyright a').click()
    const wait = new Promise(resolve => setTimeout(resolve, 2))
    return wait.then(() => {
      const message = document.querySelector('.el-message-box__title')
      expect(document.querySelector('.el-message-box')).not.toBeNull()
      expect(message.textContent).toBe('更多信息')
    })
  })
})
