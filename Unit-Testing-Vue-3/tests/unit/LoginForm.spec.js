import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload when logging in', () => {
    const name = 'Batman'
    const wrapper = mount(LoginForm)

    // 1: Find the input
    const input = wrapper.find('input[data-testid="name-input"]')

    // 2: Set the value for the input
    input.setValue(name)

    // 3: Simulate the form being submitted
    wrapper.trigger('submit')

    // 4: Assert that the event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5: Assert the payload returns what is expected
    const expected = {
      name: name
    }

    expect(formSubmittedCalls[0][0]).toMatchObject(expected)
  })

  //   it('', () => {
  //     const wrapper = mount(LoginForm)
  //   })
})
