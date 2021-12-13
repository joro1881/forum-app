import { shallowMount, mount, RouterLinkStub } from '@vue/test-utils'
import TheNavbar from '@/components/TheNavbar.vue'
import AppAvatarImg from '@/components/AppAvatarImg.vue'
import { store, mockRouter } from '@/helpers/testingHelpers'

const options = {
  global: {
    plugins: [store],
    mocks: {
      $router: mockRouter
    },
    components: { 'router-link': RouterLinkStub, AppAvatarImg },
    directives: {
      'v-click-outside': {},
      'v-page-scroll': {}
    }
  },
  methods: {
  }
}

describe('TheNavbar component', () => {
  it('renders AppAvatarImg', () => {
  //   const wrapper = shallowMount(TheNavbar, options)

  //   // expect(wrapper.find('.post-content').text()).toContain('random encounter with aliens')
  //   expect(wrapper.findComponent(AppAvatarImg).exists()).toBe(true)
  })
})
