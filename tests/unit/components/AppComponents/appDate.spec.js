import { shallowMount, mount } from '@vue/test-utils'
import AppDate from '@/components/AppDate.vue'

describe('AppDate converts numbers to date', () => {
  it('renders date by seconds', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: { seconds: new Date().getTime() / 1000 }
      },
      global: {}
    })
    const msg = 'a few seconds ago'

    expect(wrapper.find('span').text()).toContain(msg)
  })

  it('renders date by hour', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: { seconds: new Date().getTime() / 1000 + 3600, nanoseconds: 335000000 }
      }
    })
    const msg = 'in an hour'

    expect(wrapper.find('span').text()).toContain(msg)
  })

  it('renders date by few hours', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: { seconds: new Date().getTime() / 1000 + 7200, nanoseconds: 335000000 }
      }
    })
    const msg = 'in 2 hour'

    expect(wrapper.find('span').text()).toContain(msg)
  })

  it('renders date by day', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: { seconds: new Date().getTime() / 1000 + 100000, nanoseconds: 335000000 }
      }
    })
    const msg = 'in a day'

    expect(wrapper.find('span').text()).toContain(msg)
  })

  it('renders date by months', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: { seconds: new Date().getTime() / 1000 + 10000000 }
      }
    })
    const msg = 'in 4 months'

    expect(wrapper.find('span').text()).toContain(msg)
  })

  it('renders date by years', () => {
    const wrapper = shallowMount(AppDate, {
      props: {
        timestamp: new Date().getTime() / 1000 + 100000000 / 3
      }
    })
    const msg = 'in a year'

    expect(wrapper.find('span').text()).toContain(msg)
  })
})
