'use strict'

const through = require('through2')
const PluginError = require('plugin-error')
const processHtml = require('./process-html')

const PLUGIN_NAME = 'gulp-lqip-base64'

const lqipBase64 = options => {
  return through.obj((file, _, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    ;(async () => {
      try {
        const newFile = await processHtml(file, options)
        callback(null, newFile)
      } catch (err) {
        callback(new PluginError(PLUGIN_NAME, err))
      }
    })()
  })
}

module.exports = lqipBase64
