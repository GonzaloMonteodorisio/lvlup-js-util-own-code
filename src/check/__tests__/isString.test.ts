import { describe, test, expect } from 'vitest';
import { isString } from '@/check';

describe('isString', () => {
  test.each([
    ['', true],
    [null, false],
    [undefined, false],
    [2, false],
    [{}, false]
  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
  /*
  it('isString("") should be true', () => {
    expect(isString("")).toBe(true)
  })

  it('isString(null) should be false', () => {
    expect(isString(null)).toBe(false)
  })
  */
})

