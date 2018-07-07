import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer.vue', () => {
  it('is an Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
