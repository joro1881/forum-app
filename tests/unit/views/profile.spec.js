import { shallowMount } from '@vue/test-utils'
import Profile from '@/pages/Profile.vue'
import AppInfiniteScroll from '@/components/AppInfiniteScroll.vue'
import { store } from '@/helpers/testingHelpers'

const options = {
  props: {
    edit: false
  },
  global: {
    plugins: [store],
    components: { AppInfiniteScroll }
  },
  methods: {
    fetchUserPosts () { }
  }
}

describe('Profile view page', () => {
  it('renders UserProfileCard component', () => {
    const wrapper = shallowMount(Profile, options)
    expect(wrapper.findComponent({ name: 'UserProfileCard' }).exists()).toBe(true)
  })

  it('renders UserProfileCardEditor component', () => {
    options.props.edit = true
    const wrapper = shallowMount(Profile, options)
    expect(wrapper.findComponent({ name: 'UserProfileCardEditor' }).exists()).toBe(true)
  })

  it('renders PostList component', () => {
    const wrapper = shallowMount(Profile, options)
    expect(wrapper.findComponent({ name: 'PostList' }).exists()).toBe(true)
  })

  it('renders AppInfiniteScroll component', () => {
    const wrapper = shallowMount(Profile, options)
    expect(wrapper.findComponent({ name: 'AppInfiniteScroll' }).exists()).toBe(true)
  })
})
