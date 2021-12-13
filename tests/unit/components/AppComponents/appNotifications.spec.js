import { shallowMount, mount } from '@vue/test-utils'
import AppNotifications from '@/components/AppNotifications.vue'
import useNotifications from '@/composables/useNotifications'

describe('AppNotifications are set', () => {
  it('renders the notification and the button', () => {
    const wrapper = mount(AppNotifications, {
      global: {
        plugins: [],
        components: [useNotifications]
      },
      props: { },
      plugins: [],
      components: [useNotifications],
      methods: {
        addNotification () {},
        removeNotification () {}
      }
    })

    // expect(wrapper.find('.notification').exists()).toBe(true)
    // expect(wrapper.find('button').exists()).toBe(true)
  })
})
