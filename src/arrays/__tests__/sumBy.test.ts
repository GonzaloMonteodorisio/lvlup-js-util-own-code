import {describe, expect, it} from 'vitest'
import { sumBy } from '@/arrays/sumBy';

describe('sumBy', () => {
  it('should sum every single number by the given accesor', () => {
    const dataObj = [
      {value: 2},
      {value: 3}
    ]
    const actual = sumBy(dataObj, (item) => item.value)
    expect(actual).toBe(5)
  })

  it('should return 0 if the data object is empty', () => {
    // @ts-expect-error property value doesn't exist in item
    const actual = sumBy([], (item) => item.value)
    expect(actual).toBe(0)
  })
})