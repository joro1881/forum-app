import { shallowMount, mount } from '@vue/test-utils'
import PostEditor from '@/components/PostEditor.vue'
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
    save () {}
  }
}

describe('PostEditor component', () => {
  it('renders VeeForm and AppFormField', () => {
    const wrapper = mount(PostEditor, options)

    expect(wrapper.findComponent(VeeForm).exists()).toBe(true)
    expect(wrapper.findComponent(AppFormField).exists()).toBe(true)
  })

  it('renders submit button', () => {
    const wrapper = mount(PostEditor, { ...options, props: { post: { text: 'another random alien post' } } })

    expect(wrapper.find('button').text()).toContain('Submit Post')
  })

  it('renders update button', () => {
    const wrapper = mount(PostEditor, { ...options, props: { post: { id: 1, text: 'another random alien post' } } })

    expect(wrapper.find('button').text()).toContain('Update Post')
  })
})
