const path = require('path')
const fs = require('fs').promises
const { execSync } = require('child_process')

async function main() {
  console.log('Copying build artifacts to Sublime Merge app...')

  const buildFolder = path.resolve(__dirname, '..', '..', 'build')
  const sublimeMergePkgsTimeSquareFolder = path.resolve(
    process.env.HOME,
    'Library',
    'Application Support',
    'Sublime Merge',
    'Packages',
    'Theme - Times Square'
  )

  execSync(`mkdir -p "${sublimeMergePkgsTimeSquareFolder}"`)

  const sourceTargetMap = [
    {
      src: path.resolve(buildFolder, 'Times Square.sublime-color-scheme'),
      target: path.resolve(
        sublimeMergePkgsTimeSquareFolder,
        'Times Square.sublime-color-scheme'
      ),
    },
    {
      src: path.resolve(
        buildFolder,
        'sublime-merge',
        'Times Square.sublime-theme'
      ),
      target: path.resolve(
        sublimeMergePkgsTimeSquareFolder,
        'Times Square.sublime-theme'
      ),
    },
    {
      src: path.resolve(
        buildFolder,
        'sublime-merge',
        'Commit Message - Times Square.sublime-settings'
      ),
      target: path.resolve(
        sublimeMergePkgsTimeSquareFolder,
        'Commit Message - Times Square.sublime-settings'
      ),
    },
    {
      src: path.resolve(
        buildFolder,
        'sublime-merge',
        'Diff - Times Square.sublime-settings'
      ),
      target: path.resolve(
        sublimeMergePkgsTimeSquareFolder,
        'Diff - Times Square.sublime-settings'
      ),
    },
    {
      src: path.resolve(
        buildFolder,
        'sublime-merge',
        'File Mode - Times Square.sublime-settings'
      ),
      target: path.resolve(
        sublimeMergePkgsTimeSquareFolder,
        'File Mode - Times Square.sublime-settings'
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
