const path = require('path')
const fs = require('fs').promises

async function main() {
  console.log('Copying build artifacts to Sublime Text app...')

  const buildFolder = path.resolve(__dirname, '..', '..', 'build')
  const sublimePkgsUserFolder = path.resolve(
    process.env.HOME,
    'Library',
    'Application Support',
    'Sublime Text 3',
    'Packages',
    'User'
  )
  const sourceTargetMap = [
    {
      src: path.resolve(buildFolder, 'times-square.sublime-theme'),
      target: path.resolve(sublimePkgsUserFolder, 'times-square.sublime-theme'),
    },
    {
      src: path.resolve(
        buildFolder,
        'times-square-dark-variable.sublime-color-scheme'
      ),
      target: path.resolve(
        sublimePkgsUserFolder,
        'times-square-dark-variable.sublime-color-scheme'
      ),
    },
  ]

  for (const { src, target } of sourceTargetMap) {
    await fs.copyFile(src, target)
  }
  console.log('Done.')
}

if (require.main === module) {
  main()
}

module.exports = main
