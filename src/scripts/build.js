const path = require('path')
const { promisify } = require('util')
const { Readable } = require('stream')
const { pipeline } = require('stream/promises')
const { createWriteStream } = require('fs')
const darkSublimeTextColorScheme = require('../templates/dark-sublime-text-color-scheme')

async function main() {
	const writeStream = createWriteStream(path.resolve(__dirname, '..', '..', 'build', 'times-square-dark.sublime-color-scheme'))
	await pipeline(Readable.from(darkSublimeTextColorScheme), writeStream)
}

main()