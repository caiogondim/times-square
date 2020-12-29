const { dark } = require('../colors')

const template = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Ansi 0 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.comment.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.comment.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.comment.red}</real>
	</dict>
	<key>Ansi 1 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.red.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.red.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.red.red}</real>
	</dict>
	<key>Ansi 10 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.green.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.green.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.green.red}</real>
	</dict>
	<key>Ansi 11 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.yellow.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.yellow.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.yellow.red}</real>
	</dict>
	<key>Ansi 12 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.blue.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.blue.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.blue.red}</real>
	</dict>
	<key>Ansi 13 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.magenta.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.magenta.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.magenta.red}</real>
	</dict>
	<key>Ansi 14 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.cyan.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.cyan.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.cyan.red}</real>
	</dict>
	<key>Ansi 15 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.white.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.white.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.white.red}</real>
	</dict>
	<key>Ansi 2 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.green.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.green.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.green.red}</real>
	</dict>
	<key>Ansi 3 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.yellow.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.yellow.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.yellow.red}</real>
	</dict>
	<key>Ansi 4 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.blue.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.blue.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.blue.red}</real>
	</dict>
	<key>Ansi 5 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.magenta.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.magenta.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.magenta.red}</real>
	</dict>
	<key>Ansi 6 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.cyan.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.cyan.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.cyan.red}</real>
	</dict>
	<key>Ansi 7 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.white.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.white.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.white.red}</real>
	</dict>
	<key>Ansi 8 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.comment.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.comment.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.comment.red}</real>
	</dict>
	<key>Ansi 9 Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.red.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.red.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.red.red}</real>
	</dict>
	<key>Background Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.background.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.background.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.background.red}</real>
	</dict>
	<key>Badge Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.red.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.red.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.red.red}</real>
	</dict>
	<key>Bold Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Cursor Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Cursor Guide Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Cursor Text Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Foreground Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Link Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.blue.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.blue.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.blue.red}</real>
	</dict>
	<key>Selected Text Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.foreground.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.foreground.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.foreground.red}</real>
	</dict>
	<key>Selection Color</key>
	<dict>
		<key>Alpha Component</key>
		<real>1</real>
		<key>Blue Component</key>
		<real>${dark.srgb.selection.blue}</real>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Green Component</key>
		<real>${dark.srgb.selection.green}</real>
		<key>Red Component</key>
		<real>${dark.srgb.selection.red}</real>
	</dict>
</dict>
</plist>
`.trim()

module.exports = template