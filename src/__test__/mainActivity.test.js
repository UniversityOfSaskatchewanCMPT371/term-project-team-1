const checkPermission = require('./mainActivity')
describe('QR Code Reader', () => {

  test('It properly detects permissions', () => {
    expect(mainActivity.checkPermission('1')).toBe(true)
    expect(mainActivity.checkPermission('0')).toBe(false)
  })

  test('It properly requests permissions', () => {
    var testCameraPermission = 0
    mainActivity.requestPermission(testCameraPermission)
    expect(testCameraPermission).toBe(1)
    expect(mainActivity.checkPermission(testCameraPermission).toBe(true))
  })

})
