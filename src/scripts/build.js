const path = require('path')
const { Readable } = require('stream')
const { pipeline } = require('stream/promises')
const { createWriteStream } = require('fs')
const darkVariableSublimeTextColorScheme = require('../templates/dark-variable-sublime-text-color-scheme')
const darkFixedSublimeTextColorScheme = require('../templates/dark-fixed-sublime-text-color-scheme')
const iterm = require('../templates/iterm')
const darkSublimeTextTheme = require('../templates/dark-sublime-text-theme')

async function main() {
  console.log('Building...')

  const inputOutputMap = [
    {
      input: darkVariableSublimeTextColorScheme,
      output: 'times-square-dark-variable.sublime-color-scheme',
    },
    {
      input: darkFixedSublimeTextColorScheme,
      output: 'times-square-dark-fixed.sublime-color-scheme',
    },
    { input: iterm, output: 'times-square.itermcolors' },
    { input: darkSublimeTextTheme, output: 'times-square.sublime-theme' },
  ]
  for (const { input, output } of inputOutputMap) {
    const writeStream = createWriteStream(
      path.resolve(__dirname, '..', '..', 'build', output)
    )
    await pipeline(Readable.from(input), writeStream)
  }

  console.log('Done.')
}

if (require.main === module) {
  main()
}

module.exports = main
