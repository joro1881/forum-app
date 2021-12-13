import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ThreadList from '@/components/ThreadList.vue'
import AppAvatarImg from '@/components/AppAvatarImg.vue'
import AppDate from '@/components/AppDate.vue'
import { store } from '@/helpers/testingHelpers'

function prepareMockOptions (store) {
  const options = {
    props: {
      threads: store.state.threads.items
    },
    global: {
      plugins: [store],
      components: { AppAvatarImg, AppDate, 'router-link': RouterLinkStub }
    },
    methods: {
      postById () {},
      userById () { return { name: 'testName' } }
    }
  }

  return options
}

describe('ThreadList component', () => {
  it('renders title', () => {
    const wrapper = shallowMount(ThreadList, prepareMockOptions(store))

    expect(wrapper.find('h2').text()).toContain('Threads')
  })

  it('renders list of threads', () => {
    const wrapper = shallowMount(ThreadList, prepareMockOptions(store))

    expect(wrapper.findAll('.thread').length).toEqual(2)
  })

  it('renders no list', () => {
    store.state.threads.items = []
    const wrapper = shallowMount(ThreadList, prepareMockOptions(store))

    expect(wrapper.find('em').text()).toContain('No Threads Available')
    expect(wrapper.find('.thread').exists()).toBe(false)
  })
})
