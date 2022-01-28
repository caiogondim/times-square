const path = require('path')
const { watch } = require('fs')

function clearRequireCache() {
  Object.keys(require.cache).forEach(function (key) {
    delete require.cache[key]
  })
}

async function onFileChange() {
  try {
    clearRequireCache()

    const build = require('./build')
    const installOnSublime = require('./install-on-sublime-text')

    await build()
    await installOnSublime()
    console.log('')
  } catch (error) {
    if (error?.constructor === SyntaxError) {
      console.error(error)
    } else {
      throw error
    }
  }
}

async function main() {
  console.log(
    'Watching files under src/ and copying build artifacts to Sublime Text app...'
  )
  console.log('')
  const srcPath = path.resolve(__dirname, '..', '..', 'src')
  watch(srcPath, { recursive: true }, onFileChange)
}

main()
