const checkPermission = require('./mainActivity')

test('It properly detects permissions', () => {
  expect(checkPermission('1')).toBe(true)
  expect(checkPermission('0')).toBe(false)
})

test('It properly requests permissions') () => {
  expect(requestPermission('0')).toBe(true)
})
