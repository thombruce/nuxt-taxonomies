
import { resolve } from 'path'

export default async function () {
  const { nuxt } = this

  this.addPlugin({
    src: resolve(__dirname, 'plugins/taxonomies.js')
  })
}
