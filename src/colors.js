const Color = require('color')

function colorToRgb(color) {
	const [red, green, blue] = color.rgb().array()	
	return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

const dark = {
	rgb: {
		"background": "rgb(56, 56, 56)",
		"foreground": "rgb(201, 201, 201)",
		"red": "rgb(241, 189, 199)",
		"yellow": "rgb(240, 197, 111)",
		"green": "rgb(143, 222, 110)",
		"cyan": "rgb(117, 220, 208)",
		"blue": "rgb(173, 206, 240)",
		"magenta": "rgb(231, 189, 240)",
		"comment": "rgb(102, 102, 102)"
	}
}
dark.rgb.selection = colorToRgb(Color(dark.rgb.background).lighten(0.2))
dark.hex = {
	background: Color(dark.rgb.background).hex(),
	foreground: Color(dark.rgb.foreground).hex(),
	red: Color(dark.rgb.red).hex(),
	yellow: Color(dark.rgb.yellow).hex(),
	green: Color(dark.rgb.green).hex(),
	cyan: Color(dark.rgb.cyan).hex(),
	blue: Color(dark.rgb.blue).hex(),
	magenta: Color(dark.rgb.magenta).hex(),
	selection: Color(dark.rgb.selection).hex(),
	comment: Color(dark.rgb.comment).hex(),
}

module.exports = { dark }