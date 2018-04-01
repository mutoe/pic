import Vue from 'vue'
import Index from '@/views/home/Index'

describe('page home Index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('Pending content.')
  })
})
