/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
test('Check all entry points', () => {
  expect(() => require('..')).not.toThrow()
  expect(() => require('../src/base')).not.toThrow()
  expect(() => require('../src/next')).not.toThrow()
  expect(() => require('../src/react-testing-library')).not.toThrow()
  expect(() => require('../src/typescript')).not.toThrow()
})
