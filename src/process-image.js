'use strict'

const path = require('path')
const jimp = require('jimp')

const supportedMimetypes = {
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  bmp: 'image/bmp',
  tiff: 'image/tiff',
  gif: 'image/gif'
}

const toBase64 = (extMimeType, data) =>
  `data:${extMimeType};base64,${data.toString('base64')}`

const processImage = (pathImg, originalImg) =>
  new Promise((resolve, reject) => {
    const extension = path.extname(pathImg).split('.').pop()

    jimp
      .read(pathImg)
      .then(image => image.resize(10, jimp.AUTO))
      .then(image => image.getBufferAsync(supportedMimetypes[extension]))
      .then(data =>
        resolve({
          originalImg,
          base64: toBase64(supportedMimetypes[extension], data)
        })
      )
      .catch(err => reject(err))
  })

module.exports = processImage
