import { expect,  test} from 'vitest'
import { sum } from '../src/sum'

test("adding 1, 2, 3, 4, 5, 6 => should be 21", () => {
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21)
})