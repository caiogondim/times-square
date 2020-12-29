const hsluv = require('hsluv')
const ColorContrastChecker = require('color-contrast-checker')
const { dark } = require('../colors')

const colorContrastChecker = new ColorContrastChecker()

// const darkColors = {
// 	'background': '#383838',
// 	'foreground': '#a1a1a1',
// 	'red': '#ff7c9b',
// 	'orange': '#ff8528',
// 	'yellow': '#cf9f01',
// 	'green': '#5bbc01',
// 	'cyan': '#01baab',
// 	'blue': '#01b1fc',
// 	'magenta': '#ea76ff'
// }

it('has AA contrast between background and all foreground dark colors', () => {
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.foreground, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.red, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.yellow, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.green, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.cyan, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.blue, 14)).toBe(true)
	expect(colorContrastChecker.isLevelAA(dark.hex.background, dark.hex.magenta, 14)).toBe(true)
})
