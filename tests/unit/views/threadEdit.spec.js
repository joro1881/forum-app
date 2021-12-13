import { shallowMount, mount } from '@vue/test-utils'
import ThreadEdit from '@/pages/ThreadEdit.vue'
import ThreadEditor from '@/components/ThreadEditor.vue'
import AppFormField from '@/components/AppFormField.vue'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { store } from '@/helpers/testingHelpers'

const mockRouter = {}
const options = {
  props: {
    id: '1'
  },
  global: {
    plugins: [store, VeeValidatePlugin],
    mocks: {
      $router: mockRouter
    },
    components: { ThreadEditor, AppFormField }
  },
  methods: {
    save () { },
    cancel () { },
    loadInitialData () { }
  }
}

describe('ThreadEdit view page', () => {
  it('renders title', () => {
    const wrapper = mount(ThreadEdit, options)
    const msg = 'Editing awesome title'

    expect(wrapper.find('h1').text()).toContain(msg)
  })

  it('ThreadEdit loads ThreadEditor component', () => {
    const wrapper = shallowMount(ThreadEdit, options)

    expect(wrapper.findComponent({ name: 'ThreadEditor' }).exists()).toBe(true)
  })
})
