import {expect, describe, test, it} from 'vitest'
import { arraylable } from '@/arrays/arraylable'

type ArgumentType = null | {} | number[] | string[] | number | (() => void)

type ExpectedValueType = number[] | string[] | []

describe('arraylable', () => {
  test.each<[ArgumentType, ExpectedValueType]>([
    [null, []],
    [{}, []],
    [[1,2,3], [1,2,3]],
    [['some-value'], ['some-value']],
    [1, []],
    [() => {}, []]
  ])('arraylable(%j) should be %j', (arg, expected) => {
    // @ts-expect-error should accept any value
    expect(arraylable(arg)).toStrictEqual(expected)
  })
  /*
  it('should be empty array when input is null', () => {
    expect(arraylable(null)).toStrictEqual([])
  })

  it('it should return the same array when input is [1,2,3]', () => {
    expect(arraylable([1,2,3])).toStrictEqual([1,2,3])
  })
  */
})