// const checkPermission = require('./mainActivity')
// describe('QR Code Reader', () => {

//   test('It properly detects permissions', () => {
//     expect(mainActivity.checkPermission('1')).toBe(true)
//     expect(mainActivity.checkPermission('0')).toBe(false)
//   })

//   test('It properly requests permissions', () => {
//     var testCameraPermission = 0
//     mainActivity.requestPermission(testCameraPermission)
//     expect(testCameraPermission).toBe(1)
//     expect(mainActivity.checkPermission(testCameraPermission).toBe(true))
//   })

// })

// temporary placeholder while we wait for molham's code
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});