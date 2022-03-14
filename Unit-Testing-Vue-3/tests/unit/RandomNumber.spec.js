import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('RandomNumber should be 0 by default', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('RandomNumber should be 1 and 10 when button clicked', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber >= 1 && randomNumber <= 10).toBeTruthy()
  })

  test('RandomNumber should be 200 and 300 when button clicked', async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300
      }
    })
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber >= 200 && randomNumber <= 300).toBeTruthy()
  })
})
