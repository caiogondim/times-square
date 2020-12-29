const Color = require('color')

function colorToRgb(color) {
	const [red, green, blue] = color.rgb().array()	
	return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

const dark = {
	rgb: {
		"background": "rgb(43, 43, 43)",
		"foreground": "rgb(184, 184, 184)",
		"red": "rgb(236, 164, 178)",
		"yellow": "rgb(217, 178, 100)",
		"green": "rgb(129, 201, 99)",
		"cyan": "rgb(105, 199, 188)",
		"blue": "rgb(137, 189, 234)",
		"magenta": "rgb(222, 162, 234)",
		"comment": "rgb(117, 117, 117)"
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