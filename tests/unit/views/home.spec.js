import { shallowMount } from '@vue/test-utils'
import PageHome from '@/pages/Home.vue'
import { store } from '@/helpers/testingHelpers'

const options = {
  global: {
    plugins: [store]
  },
  methods: {
    loadInitialData () {}
  }
}

describe('Home view page', () => {
  it('renders title', () => {
    const wrapper = shallowMount(PageHome, options)
    const msg = 'Welcome to the Forum'

    expect(wrapper.find('h1').text()).toContain(msg)
  })

  it('renders CategoryList component', () => {
    const wrapper = shallowMount(PageHome, options)

    expect(wrapper.findComponent({ name: 'CategoryList' }).exists()).toBe(true)
  })
})
