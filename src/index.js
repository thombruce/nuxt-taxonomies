
import { resolve } from 'path'

export default async function () {
  const { nuxt } = this

  this.addPlugin({
    src: resolve(__dirname, 'plugins/taxonomies.js')
  })
}

// Used in conjunction with addModule(opts, requireOnce)
// to prevent a module being required more than once.
module.exports.meta = require('../package.json')
