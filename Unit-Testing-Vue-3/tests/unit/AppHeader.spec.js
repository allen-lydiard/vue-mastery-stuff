import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user is not logged in, no logout is shown', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBeFalsy()
  })

  test('If user is logged in, logout is shown', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBeTruthy()
  })
})
