const path = require('path')
const fs = require('fs').promises

async function main() {
  console.log('Copying build artifacts to Sublime Text app...')

  const buildFolder = path.resolve(__dirname, '..', '..', 'build')
  const sublimePkgsUserFolder = path.resolve(
    process.env.HOME,
    'Library',
    'Application Support',
    'Sublime Text',
    'Packages',
    'User'
  )
  const sourceTargetMap = [
    {
      src: path.resolve(buildFolder, 'Times Square.sublime-theme'),
      target: path.resolve(sublimePkgsUserFolder, 'Times Square.sublime-theme'),
    },
    {
      src: path.resolve(buildFolder, 'Times Square.sublime-color-scheme'),
      target: path.resolve(
        sublimePkgsUserFolder,
        'Times Square.sublime-color-scheme'
      ),
    },
  ]

  for (const { src, target } of sourceTargetMap) {
    await fs.copyFile(src, target)
  }
}

if (require.main === module) {
  main()
}

module.exports = main
