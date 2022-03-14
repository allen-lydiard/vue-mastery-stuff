import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    const mockedMessage = 'Hello World!'
    getMessage.mockResolvedValueOnce({ text: mockedMessage })

    const wrapper = mount(MessageDisplay)

    await flushPromises()

    expect(getMessage).toBeCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(mockedMessage)
  })

  it('Displays an error when getMessage fails', async () => {
    const mockedError = 'Oops, something caught on fire and broke!'
    getMessage.mockRejectedValueOnce(mockedError)

    const wrapper = mount(MessageDisplay)

    await flushPromises()

    expect(getMessage).toBeCalledTimes(1)
    const error = wrapper.find('[data-testid="message-error"]').text()
    expect(error).toEqual(mockedError)
  })
})
