const path = require('path')
const { execSync } = require('child_process')
const { Readable } = require('stream')
const { pipeline } = require('stream/promises')
const { createWriteStream } = require('fs')
const sublimeColorScheme = require('../templates/sublime-color-scheme')
// const sublimeColorSchemeFixed = require('../templates/sublime-color-scheme-fixed')
const iterm = require('../templates/iterm')
const sublimeTheme = require('../templates/sublime-theme')
const colors = require('../colors')
const sublimeMergeCommitMessage = require('../templates/sublime-merge/commit-message')
const sublimeMergeDiff = require('../templates/sublime-merge/diff')
const sublimeMergeFileMode = require('../templates/sublime-merge/file-mode')
const sublimeMergeTheme = require('../templates/sublime-merge/theme')

async function main() {
  console.log('Building...')

  execSync('rm -rf build')
  execSync('mkdir build')
  execSync('mkdir build/sublime-merge')

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
    { input: JSON.stringify(colors, null, 2), output: 'colors.json' },
    {
      input: sublimeMergeCommitMessage,
      output: 'sublime-merge/Commit Message - Times Square.sublime-settings',
    },
    {
      input: sublimeMergeDiff,
      output: 'sublime-merge/Diff - Times Square.sublime-settings',
    },
    {
      input: sublimeMergeFileMode,
      output: 'sublime-merge/File Mode - Times Square.sublime-settings',
    },
    {
      input: sublimeMergeTheme,
      output: 'sublime-merge/Times Square.sublime-theme',
    },
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
