import 'jest'
import sum from './index'

describe('index', () => {
  it('should work', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
