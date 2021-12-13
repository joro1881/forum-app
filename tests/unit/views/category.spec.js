import { shallowMount } from '@vue/test-utils'
import Category from '@/pages/Category.vue'
import { store } from '@/helpers/testingHelpers'

const options = {
  props: {
    id: '1'
  },
  global: {
    plugins: [store]
  },
  methods: {
    loadInitialData () {},
    getForumsForCategory () {
      return []
    }
  }
}

describe('Category view page', () => {
  it('renders ForumList component', () => {
    const wrapper = shallowMount(Category, options)

    expect(wrapper.findComponent({ name: 'ForumList' }).exists()).toBe(true)
  })
})
