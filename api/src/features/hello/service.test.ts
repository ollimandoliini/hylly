import * as fetch from 'jest-fetch-mock'
import { logger } from 'src/logger'
import { doHello } from './service'

describe('.sendSMS()', () => {
  it('should send SMS request to clickatell and log success', async () => {
    const logSpy = jest.spyOn(logger, 'info')
    fetch.once('Success')
    await doHello('hello world')
    expect(logSpy).toHaveBeenLastCalledWith('done: hello world')
  })
})
