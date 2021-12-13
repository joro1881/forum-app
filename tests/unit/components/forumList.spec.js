import { shallowMount, mount, RouterLinkStub } from '@vue/test-utils'
import ForumList from '@/components/ForumList.vue'
import { store } from '@/helpers/testingHelpers'

function prepareMockOptions (store) {
  const options = {
    props: {
      forums: [{}, {}, {}],
      categoryId: 'randomId'
    },
    global: {
      plugins: [store],
      components: { 'router-link': RouterLinkStub }
    },
    methods: {
      forumThreadsWord () {}
    }
  }

  return options
}

describe('ForumList component', () => {
  it('renders title and router', () => {
    const wrapper = mount(ForumList, prepareMockOptions(store))

    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.findComponent(RouterLinkStub).text()).toContain('Forums')
  })

  it('renders list of forums', () => {
    const wrapper = shallowMount(ForumList, prepareMockOptions(store))

    expect(wrapper.findAll('.forum-details').length).toEqual(3)
  })
})
