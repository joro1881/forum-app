import { shallowMount, mount, RouterLinkStub } from '@vue/test-utils'
import SignIn from '@/pages/SignIn.vue'
import AppFormField from '@/components/AppFormField.vue'
import { Form as VeeForm } from 'vee-validate'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { store } from '@/helpers/testingHelpers'

const mockRoute = {
  query: {
    redirectTo: 1
  }
}

const mockRouter = {}

const options = {
  global: {
    plugins: [store, VeeValidatePlugin],
    components: { AppFormField, 'router-link': RouterLinkStub },
    mocks: {
      $router: mockRouter,
      $route: mockRoute
    }
  },
  methods: {
    signIn () { },
    signInWithGoogle () { },
    successRedirect () { }
  }
}

describe('SignIn view page', () => {
  it('renders title', () => {
    const wrapper = mount(
      SignIn,
      options
    )
    const msg = 'Login'

    expect(wrapper.find('h1').text()).toContain(msg)
  })

  it('renders VeeForm component and fields', () => {
    const wrapper = mount(SignIn, options)

    expect(wrapper.findComponent(VeeForm).exists()).toBe(true)
    expect(wrapper.findAllComponents(AppFormField).length).toEqual(2)
  })
})
