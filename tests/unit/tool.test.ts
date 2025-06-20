import { formatSeconds } from '../../src/utils/tool'

describe('formatSeconds', () => {
  it('handles seconds less than 60', () => {
    expect(formatSeconds(45 * 1000)).toBe('45秒')
  })

  it('handles minutes', () => {
    expect(formatSeconds(90 * 1000)).toBe('1分30秒')
  })

  it('handles hours', () => {
    expect(formatSeconds(3661 * 1000)).toBe('1小时1分1秒')
  })

  it('handles days', () => {
    expect(formatSeconds(2 * 24 * 60 * 60 * 1000)).toBe('2天')
  })
})
