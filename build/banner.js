'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * CoreUI${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author}
  * Licensed under MIT (${pkg.homepage})
  */`
}

module.exports = getBanner
