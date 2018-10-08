const checkPermission = require('./mainActivity')
describe('QR Code Reader', () => {

  test('It properly detects permissions', () => {
    expect(checkPermission('1')).toBe(true)
    expect(checkPermission('0')).toBe(false)
  })

  test('It properly requests permissions') () => {
    var testCameraPermission = 0
    mainActivity.requestPermission(testCameraPermission)
    expect(testCameraPermission).toBe(true)
  })

})
