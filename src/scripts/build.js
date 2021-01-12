const path = require('path')
const { Readable } = require('stream')
const { pipeline } = require('stream/promises')
const { createWriteStream } = require('fs')
const sublimeColorScheme = require('../templates/sublime-color-scheme')
// const sublimeColorSchemeFixed = require('../templates/sublime-color-scheme-fixed')
const iterm = require('../templates/iterm')
const sublimeTheme = require('../templates/sublime-theme')

async function main() {
  console.log('Building...')

  const inputOutputMap = [
    {
      input: sublimeColorScheme,
      output: 'Times Square.sublime-color-scheme',
    },
    // {
    //   input: sublimeColorSchemeFixed,
    //   output: 'Times Square (fixed).sublime-color-scheme',
    // },
    { input: sublimeTheme, output: 'Times Square.sublime-theme' },
    { input: iterm, output: 'Times Square.itermcolors' },
  ]
  for (const { input, output } of inputOutputMap) {
    const writeStream = createWriteStream(
      path.resolve(__dirname, '..', '..', 'build', output)
    )
    await pipeline(Readable.from(input), writeStream)
  }

  console.log('Done')
}

if (require.main === module) {
  main()
}

module.exports = main
