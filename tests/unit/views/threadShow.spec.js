import { shallowMount, mount, RouterLinkStub } from '@vue/test-utils'
import ThreadShow from '@/pages/ThreadShow.vue'
import PostList from '@/components/PostList.vue'
import AppDate from '@/components/AppDate.vue'
import fa from '@/plugins/FontAwesome'
import AppAvatarImg from '@/components/AppAvatarImg.vue'
import PostEditor from '@/components/PostEditor.vue'
import { store, mockRoute, mockRouter } from '@/helpers/testingHelpers'

const mockThread = { id: '1', title: 'awesome title', userId: '33', posts: [{}], publishedAt: 1111 }

const mockMethods = {
  fetchPostsWithUsers () { },
  addPost () { },
  loadInitialData () { },
  accessGetter () { return this.$store.state.threads.items[0] },
  userById () { return {} },
  toggleEditMode () { }
}

const mockGlobal = {
  plugins: [store, fa],
  mocks: {
    $router: mockRouter,
    $route: mockRoute
  },
  components: { 'router-link': RouterLinkStub, AppDate, AppAvatarImg }
}

const options = {
  props: {
    id: '1'
  },
  global: mockGlobal,
  components: { PostList, PostEditor },
  methods: mockMethods
}

describe('ThreadShow view page', () => {
  it('renders auth router-link button only', () => {
    const wrapper = shallowMount(ThreadShow, options)
    const links = wrapper.findAllComponents(RouterLinkStub)

    expect(links[0].props().to.name).toBe('ThreadEdit')
    expect(typeof links[1] === 'undefined').toBe(true)
  })

  // it('renders guest router-link buttons only', () => {
  //   // const updatedStore = { store }
  //   // store.state.auth.items = [null]
  //   // store.state.users.items = [null]
  //   const option = {
  //     ...options,
  //     // global: { ...mockGlobal, plugins: [store, fa] },
  //     methods: { ...mockMethods /* accessGetter () { return mockThread }, userById () { return null } */ },
  //     computed: { authUser () { return null } }
  //   }

  //   const wrapper = shallowMount(ThreadShow, option)
  //   const links = wrapper.findAllComponents(RouterLinkStub)

  //   expect(links[0].props().to.name).toBe('SignIn')
  //   expect(links[1].props().to.name).toBe('Register')
  // })

  it('ThreadShow loads PostList component', () => {
    const wrapper = shallowMount(ThreadShow, options)

    expect(wrapper.findComponent({ name: 'PostList' }).exists()).toBe(true)
  })
  it('ThreadShow loads PostEditor component', () => {
    const wrapper = shallowMount(ThreadShow, options)

    expect(wrapper.findComponent({ name: 'PostEditor' }).exists()).toBe(true)
  })
})
