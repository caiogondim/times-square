const path = require('path')
const { promisify } = require('util')
const { Readable } = require('stream')
const { pipeline } = require('stream/promises')
const { createWriteStream } = require('fs')
const darkVariableSublimeTextColorScheme = require('../templates/dark-variable-sublime-text-color-scheme')
const darkFixedSublimeTextColorScheme = require('../templates/dark-fixed-sublime-text-color-scheme')

async function main() {
	const inputOutputMap = [
		{ input: darkVariableSublimeTextColorScheme, output: 'times-square-dark-variable.sublime-color-scheme'},
		{ input: darkFixedSublimeTextColorScheme, output: 'times-square-dark-fixed.sublime-color-scheme'}
	]
	for (const { input, output } of inputOutputMap) {
		const writeStream = createWriteStream(path.resolve(__dirname, '..', '..', 'build', output))
		await pipeline(Readable.from(input), writeStream)
	}
}

main()