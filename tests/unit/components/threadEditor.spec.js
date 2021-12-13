import { shallowMount, mount } from '@vue/test-utils'
import ThreadEditor from '@/components/ThreadEditor.vue'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { Form as VeeForm } from 'vee-validate'
import AppFormField from '@/components/AppFormField.vue'
import { store } from '@/helpers/testingHelpers'

const options = {
  global: {
    plugins: [store, VeeValidatePlugin],
    components: { AppFormField }
  },
  methods: {
    save () { }
  }
}

describe('ThreadEditor component', () => {
  it('renders submit button with cancel', () => {
    const wrapper = mount(ThreadEditor, options)
    const buttons = wrapper.findAll('button')

    expect(buttons[0].text()).toContain('Cancel')
    expect(buttons[1].text()).toContain('Publish')
  })

  it('renders update button with cancel', () => {
    const wrapper = mount(ThreadEditor, { ...options, props: { title: 'something true' } })
    const buttons = wrapper.findAll('button')

    expect(buttons[0].text()).toContain('Cancel')
    expect(buttons[1].text()).toContain('Update')
  })

  it('renders VeeForm component and fields', () => {
    const wrapper = mount(ThreadEditor, options)

    expect(wrapper.findComponent(VeeForm).exists()).toBe(true)
    expect(wrapper.findAllComponents(AppFormField).length).toEqual(2)
  })
})
