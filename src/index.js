'use strict'

const through = require('through2')
const PluginError = require('plugin-error')
const { processHtml } = require('./process-html')

const PLUGIN_NAME = 'gulp-srcset-lqip'

const srcsetLqip = () => {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    ;(async () => {
      try {
        file = await processHtml(file)
        callback(null, file)
      } catch (err) {
        callback(new PluginError(PLUGIN_NAME, err))
      }
    })()
  })
}

module.exports = srcsetLqip
