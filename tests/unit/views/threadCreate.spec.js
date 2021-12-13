import { shallowMount, mount } from '@vue/test-utils'
import ThreadCreate from '@/pages/ThreadCreate.vue'
import ThreadEditor from '@/components/ThreadEditor.vue'
import AppFormField from '@/components/AppFormField.vue'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { store } from '@/helpers/testingHelpers'

const mockRouter = {}
const options = {
  props: {
    forumId: '1'
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

describe('ThreadCreate view page', () => {
  it('renders title', () => {
    const wrapper = mount(ThreadCreate, options)
    const msg = 'Create new thread in'

    expect(wrapper.find('h1').text()).toContain(msg)
  })

  it('ThreadCreate loads ThreadEditor component', () => {
    const wrapper = shallowMount(ThreadCreate, options)

    expect(wrapper.findComponent({ name: 'ThreadEditor' }).exists()).toBe(true)
  })
})
