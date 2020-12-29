const ColorContrastChecker = require('color-contrast-checker')
const { dark } = require('../colors')

const colorContrastChecker = new ColorContrastChecker()

it('has AA contrast between background and all foreground dark colors', () => {
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.foreground, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.red, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.yellow, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.green, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.cyan, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.blue, 14)
  ).toBe(true)
  expect(
    colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.magenta, 14)
  ).toBe(true)
})
