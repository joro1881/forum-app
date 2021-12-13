import { shallowMount } from '@vue/test-utils'
import AppFormField from '@/components/AppFormField.vue'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'

describe('AppFormField sets vee field', () => {
  it('renders the input and the err message', () => {
    const wrapper = shallowMount(AppFormField, {
      global: {
        plugins: [VeeValidatePlugin]
      },
      props: {
        name: 'text',
        label: 'Text',
        modelValue: 'exampleinput2'
      },
      plugins: []
    })

    expect(wrapper.find('.form-input').exists()).toBe(true)
    expect(wrapper.find('.form-error').exists()).toBe(true)
  })
})
