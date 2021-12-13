import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Forum from '@/pages/Forum.vue'
import AppHead from '@/components/AppHead.vue'
import { store } from '@/helpers/testingHelpers'

const mockRoute = {
  params: {
    id: 1
  },
  query: {
    page: '2'
  }
}

const options = {
  props: {
    id: '1'
  },
  global: {
    plugins: [store],
    components: {
      'router-link': RouterLinkStub,
      'v-pagination': {},
      AppHead
    },
    mocks: {
      $route: mockRoute
    }
  },
  methods: {
    loadInitialData () { }
  }
}

describe('Forum show view page', () => {
  it('renders ThreadList component', () => {
    const wrapper = shallowMount(Forum, options)
    expect(wrapper.findComponent({ name: 'ThreadList' }).exists()).toBe(true)
  })

  it('renders AppHead component', () => {
    const wrapper = shallowMount(Forum, options)
    expect(wrapper.findComponent({ name: 'AppHead' }).exists()).toBe(true)
  })
})
