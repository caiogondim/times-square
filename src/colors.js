const Color = require('color')

function colorToRgb(color) {
  const [red, green, blue] = color.rgb().array()
  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

function colorToSrgb(color) {
  const [red, green, blue] = color.rgb().array()
  return {
    red: red / 256,
    green: green / 256,
    blue: blue / 256,
  }
}

const dark = {
  rgb: {
    background: 'rgb(43, 43, 43)',
    foreground: 'rgb(184, 184, 184)',
    red: 'rgb(236, 164, 178)',
    yellow: 'rgb(217, 178, 100)',
    green: 'rgb(129, 201, 99)',
    cyan: 'rgb(105, 199, 188)',
    blue: 'rgb(137, 189, 234)',
    magenta: 'rgb(222, 162, 234)',
    white: 'rgb(254, 254, 254)',
    comment: 'rgb(117, 117, 117)',
  },
}
dark.rgb.lineHighlight = colorToRgb(Color(dark.rgb.background).lighten(0.25))
dark.rgb.selection = colorToRgb(Color(dark.rgb.background).lighten(0.75))
dark.rgb.black = colorToRgb(Color(dark.rgb.background).darken(0.5))
dark.rgb.gray1 = colorToRgb(Color(dark.rgb.background).lighten(0.5))
dark.rgb.gray2 = colorToRgb(Color(dark.rgb.background).lighten(0.25))
dark.rgb.gray3 = colorToRgb(Color(dark.rgb.background))
dark.rgb.gray4 = colorToRgb(Color(dark.rgb.background).darken(0.25))
dark.rgb.gray5 = colorToRgb(Color(dark.rgb.background).darken(0.5))

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
  lineHighlight: Color(dark.rgb.lineHighlight).hex(),
}

dark.srgb = {
  background: colorToSrgb(Color(dark.rgb.background)),
  foreground: colorToSrgb(Color(dark.rgb.foreground)),
  red: colorToSrgb(Color(dark.rgb.red)),
  yellow: colorToSrgb(Color(dark.rgb.yellow)),
  green: colorToSrgb(Color(dark.rgb.green)),
  cyan: colorToSrgb(Color(dark.rgb.cyan)),
  blue: colorToSrgb(Color(dark.rgb.blue)),
  magenta: colorToSrgb(Color(dark.rgb.magenta)),
  selection: colorToSrgb(Color(dark.rgb.selection)),
  white: colorToSrgb(Color(dark.rgb.white)),
  black: colorToSrgb(Color(dark.rgb.black)),
  comment: colorToSrgb(Color(dark.rgb.comment)),
  lineHighlight: colorToSrgb(Color(dark.rgb.lineHighlight)),
}

module.exports = { dark }
