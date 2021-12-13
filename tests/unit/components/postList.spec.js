import { shallowMount, mount } from '@vue/test-utils'
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import AppAvatarImg from '@/components/AppAvatarImg.vue'
import AppFormField from '@/components/AppFormField.vue'
import AppDate from '@/components/AppDate.vue'
import fa from '@/plugins/FontAwesome'
import VeeValidatePlugin from '@/plugins/VeeValidatePlugin'
import { store } from '@/helpers/testingHelpers'

const options = {
  props: {
    posts: [
      { id: '1', publishedAt: 1111, edited: { at: 1111 }, text: 'random encounter with aliens' },
      { id: '2', publishedAt: 1111, edited: { at: 1111 } }
    ]
  },
  global: {
    plugins: [store, fa, VeeValidatePlugin],
    components: { AppAvatarImg, AppDate, AppFormField }
  },
  components: { PostEditor },
  methods: {
    userById () { return { name: 'john', avatar: '', postsCount: 2, threadsCount: 1 } },
    toggleEditMode (id) { },
    handleUpdate () {}
  }
}

describe('PostList component', () => {
  it('renders PostEditor component', () => {
    const wrapper = shallowMount(PostList, {
      ...options,
      data () {
        return { editing: '1' }
      }
    })

    expect(wrapper.findComponent({ name: 'PostEditor' }).exists()).toBe(true)
  })

  it('renders does not PostEditor component', () => {
    const wrapper = shallowMount(PostList, options)

    expect(wrapper.find('.post-content').text()).toContain('random encounter with aliens')
  })

  it('renders posts', () => {
    const wrapper = shallowMount(PostList, options)

    expect(wrapper.findAll('.post').length).toEqual(2)
  })

  it('renders user info', () => {
    const wrapper = shallowMount(PostList, options)

    expect(wrapper.find('.user-info').exists()).toBe(true)
  })
})
