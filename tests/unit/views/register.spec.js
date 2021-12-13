import { shallowMount, mount } from '@vue/test-utils'
import Register from '@/pages/Register.vue'
import AppFormField from '@/components/AppFormField.vue'
import { Form as VeeForm } from 'vee-validate'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { store } from '@/helpers/testingHelpers'

const mockRouter = {
  params: {
    id: 1
  }
}

const options = {
  global: {
    plugins: [store, VeeValidatePlugin],
    mocks: {
      $router: mockRouter
    },
    components: { AppFormField }
  },
  methods: {
    register () { },
    handleImageUpload () { }
  }
}

describe('Register view page', () => {
  it('renders title', () => {
    const wrapper = mount(
      Register,
      options
    )
    const msg = 'Register'

    expect(wrapper.find('h1').text()).toContain(msg)
  })

  it('renders VeeForm component and fields', () => {
    const wrapper = mount(Register, options)

    expect(wrapper.findComponent(VeeForm).exists()).toBe(true)
    expect(wrapper.findComponent(AppFormField).exists()).toBe(true)
  })
})
