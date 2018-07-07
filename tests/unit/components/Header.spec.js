import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from '@/components/Header'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Header.vue', () => {
  it('is an Vue instance', () => {
    const wrapper = shallowMount(Header, {
      localVue,
      computed: {
        token: () => undefined,
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
